import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack.navigation'
import AppStack from './AppStack.navigation'
import SplashScreen from '../screens/SplashScreen'

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: SplashScreen,
        App: AppStack,
        Auth: AuthStack,
    },
));
