import React from "react"
import {Text,View , StyleSheet , Button} from 'react-native'

export default function AllLevels({history})
{
    return(
<View>

 <Button title = "Basic" onPress = {()=>{history.push("/Basic")}}>Basic</Button>
 <Button title = "Medium">Medium</Button>
 <Button title = "Advanced">Advanced</Button>
</View>
    )
}