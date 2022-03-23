import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {FetchAll} from '../config/api';
import Color from '../config/utils/color';

import Genres from '../models/newGenre';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Header from '../components/GenreScreen/Header';
import {moderateScale} from 'react-native-size-matters';

const GenresScreen = ({route}) => {
  const [data, getData] = useState(false);

  useEffect(() => {
    FetchAll.get(getData);
  }, []);

  function GenresScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  if (data) {
    const objId = route.params.genreId;

    const genreTitle = Genres.map(data => {
      if (data.id === objId) {
        return data.name;
      }
    });

    const movieByGenre = data.results.filter(item => {
      return item.genre_ids.includes(objId);
    });

    return (
      <View style={styles.container}>
        <GenresScreenStatusBar />
        <Header title={genreTitle} />
        <View style={{marginBottom: moderateScale(14)}}>
          <MovieList data={movieByGenre} />
        </View>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default GenresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
