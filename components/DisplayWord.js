import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default function DisplayWord({ navigation }) {


  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(true)
  const [list, setList] = useState([
    { key: 1, word: 'peevish', mean: 'cranky', option1: 'a', option2: 'b', option3: 'c', exp: 'e' },
    { key: 2, word: 'pellucid', mean: 'clear', option1: 'a', option2: 'b', option3: 'c', exp: 'e' }
  ])

  useEffect(() => {
    axios.get('http://10.0.2.2:5000/words').then(function (resp) { console.log(resp.data) }).catch((e) => { console.log(e) })
  })
  const goNext = () => {
    console.log("goNext called")

    setCurrent(current + 1)
    setShow(true)
  }

  const touch = () => {
    setShow(false)
  }
  return (
    <View style={globalStyles.container}>


      <View style={globalStyles.head}>
        <Icon.Button
          name="menu-sharp"
          backgroundColor="white"
          color="#000"
          onPress={() => { navigation.navigate('AllLevels') }}>
        </Icon.Button>

        <Text style={globalStyles.headerText}> Level {navigation.getParam('levelProp')}</Text>



      </View>
      {
        list.map((a) => {
          return (
            <View >
              {a.key === current ?

                <View style={styles.display}>
                  <Text style={styles.optionWord}> {a.word}</Text>
                  {show ?
                    <View >
                      <TouchableOpacity style={styles.options} onPress={touch}>
                        <Text style={styles.option}>{a.mean}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.options}>
                        <Text style={styles.option}>{a.option1}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.options}>
                        <Text style={styles.option}>{a.option2}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.options} >
                        <Text style={styles.option}>{a.option3}</Text>
                      </TouchableOpacity>

                    </View> :
                    <View>
                      <Text style={styles.options}> Meaning {a.mean}</Text>
                      <Text style={styles.options}>Explanation {a.exp}</Text>
                      <Button title="Next" onPress={goNext}></Button>
                    </View>}</View> : <Text></Text>

              }
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    margin: 10,
    backgroundColor: "white",

  },
  options: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    padding: 25,
    fontSize: 20
  },
  option: {
    fontSize: 20
  },
  optionWord: {
    alignSelf: 'center',
    padding: 25,
    fontWeight: 'bold',
    fontSize: 30
  }

});
