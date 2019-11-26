import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const AppNavigator = createStackNavigator({
        Home: {
          screen: HomePage,
          navigationOptions: {
            title: "Home Page"
          }
        },
        Profile: {
          screen: ProfilePage,
          navigationOptions: {
            title: "Profile Page"
          }
        },
        Login: {
          screen: LoginPage,
          navigationOptions: {
            title: "Sign In"
          }
        },
        SignUp: {
          screen: SignUp,
          navigationOptions: {
            title: "Sign Up"
          }
        },
    },
    {
        initialRouteName: 'Login',
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

export default AppNavigator;