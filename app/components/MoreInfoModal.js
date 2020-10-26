import React, {useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {selectGenres,fetchFilmsInfo,setFavoriteFilms,removeFavoriteFilms} from "../features/filmSlice/filmSlice";

const MoreInfoModal = ({ film,index,add }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const dispatch = useDispatch();
  return (
    <View style={styles.centeredView} key={index}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{textAlign:"center",marginBottom:10}}>{film.original_title}</Text>
           <Text style={{textAlign:"center"}}>{film.release_date}</Text>
           <View style={{flexDirection:"row"}}>{film.genres && Array.isArray(film.genres)?film.genres.map((filmInfo,index) => (<Text key={index} style={{textAlign:"center"}}>{filmInfo.name} </Text> )):null}</View>
           <Text style={{textAlign:"center",marginTop:10}}>{film.overview}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);

              }}
            >
              <Text style={styles.textStyle}>HIDE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show More Info</Text>
      </TouchableHighlight>
      {favoriteVisible&&add?<TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setFavoriteVisible(false);
          dispatch(setFavoriteFilms(film))
        }}
      >
        <Text style={styles.textStyle}>Add to favorite</Text>
      </TouchableHighlight>:null}
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fcefee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#fccde2",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom:15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default MoreInfoModal;
