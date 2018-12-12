import {React} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './scenes/Home';
import Detail from './scenes/Detail';
import Cart from './scenes/Cart';
import Login from './scenes/Login';
import Finish from './scenes/Finish';
import AuthLoading from './scenes/Login/authLoading.js';
import Profile from './scenes/Profile';

export const AppStack = createStackNavigator(
    {  
        Auth:{
            screen: AuthLoading,
            navigationOptions:{
                header: null
            }
        },
        Signin:{
            screen:Login,             
            navigationOptions: {
                header: null
            }
        },
        ProfileScreen:{
            screen: Profile,
            navigationOptions:{
                header: null
            }
        },
        HomeScreen:{
            screen: Home,
            navigationOptions: {
                header: null
            }
        },

        DetailScreen:{
            screen: Detail,
            navigationOptions: {
                header: null
            }
        },

        CartScreen:{
            screen: Cart,
            navigationOptions: {
                header: null
            }
        },
        FinishScreen:{
            screen: Finish,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: "Auth"
    }
);
export const AppContainter = createAppContainer(AppStack);

/*export const AuthStack = createStackNavigator(
    {
        Signin:{
            screen:Login, 
            navigationOptions: {
              header: null
            }
        },
    }
);

export const SwitchNavigator = createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
},{
    initialRouteName: 'Auth',
});*/

