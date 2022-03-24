import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import ListGenre from '../components/CategoryScreen/ListGenre';
import Color from '../config/utils/color';
import {BackIcon} from '../assets';

const CategoryScreen = () => {
  const navigation = useNavigation();

  function ScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <View style={styles.container}>
      <ScreenStatusBar />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Categories</Text>
      </View>
      <View style={styles.listContainer}>
        <ListGenre />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
  backIcon: {
    tintColor: Color.ACTIVE_BUTTON_COLOR,
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    color: Color.ACTIVE_BUTTON_COLOR,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginRight: moderateScale(18),
  },
  listContainer: {
    marginTop: moderateScale(16),
    marginBottom: moderateScale(45),
  },
});
