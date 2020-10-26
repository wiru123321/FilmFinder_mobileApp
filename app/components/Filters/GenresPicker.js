import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {Picker} from "@react-native-community/picker"
import { useDispatch, useSelector } from "react-redux";
import {selectGenres,setSelectedGenres,fetchTopRatedFilms,resetTopRated} from "../../features/filmSlice/filmSlice";

const GenresPicker = ({whatFilter}) => {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState();
    const genres = useSelector(selectGenres);

    return (
      <View style={styles.container}>
        <Text style={{fontSize:17,marginBottom:15}}>Select genre:</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ width: 150,marginBottom:15 }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            if(whatFilter){
            dispatch(resetTopRated());
            dispatch(setSelectedGenres(itemValue.id));
            dispatch(fetchTopRatedFilms(itemValue.id));
            }
            else{
              dispatch(setSelectedGenres(itemValue.id));
            }
           
          }}
        >
          {genres.map((genre,index) => <Picker.Item key={index} label={genre.name} value={genre} /> )}
        </Picker>
      </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection:"row",
      justifyContent:"space-evenly"
    }
  });

export default GenresPicker;