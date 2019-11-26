import React from 'react';
import { Text, Image } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <>
        <Image
          source={require("./assets/nextagramlogo.png")}
          style={{marginLeft:10 , width: 30, height: 30 }}
        />
        <Text style={{color:'white',fontWeight:500}}>NEXTAGRAM</Text>
      </>
    );
  }
}