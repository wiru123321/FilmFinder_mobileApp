import React, {useEffect,useState} from 'react';
import {StyleSheet,View,Text,Image,SafeAreaView,ScrollView,TextInput,Button } from 'react-native';
import {selectCounter,counterChange,fetchFilms,selectFilms} from "../features/filmSlice/filmSlice";
import {useSelector, useDispatch} from "react-redux";
import Constants from 'expo-constants';

const url ="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
const Item = ({ original_title,index,poster_path }) => (
            <View key={index} style={{height:300}}>
                <Image style={{width:"100%",height:150}} resizeMode="contain" source={{uri: url + poster_path}}></Image>
                <Text>{original_title}</Text>
            </View>
  );

function WelcomeScreen() {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);

    const [value, onChangeText] = useState('Useless Placeholder');
    
    function btnHandler(){
        dispatch(fetchFilms(value));
    }
    const films = useSelector(selectFilms);
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <TextInput  style={{ width:"30%",height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:'white'}}
            onChangeText={text => onChangeText(text)}
            value={value}/>
            <Button title="Accept" onPress={btnHandler}/>
            {films.map((film,index) => (<Item original_title={film.original_title} index={index} poster_path={film.poster_path} />))}
        
            
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      width:"100%",
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
    width:"100%",
    },
  });

export default WelcomeScreen;