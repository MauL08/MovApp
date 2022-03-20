import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

import {Logo, SearchIcon, ListIcon} from '../../assets/index';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Category')}>
        <Image source={ListIcon} style={{tintColor: '#EEB64A'}} />
      </TouchableOpacity>
      <Image source={Logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image source={SearchIcon} style={{tintColor: '#EEB64A'}} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: moderateScale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
