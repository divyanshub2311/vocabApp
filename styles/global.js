import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';


const win = Dimensions.get('window');
export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        top: 15,
        backgroundColor: "#fff",


    },
    head: {
        height: 70,

        width: win.width,
        alignItems: 'center',

        backgroundColor: 'black',
        // backgroundColor: "#5f9ea0",
        flexDirection: 'row',




    }
})