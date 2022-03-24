import {Alert} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';

import Router from './config/router';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const connection = NetInfo.fetch().then(state => {
    return state.isConnected;
  });

  if (connection) {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  } else {
    Alert.alert('Error', 'No internet connection');
  }
};

export default App;
