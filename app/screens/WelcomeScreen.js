import React from 'react';
import {View,Text, Button} from 'react-native';
import {selectCounter,counterChange} from "../features/filmSlice/filmSlice";
import {useSelector, useDispatch} from "react-redux";

function WelcomeScreen() {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);
    function btnHandler(){
        dispatch(counterChange());
    }
    return (
        <View>
            <Text>{counter}</Text>
            <Button title="Click Me" onPress={btnHandler}/>
        </View>
    );
}

export default WelcomeScreen;