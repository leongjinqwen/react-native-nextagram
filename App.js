import React from 'react';
import SwitchNav from './AppNavigator';
import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(SwitchNav);

export default class App extends React.Component {

  render (){
   
    return(
      <>
        <AppContainer />
      </>
    )
  }
}


