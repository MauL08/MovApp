import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import Color from '../../config/utils/color';
import {BackIcon} from '../../assets';

const Header = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.iconStyle} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.genreText}>{props.title} Movies</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
    alignItems: 'center',
  },
  iconStyle: {
    tintColor: Color.ACTIVE_BUTTON_COLOR,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  genreText: {
    marginRight: moderateScale(12),
    color: Color.ACTIVE_BUTTON_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});
