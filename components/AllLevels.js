import React from "react"
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/global'

export default function AllLevels({ history }) {

    return (

        <View style={globalStyles.container} >

            <View style={globalStyles.head}>
                <Icon.Button
                    name="menu-sharp"
                    backgroundColor="black"
                    color="#fff"
                    onPress={() => { history.push("/") }}>
                </Icon.Button>


                <Text style={styles.headText} >Vocab Mad Easy</Text>


            </View>

            <View style={styles.allLevel}>
                <TouchableOpacity style={styles.column} onPress={() => { history.push("/Basic") }}>
                    <Text style={styles.textC}>Basic</Text>
                    <Text style={styles.textN}>Nail this section</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.column} onPress={() => { history.push("/") }}>
                    <Text style={styles.textC}>Medium</Text>
                    <Text style={styles.textN}>Nail this section</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.column} onPress={() => { history.push("/") }}>
                    <Text style={styles.textC}>Advanced</Text>
                    <Text style={styles.textN}>Nail this section</Text>
                </TouchableOpacity>
            </View>

        </View >

    )
}


const styles = StyleSheet.create({
    headText: {
        color: "#fff"
    },
    allLevel: {
        flex: 1,
        backgroundColor: '#5f9ea0',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        padding: 10
    },
    column: {
        height: 200,
        backgroundColor: '#fff',
        // backgroundColor: "#d4af37",
        borderRadius: 30,
        marginBottom: 20,
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'




    },
    textC: {
        // alignSelf: 'center',
        fontSize: 30,
        borderBottomWidth: 1
    },

    textN: {
        fontSize: 20,


    }

});