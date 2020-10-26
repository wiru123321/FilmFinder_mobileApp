import React from 'react';
import { View,Text } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {selectTopRated} from "../features/filmSlice/filmSlice";
import FilmItem from "../components/FilmItem";
import Filter from "../components/Filters/Filter";

const MostRated = () => {
    const MostRatedFilms = useSelector(selectTopRated);
    return (
        <View>
            <Filter whatFilter={true}/>
            {MostRatedFilms.map((MostRatedFilm,index) => <View key={index}><FilmItem index={index} film={MostRatedFilm} add={false}/></View>)}
        </View>
    );
};

export default MostRated;