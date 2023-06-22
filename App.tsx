import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </NativeBaseProvider>

  )
}

export default App;


const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "red"
  }
})