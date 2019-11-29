import React from 'react';
import { StyleSheet, ScrollView,Image, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'react-native-axios'

// only one export default in one js file
export default class HomePage extends React.Component {
  state = {
    users:[],
    isLoading:true
  }
  componentDidMount(){
    axios({
      method: 'get',
      url: 'https://insta.nextacademy.com/api/v1/users',
    })
    .then(response=> {
      this.setState({
        users: response.data,
        isLoading:false
      })
    })
    .catch(error=> {
      console.log(error);
    });
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
                  backscreen: 'Home',
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
    paddingTop:20,
  },
  text: {
    fontSize:20,
    color: "black",
    textAlign:'center'
  },
});
