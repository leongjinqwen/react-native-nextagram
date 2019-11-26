import React from 'react';
import { StyleSheet,TextInput,View,Text,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginPage extends React.Component {
    static navigationOptions = {
      title: 'Sign In',
    };
    state = {
        username:'',
        password:''
    }

    handleSubmit=()=> {
        fetch('https://insta.nextacademy.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:this.state.username,
                password:this.state.password,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('response object:',responseJson)

        })
        .catch((error) => {
            console.log('error:',error);
        });
    }
    render(){
        return(
            <View containerStyle={styles.card}>
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
                    <TouchableHighlight style={styles.touchableLogin} onPress={this.handleSubmit}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchableSignUp} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.button}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
            </View>
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
    touchableLogin:{
        backgroundColor:'orange',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        padding:20,
    },
    touchableSignUp:{
        backgroundColor:'red',
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
