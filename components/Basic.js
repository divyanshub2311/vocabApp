import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/global'
//  import Icon from 'react-native-vector-icons/ionicons';

export default function Basic({ history }) {
    return (
        <View style={globalStyles.container}>
            {/* <Icon.Button
                name="menu-sharp"
                backgroundColor="#3b5998"
                onPress={() => { history.push("/") }}>
            </Icon.Button> */}
            <Button title="Return to Home Page" onPress={() => { history.push("/") }}></Button>
            <Button title="Level1" onPress={() => { history.push("/DisplayWord") }}>Basic</Button>
            <Button title="Level2">Medium</Button>
            <Button title="Level3">Advanced</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue"
    }
});