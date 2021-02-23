import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default function Levels({ history }) {


  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(true)
  const [list, setList] = useState([
    { key: 1, word: 'peevish', mean: 'cranky', option1: 'a', option2: 'b', option3: 'c' , exp:'e' },
    { key: 2, word: 'pellucid', mean: 'clear', option1: 'a', option2: 'b', option3: 'c' , exp:'e' }
  ])

  const goNext = () => {
    console.log("goNext called")

    setCurrent(current + 1)
    setShow(true)
  }

  const touch = () => {
    setShow(false)
  }
  return (
    <View style={styles.container}>
      <Button title="back" onPress={() => { history.push("/") }}></Button>
      {
        list.map((a) => {
          return (
            <View>
              {a.key === current ?

                <View>
                  <Text> Word {a.word}</Text>
                  {show ?
                    <View>
                      <Button onPress={touch} title = {a.mean}></Button>
                      <Button onPress={touch} title = {a.option1}></Button>
                      <Button onPress={touch} title = {a.option2}></Button>
                      <Button onPress={touch} title ={a.option3}></Button>
                    </View> :
                    <View>
                      <Text> Meaning {a.mean}</Text>
                      <Text>Explanation {a.exp}</Text>
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
