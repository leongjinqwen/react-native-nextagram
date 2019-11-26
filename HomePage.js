import React from 'react';
import { StyleSheet, ScrollView, Text,Image, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

// only one export default in one js file
export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  state = {
    users:[],
    isLoading:true
  }
  componentDidMount(){
    fetch("https://insta.nextacademy.com/api/v1/users")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       users: responseJson,
       isLoading:false
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }
  render(){
    if (this.state.isLoading){
      return(
        <View style={{flex:1,justifyContent:'center'}}>
          <Image source={require("./assets/rabbit.gif")} style={{width: 75,height: 100,alignSelf:'center'}} />
        </View>
      ) 
    }
    return(
      <ScrollView style={styles.container}>
          {this.state.users.map((user,index)=>(
            <ListItem key={index} 
              leftAvatar={{ source: { uri:user.profileImage } }}
              title={user.username}
              titleStyle={{color:'rgb(80, 217, 235)'}}
              onPress={() => {
                this.props.navigation.navigate('Profile', {
                  user: user,
                });
              }} 
              bottomDivider
            />
          ))}
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
  },
  text: {
    fontSize:20,
    color: "black",
    textAlign:'center'
  },
});
