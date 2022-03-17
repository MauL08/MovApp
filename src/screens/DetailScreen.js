import {StyleSheet, StatusBar, FlatList, View, Image, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

import {FetchSpecific} from '../config/api';
import Color from '../config/utils/color';
import BackdropNavigation from '../components/DetailScreen/BackdropNavigation';
import DetailBanner from '../components/DetailScreen/DetailBanner';
import BodyDetail from '../components/DetailScreen/BodyDetail';
import Loading from '../components/Loading';
import ActorListTitle from '../components/DetailScreen/ActorList';
import {styles} from '../components/DetailScreen/ActorList';

const DetailScreen = ({route}) => {
  const [screenStatus, setScreenStatus] = useState(false);
  const [data, getData] = useState({});

  useEffect(() => {
    FetchSpecific.get(getData, setScreenStatus, route.params.movieId);
  }, []);

  function DetailScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  if (screenStatus) {
    console.log(route.params.movieId);
    console.log(data);
    return (
      <SafeAreaView style={styleContainer.container}>
        <FlatList
          columnWrapperStyle={{marginHorizontal: moderateScale(18)}}
          numColumns={3}
          data={data.credits.cast}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={() => (
            <>
              <DetailScreenStatusBar />
              <BackdropNavigation movieData={data} />
              <DetailBanner movieData={data} />
              <BodyDetail movieData={data} />
              <ActorListTitle />
            </>
          )}
          renderItem={({item}) => (
            <View style={styles.castContainer}>
              <Image
                source={{uri: item.profile_path}}
                style={styles.castPicture}
              />
              <View style={styles.castNameContainer}>
                <Text style={styles.castName}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
};

export default DetailScreen;

const styleContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
