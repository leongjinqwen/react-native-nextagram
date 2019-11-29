import React from 'react';
import { StyleSheet,TextInput,View,Text,TouchableHighlight,KeyboardAvoidingView,ScrollView,AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'react-navigation-stack'

export default class SignUp extends React.Component {
    state = {
        username:'',
        email:'',
        password:''
    }
    _signInAsync = async (token) => {
        await AsyncStorage.setItem('userToken', token );
    };

    handleSubmit=()=> {
        fetch('https://insta.nextacademy.com/api/v1/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:this.state.username,
                email:this.state.email,
                password:this.state.password,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // sign in user after sign up
            let token = {
                user:responseJson.user,
                auth_token:responseJson.auth_token,
            }
            this._signInAsync(token)
            this.props.navigation.navigate('Account');
        })
        .catch((error) => {
            console.log('error:',error);
        });
    }
    render(){
        return(
            <ScrollView style={{paddingTop:150,paddingHorizontal:20}}>
                <KeyboardAvoidingView containerStyle={styles.card} keyboardVerticalOffset = {Header.HEIGHT +60} behavior="padding">
                    <View style={styles.inputSection}>
                        <TextInput
                            ref="username"
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={username => this.setState({username})}
                            value={this.state.username}
                        />
                        <Icon style={{marginHorizontal:10,marginBottom:0}} name="user" size={20} color="black"/>
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            ref="email"
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}
                        />
                        <Icon style={{marginHorizontal:10,marginBottom:0}} name="envelope" size={20} color="black"/>
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            ref="password"
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                        />
                        <Icon style={{marginHorizontal:10,marginBottom:0}} name="lock" size={20} color="black"/>
                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent:'center',padding:10}}>
                        <TouchableHighlight style={styles.touchableSignUp} onPress={this.handleSubmit}>
                            <Text style={styles.button}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    inputSection: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        margin:20,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
        fontSize:16,
    },
    card: {
        flex : 1,
        alignItems:'center',
    },
    touchableSignUp:{
        backgroundColor:'orange',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        padding:20,
    },
    button: {
        color:'white',
        fontSize:20,
    }
});
