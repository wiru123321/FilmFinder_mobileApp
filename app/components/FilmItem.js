import React from 'react';
import {View,Text,Image} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

const url ="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
const FilmItem = ({ release_date,original_title,index,poster_path,vote_average }) => {
    return (
        <View style={{marginBottom:50}}>
        <View style={{height:300,flexDirection:"row"}}>
        <Image style={{flex:0.6}} resizeMode="contain" source={{uri: url + poster_path}}/>
        <View style={{flex:0.4,flexDirection:"column",alignItems: 'center'}}>
           <Text style={{textAlign:"center",marginBottom:10}}>{original_title}</Text>
           <Text style={{textAlign:"center"}}>{release_date}</Text>
        </View>
    </View>
    <Rating showRating readonly ratingCount={5} fractions={1} startingValue={vote_average/2} style={{alignSelf:"center"}} imageSize={40}/>
    </View>
    );
};

export default FilmItem;