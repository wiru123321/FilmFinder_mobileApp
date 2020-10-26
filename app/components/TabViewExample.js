import React,{useEffect} from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Favorite from "../screens/Favorite";
import {useDispatch, useSelector} from 'react-redux';
import WelcomeScreen from "../screens/WelcomeScreen";
import MostRated from "../screens/MostRated";
import {fetchGenres,selectGenres,selectFavoriteFilms} from "../features/filmSlice/filmSlice";;
import { Badge  } from 'react-native-elements'
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
  const selectedFavFilms = useSelector(selectFavoriteFilms);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchGenres());
  },[])

  const getTabBarBadge = (props) => {
    const {route} = props

      if (route.key === 'second') {
       return <Badge value={selectedFavFilms.length==0 ? "0" : selectedFavFilms.length} status="error" />
}
}

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props =>
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'red'}}
            renderBadge={(props) =>getTabBarBadge(props)}
        />
      }
      tabBarPosition={'top'}
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