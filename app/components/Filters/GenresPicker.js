import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from "@react-native-community/picker"
import { useDispatch, useSelector } from "react-redux";
import {selectGenres,setSelectedGenres,fetchTopRatedFilms,resetTopRated,fetchFilms,resetFilmInfo} from "../../features/filmSlice/filmSlice";

const GenresPicker = ({whatFilter}) => {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState();
    const genres = useSelector(selectGenres);

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
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
          {genres.map((genre,index) => <Picker.Item label={genre.name} value={genre} /> )}
        </Picker>
      </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

export default GenresPicker;