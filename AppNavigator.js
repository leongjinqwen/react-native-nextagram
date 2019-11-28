import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import AuthLoadingScreen from './Auth';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AppStack = createStackNavigator(
  {
      Home:  HomePage,
      Profile: ProfilePage,
  },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: 'rgb(63, 68, 68)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
    }
);
const AuthStack = createBottomTabNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        tabBarLabel: "Login",
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: "Sign Up",
      },
    },
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  }
)
export default SwitchNav = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
