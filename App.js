import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Landingpage from './components/landingpage';
import DisplayWord from "./components/DisplayWord"
import AllLevels from "./components/AllLevels"
import Basic from "./components/Basic"
import { globalStyles } from "./styles/global"
import { Route, Switch, NativeRouter } from 'react-router-native'
export default function App() {


  return (
    <View style={globalStyles.container}>

      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/AllLevels" component={AllLevels} />
          <Route exact path="/DisplayWord" component={DisplayWord} />
          <Route exact path="/Basic" component={Basic} />
        </Switch>
      </NativeRouter>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
