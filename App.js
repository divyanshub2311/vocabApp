import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landingpage from './components/landingpage';
import Levels from "./components/levels"
import {Route , Switch , NativeRouter} from 'react-router-native'
export default function App() {


  return (
    <View style={styles.container}>
      <NativeRouter>
        <Switch>
          <Route exact path = "/" component = {Landingpage}/>
          <Route exact path = "/Levels" component = {Levels}/>
        </Switch>
      </NativeRouter>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
