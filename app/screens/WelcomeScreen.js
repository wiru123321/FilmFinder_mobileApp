import React, {useState} from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,TextInput,TouchableOpacity } from 'react-native';
import {selectCounter,fetchFilms,selectFilms} from "../features/filmSlice/filmSlice";
import {useSelector, useDispatch} from "react-redux";
import Constants from 'expo-constants';
import FilmItem from "../components/FilmItem";


function WelcomeScreen() {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);

    const [value, onChangeText] = useState('Find Film');
    
    function btnHandler(){
        dispatch(fetchFilms(value));
    }
    const films = useSelector(selectFilms);
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={{fontSize:40,alignSelf:"center"}}>Find some films!</Text>
            <View style={{flexDirection:"row",alignItems: 'center', justifyContent: 'center',}}>
            <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:'white',flex:0.3}}
            onChangeText={text => onChangeText(text)}
            value={value}/>
            <TouchableOpacity style={{ height: 40, flex:0.3,alignSelf:"center",backgroundColor:"#1e3745",  alignItems: 'center',
      justifyContent: 'center', }} onPress={btnHandler}>
                <Text style={{fontSize:22}}>Accept</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:50}}>
                {films.length>0?films.map((film,index) => (<FilmItem original_title={film.original_title} index={index} poster_path={film.poster_path} release_date={film.release_date} vote_average={film.vote_average} />))
                :<Text style={{alignSelf:"center",fontSize:30}}>Film not found</Text>}
            </View>
            </ScrollView>
        </SafeAreaView>
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
    Button:{
        width:50,
    }
  });

export default WelcomeScreen;