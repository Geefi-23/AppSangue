/**
 * @author Milton R. 
 * @author Yan Lucas
 * 
 * Copyright
 */

import react, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, PermissionsAndroid } from 'react-native';

import Header from './components/Header';
import Navbar from './Navbar';
import Home from './screens/Home';

const App = () => {

  return (
    <>
      <StatusBar hidden={false} backgroundColor="#fff" barStyle='dark-content' />
      <View 
        style={{
          flex: 1,
          backgroundColor: '#fff'
        }}
      >
        <Header />
        <Navbar />
      </View>
    </>
  );
}

const mainStyles = StyleSheet.create({
  navbar: {
    backgroundColor: '#eee',
    height: 70,
  },
  button: {
    color: '#000, #000'
  }
});

export default App;