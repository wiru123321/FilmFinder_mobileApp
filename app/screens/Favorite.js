import React from 'react';
import {
    View,
  } from "react-native"
import {useSelector} from "react-redux";
import {selectFavoriteFilms} from "../features/filmSlice/filmSlice";
import FilmItem from "../components/FilmItem";


const Favorite = () => {
    const favoriteFilms = useSelector(selectFavoriteFilms);
    return (
        <View style={{flex:1,marginTop:20}}>
            {favoriteFilms && Array.isArray(favoriteFilms)?(favoriteFilms.map((favoriteFilm,index) => (<View key={index}><FilmItem index={index} film={favoriteFilm} add={false}/></View>))):null}
        </View>
    );
};

export default Favorite;