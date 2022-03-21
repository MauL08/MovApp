import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import Color from '../../config/utils/color';
import Data from '../../models/newGenre';

const ListGenre = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      numColumns={2}
      data={Data}
      keyExtractor={(item, index) => String(index)}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.mainIcon}
          onPress={() => navigation.navigate('Genres', {genreId: item.id})}>
          <View style={styles.iconContainer}>
            <Image source={item.image} style={styles.imageIcon} />
          </View>
          <Text style={styles.iconText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListGenre;

const styles = StyleSheet.create({
  mainIcon: {
    backgroundColor: Color.CONTAINER_COLOR,
    padding: moderateScale(20),
    margin: moderateScale(12),
    borderRadius: moderateScale(8),
  },
  iconContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    padding: moderateScale(18),
    borderRadius: moderateScale(8),
  },
  imageIcon: {
    height: moderateScale(80),
    width: moderateScale(85),
    tintColor: Color.ACTIVE_BUTTON_COLOR,
  },
  iconText: {
    textAlign: 'center',
    marginTop: moderateScale(8),
    fontSize: moderateScale(14),
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
  },
});
