import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import configureStore from "./app/store/store";
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store = { configureStore }>
    <SafeAreaView style={styles.container}>
      <WelcomeScreen/>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#03c2fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
