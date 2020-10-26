import React from 'react';
import { StyleSheet, Text, View,ScrollView,StatusBar } from 'react-native';
import configureStore from "./app/store/store";
import { Provider } from 'react-redux';
import TabViewExample from "./app/components/TabViewExample";
import { SafeAreaView } from 'react-navigation';
export default function App() {
  return (
    <Provider store = { configureStore }>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
          <StatusBar hidden />
            <TabViewExample/>
           </ScrollView>
         </SafeAreaView>
    </Provider>
  );
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#c5e3f6',
      alignItems: 'center',
      justifyContent: 'center',
    },
       scrollView: {
      width:"100%",
      },
    scene: {
      flex: 1,
    },
  })