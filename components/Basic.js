import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/ionicons';

export default function Basic({ history }) {
    return (
        <View>
            <Icon.Button
                name="menu-sharp"
                backgroundColor="#3b5998"
                onPress={() => { history.push("/") }}>
            </Icon.Button>
            <Button title="Level1" onPress={() => { history.push("/DisplayWord") }}>Basic</Button>
            <Button title="Level2">Medium</Button>
            <Button title="Level3">Advanced</Button>
        </View>
    )
}