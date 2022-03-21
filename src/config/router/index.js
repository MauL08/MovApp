import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './BottomTab';
import DetailScreen from '../../screens/DetailScreen';
import SearchScreen from '../../screens/SearchScreen';
import GenresScreen from '../../screens/GenresScreen';
import CategoryScreen from '../../screens/CategoryScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Genres"
        component={GenresScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
