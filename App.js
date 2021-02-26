import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { globalStyles } from "./styles/global"
import Navigator from './routes/homeStack'
import { Route, Switch, NativeRouter } from 'react-router-native'


export default function App() {


  return (
    <View style={globalStyles.container}>

      <Navigator />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
