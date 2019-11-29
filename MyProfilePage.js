import React from 'react';
import { StyleSheet, ScrollView, Text,Image,View,Button,AsyncStorage } from 'react-native';
import { Avatar } from 'react-native-elements'
import axios from "react-native-axios"

export default class ProfilePage extends React.Component {
    state = {
        user:'',
        images:[],
        isLoading:true
    }
    
    componentDidMount= async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        const user = JSON.parse(userToken)
        console.log(user.user)
        axios({
          method: 'get',
          url: `https://insta.nextacademy.com/api/v1/images?userId=${user.user.id}`,
        })
        .then(response=> {
          this.setState({
            user:user.user,
            images: response.data,
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
                <View containerStyle={styles.card}>
                  <View style={styles.images}>
                    <Avatar size="xlarge" rounded source={{uri:this.state.user.profile_picture}}/>
                  </View>
                  <Text style={styles.title}>{this.state.user.username}</Text>
                  <View style={styles.images}>
                      {this.state.images.map((image,index)=>(
                        <Image key={index} source={{uri:image}} style={{marginTop:5,width: 200,height: 150}}/>
                      ))}
                  </View>
                  <View style={{marginBottom:20,paddingVertical:15,paddingHorizontal:40}}>
                    <Button
                      onPress={async () => {
                        await AsyncStorage.clear();
                        this.props.navigation.navigate('Login')
                      }}
                      title="Sign Out" color="red"
                      style={{marginBottom:20,borderRadius:20}}
                    />
                  </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    paddingVertical:20,
  },
  text: {
    fontSize:20,
    color: "black",
    textAlign:'center'
  },
  title: {
    fontSize:30,
    color: "black",
    textAlign:'center'
  },
  images:{
    marginLeft:'auto',
    marginRight:'auto',
  },
  card: {
    flex : 1,
    alignItems:'center',
  }
});
