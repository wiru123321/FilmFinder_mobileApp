import React from 'react';
import { View } from 'react-native';
import GenresPicekr from "./GenresPicker";

const Filter = ({whatFilter}
) => {
    return (
        <View>
            <GenresPicekr whatFilter={whatFilter}/>
        </View>
    );
};

export default Filter;