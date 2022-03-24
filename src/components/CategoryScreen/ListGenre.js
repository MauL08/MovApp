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
      showsVerticalScrollIndicator={false}
      data={Data}
      keyExtractor={(item, index) => String(index)}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={styles.mainIcon(index + 1)}
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
  mainIcon: icon => ({
    backgroundColor: Color.CONTAINER_COLOR,
    padding: moderateScale(20),
    marginBottom: moderateScale(16),
    borderRadius: moderateScale(8),
    marginRight: icon % 2 === 1 ? moderateScale(16) : moderateScale(0),
  }),
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
