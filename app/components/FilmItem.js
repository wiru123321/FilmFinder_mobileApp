import React from 'react';
import {View,Text,Image} from 'react-native';
import { Rating} from 'react-native-elements';
import MoreInfoModal from "./MoreInfoModal";

const url ="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
const FilmItem = ({ film,index,add }) => {
    return (
        <View style={{marginBottom:50}} key={index}>
        <View style={{height:300,flexDirection:"row"}}>
            {film.poster_path ?<Image style={{flex:0.6}} resizeMode="contain" source={{uri: url + film.poster_path}}/>:<Text style={{flex:0.6, alignSelf:"center",}}>Image not found</Text>}
        <View style={{flex:0.4,flexDirection:"column",alignItems: 'center'}} key={index}>
           <Text style={{textAlign:"center",marginBottom:10}}>{film.original_title}</Text>
           <Text style={{textAlign:"center",marginBottom:10}}>{film.runtime} min</Text>
           <MoreInfoModal index={index} film={film} add={add}/>
        </View>
    </View>
    <Rating showRating readonly ratingCount={5} fractions={1} startingValue={film.vote_average/2} style={{alignSelf:"center"}} imageSize={40}/>
    <Text style={{textAlign:"center"}}>({film.vote_count})</Text>
    </View>
    );
};

export default FilmItem;