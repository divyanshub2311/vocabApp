import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Landingpage({ history }) {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vocab Mad Easy</Text>
            <Text style={styles.text1}>Vocabulary Builder</Text>
            <View style={styles.getstarted}>
                <View>
                    <Button title="Get Started" onPress={() => { history.push("/AllLevels") }} />
                    {console.log("Get Started")}
                </View>
                <View style={styles.signin}>
                    <Button title="Sign In" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10
    },
    text1: {
        fontSize: 25,
        color: "grey"

    },
    getstarted: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 30
    },
    signin: {
        marginTop: 200,
    }
});
