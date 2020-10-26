import React,{useEffect} from 'react';
import { StyleSheet, Dimensions,ScrollView} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Favorite from "../screens/Favorite";
import {useDispatch, useSelector} from 'react-redux';
import WelcomeScreen from "../screens/WelcomeScreen";
import MostRated from "../screens/MostRated";
import {fetchTopRatedFilms,fetchGenres,selectGenres} from "../features/filmSlice/filmSlice";;
const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Find film' },
    { key: 'second', title: 'Favorite films' },
    { key: 'third', title: 'Most Rated films' },
  ]);

  const renderScene = SceneMap({
    first: WelcomeScreen,
    second: Favorite,
    third: MostRated,
  });
  const selectedGenre = useSelector(selectGenres);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchGenres());
  },[])

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#c5e3f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
     scrollView: {
    width:"100%",
    },
  scene: {
    flex: 1,
  },
})