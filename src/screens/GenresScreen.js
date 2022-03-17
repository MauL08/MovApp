import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {FetchAll} from '../config/api';
import Color from '../config/utils/color';

import Genre from '../models/genre';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Header from '../components/GenreScreen/Header';

const GenresScreen = ({route}) => {
  const [screenStatus, setScreenStatus] = useState(false);
  const [data, getData] = useState({});

  useEffect(() => {
    FetchAll.get(getData, setScreenStatus);
  }, []);

  function GenresScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  if (screenStatus) {
    const objId = route.params.genreId;

    const genreTitle = Object.keys(Genre).find(key => Genre[key] === objId);

    const movieByGenre = data.results.filter(item => {
      return item.genre_ids.includes(objId);
    });

    return (
      <View style={styles.container}>
        <GenresScreenStatusBar />
        <Header title={genreTitle} />
        <MovieList data={movieByGenre} />
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
