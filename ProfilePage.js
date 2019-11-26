import React from 'react';
import { StyleSheet, ScrollView, Text,Image,View } from 'react-native';
import { Avatar } from 'react-native-elements'

export default class ProfilePage extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    state = {
        user:'',
        images:[],
        isLoading:true
    }
    componentDidMount(){
        const user = this.props.navigation.getParam('user', 'NO-user')
        fetch(`https://insta.nextacademy.com/api/v1/images?userId=${user.id}`)
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
                user:user,
                images: responseJson,
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
                <View containerStyle={styles.card}>
                  <View style={styles.images}>
                    <Avatar size="xlarge" rounded source={{uri:this.state.user.profileImage}}/>
                  </View>
                  <Text style={styles.title}>{this.state.user.username}</Text>
                  <View style={styles.images}>
                      {this.state.images.map((image,index)=>(
                        <Image key={index} source={{uri:image}} style={{marginTop:5,width: 200,height: 150}}/>
                      ))}
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
