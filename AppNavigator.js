import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import MyProfilePage from './MyProfilePage';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import AuthLoadingScreen from './Auth';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from "react-native-vector-icons";



const AppScreen = createBottomTabNavigator(
  {
      Home: {
        screen: HomePage,
        navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon : ({ tintColor }) => (
            <FontAwesome name="home" size={30} color={tintColor} />
          )
        },
      },
      Account: {
        screen: MyProfilePage,
        navigationOptions: {
          tabBarLabel: "Account",
          tabBarIcon : ({ tintColor }) => (
            <FontAwesome name="user" size={30} color={tintColor} />
          )
        },
      },
  },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
          tabBarOptions: {
            activeTintColor: 'orangered',
            inactiveTintColor: 'grey',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'none',
            },
          }
        },
    }
);
const AuthScreen = createBottomTabNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon : ({ tintColor }) => (
          <FontAwesome name="sign-in" size={30} color={tintColor} />
        )
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: "Sign Up",
        tabBarIcon : ({ tintColor }) => (
          <FontAwesome name="sign-out" size={30} color={tintColor} />
        )
      },
    },
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: 'orangered',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'none',
        },
      }
    },
  }
)
export default SwitchNav = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppScreen,
    Auth: AuthScreen,
    Profile: ProfilePage,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
