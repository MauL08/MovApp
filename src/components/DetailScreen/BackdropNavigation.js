import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';

import Color from '../../config/utils/color';
import {BackIcon, LoveIcon, ShareIcon} from '../../assets';

const BackdropNavigation = props => {
  const navigation = useNavigation();
  const [loveCheck, setLoveCheck] = useState(false);

  return (
    <ImageBackground
      source={{uri: props.movieData.backdrop_path}}
      style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.interactionContainer}>
          <TouchableOpacity
            style={styles.loveIconContainer}
            onPress={() => setLoveCheck(!loveCheck)}>
            <Image source={LoveIcon} style={styles.loveIcon(loveCheck)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareIconContainer}>
            <Image source={ShareIcon} style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BackdropNavigation;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(220),
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(10),
  },
  backIconContainer: {
    padding: moderateScale(8),
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    borderRadius: moderateScale(20),
  },
  backIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: Color.DISABLE_BUTTON_COLOR,
  },
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  loveIconContainer: {
    padding: moderateScale(9),
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    marginRight: moderateScale(8),
    borderRadius: moderateScale(20),
  },
  loveIcon: val => ({
    tintColor: val ? 'red' : Color.DISABLE_BUTTON_COLOR,
  }),
  shareIconContainer: {
    padding: moderateScale(8),
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    borderRadius: moderateScale(20),
  },
  shareIcon: {
    tintColor: Color.DISABLE_BUTTON_COLOR,
  },
});
