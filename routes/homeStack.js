import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Landingpage from '../components/landingpage'

import DisplayWord from "../components/DisplayWord"
import AllLevels from "../components/Menu"
import Levels from "../components/Levels"



const screens = {
    Landingpage: {
        screen: Landingpage,
        navigationOptions: {
            header: null,
        }
    },
    AllLevels: {
        screen: AllLevels,
        navigationOptions: {
            title: 'Vocab Mad Easy',
        }
    },
    Levels: {
        screen: Levels,
        navigationOptions: {
            title: 'Levels',
        }
    },
    DisplayWord: {
        screen: DisplayWord,

        navigationOptions: {
            header: null,
            title: 'Vocab Mad Easy',
        }
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)