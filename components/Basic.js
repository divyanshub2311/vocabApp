import React from "react"
import {Text,View , StyleSheet , Button} from 'react-native'

export default function Basic({history})
{
    return(
<View>

 <Button title = "Level1" onPress = {()=>{history.push("/Levels")}}>Basic</Button>
 <Button title = "Level2">Medium</Button>
 <Button title = "Level3">Advanced</Button>
</View>
    )
}