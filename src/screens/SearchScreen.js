import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {FetchAll} from '../config/api';
import Color from '../config/utils/color';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import Header from '../components/SearchScreen/Header';
import {moderateScale} from 'react-native-size-matters';

const SearchScreen = () => {
  const [data, getData] = useState(false);

  useEffect(() => {
    FetchAll.get(getData);
  }, []);

  function SearchScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  if (data) {
    return (
      <View style={styles.container}>
        <SearchScreenStatusBar />
        <Header />
        <View style={styles.listContainer}>
          <MovieList data={data.results} />
        </View>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  listContainer: {
    marginBottom: moderateScale(30),
    alignItems: 'center',
  },
});
