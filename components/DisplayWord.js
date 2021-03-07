import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
export default function DisplayWord({ navigation }) {

  const [anscheck, setAnscheck] = useState("incorrect");
  const [meaning, setMeaning] = useState("");
  const [current, setCurrent] = useState(1000);
  const [show, setShow] = useState(true)
  const [list, setList] = useState([])


  const param = navigation.getParam('levelProp') * 1000;

  useEffect(() => {
    setCurrent(param);
    axios.get('https://vocabapp-backend.herokuapp.com/wordsCount/' + param).then(function (resp) {
      setList(resp.data);
    }).catch((e) => { console.log(e) })

  }, [])


  const goNext = () => {

    if (current === (list.length + param - 1)) {
      navigation.navigate("Levels")
    }
    setAnscheck("incorrect")
    setCurrent(current + 1)
    setShow(true)
  }

  const touch = (ans) => {
    console.log(ans)
    if (ans == meaning) {
      setAnscheck("Correct")
    }
    setShow(false)
  }

  const Shuffle = (obj) => {

    let arr = []
    setMeaning(obj.obj.mean)
    arr.push(obj.obj.option1, obj.obj.mean, obj.obj.option2, obj.obj.option3);
    var i,
      j,
      temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return (arr.map((m) => {
      return (

        <TouchableOpacity style={styles.options} onPress={() => { touch(m) }} >
          <Text style={styles.option}>{m}</Text>
        </TouchableOpacity>)
    }))

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

            <View style={styles.hideOptions}>
              {a.key === current ?
                <View style={styles.display}>
                  <Text style={styles.optionWord}> {a.word}</Text>
                  {show ?
                    <Shuffle obj={a} />
                    :
                    <View>
                      <Text style={styles.options}>{anscheck}</Text>
                      <Text style={styles.options}> Meaning {a.mean}</Text>
                      <Text style={styles.options}>Explanation {a.exp}</Text>
                      <Button title="Next" onPress={goNext}></Button>
                    </View>
                  }
                </View>
                : <Text></Text>
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
  },
  hideOptions: {
    width: win.width,
    position: 'absolute',
    top: 100,
    zIndex: 100



  }

});
