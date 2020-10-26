import React, {useState} from 'react';
import {StyleSheet,View,Text  } from 'react-native';
import {fetchFilms,selectFilmInfo,resetFilmInfo} from "../features/filmSlice/filmSlice";
import {useSelector, useDispatch} from "react-redux";
import Constants from 'expo-constants';
import FilmItem from "../components/FilmItem";
import { SearchBar} from 'react-native-elements';
import { Button } from 'react-native-paper';
import Slider from '@react-native-community/slider';

function WelcomeScreen() {
    const dispatch = useDispatch();
    const [value, onChangeText] = useState('Harry');
    const [showFilms, changeShowFilms] = useState(false);
    const [sliderValue,onSliderValueChange] = useState(120);

    function onChangeHandler(text){
        onChangeText(text);
    }
    function btnHandler(){
        changeShowFilms(true)
        dispatch(resetFilmInfo());
        dispatch(fetchFilms(value));
    }
    const films = useSelector(selectFilmInfo);
    return (
        <View style={{flex:1}}> 
                <SearchBar
            onChangeText={text => onChangeHandler(text)}
            value={value}
            placeholder="Find movie"
            />
                
                <Text style={{fontSize:20,alignSelf:"center",marginBottom:15,marginTop:15}}>Filters</Text>
                <Text style={{alignSelf:"center",marginBottom:10}}>Movie length greater than {sliderValue} minutes</Text>
                <Slider
                    value={sliderValue}
                     onValueChange={(value) => onSliderValueChange(value)}
                     maximumValue={400}
                    minimumValue={0}
                    step={1}
                    thumbTintColor="black"
                 />
                 <View style={{flexDirection: 'row',justifyContent: 'space-between',alignSelf:"center"}}>
                 <Button style={{backgroundColor:"#22d1ee",borderColor:"#3d5af1",borderWidth:2,marginBottom:10}} onPress={btnHandler}>Find</Button>
                 </View>
            <View style={{marginTop:50}}>
                {(films.length>0 ?films.map((film,index) => (film.runtime>sliderValue?<View key={index}><FilmItem index={index} film={film} add={true}/></View>:null))
                :showFilms?<Text style={{alignSelf:"center",fontSize:30}}>Film not found</Text>:null)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width:"100%",
      marginTop: Constants.statusBarHeight,
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
    width:"100%",
    },

  });

export default WelcomeScreen;