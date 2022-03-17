import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

import {BackIcon, NextIcon} from '../../assets';
import Color from '../../config/utils/color';

const Header = () => {
  const navigation = useNavigation();
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.iconStyle} />
      </TouchableOpacity>
      <TextInput
        style={styles.input(focus)}
        placeholder="Seacrh here"
        placeholderTextColor={Color.DISABLE_BUTTON_COLOR}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <TouchableOpacity>
        <Image source={NextIcon} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    tintColor: Color.ACTIVE_BUTTON_COLOR,
  },
  input: clicked => ({
    color: Color.TEXT_COLOR,
    height: moderateScale(40),
    width: moderateScale(275),
    padding: moderateScale(10),
    borderBottomWidth: moderateScale(2),
    borderBottomColor: clicked
      ? Color.ACTIVE_BUTTON_COLOR
      : Color.DISABLE_BUTTON_COLOR,
  }),
});
