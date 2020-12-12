import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,KeyboardAvoidingView,Alert } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'; 
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
    constructor(){
        super();

        this.state = {  
        email : '',
        password : ''
    }
}

userLogin = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        this.props.navigation.navigate('DonateBooks')
        
    })
    .catch((error)=> {
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
    }

    render(){
        return(
            <View>
                <KeyboardAvoidingView>
                <TextInput
                style = {styles.inputBox}
                placeholder = "Email"
                keyboardType = 'email-address'
                onChangeText = {(text)=> {
                    this.setState({
                        email : text
                    })
                }}
                />

                <TextInput
                style = {styles.inputBox} 
                secureTextEntry = {true}
                placeholder = "Password"
                onChangeText = {(text)=> {
                    this.setState({
                        password : text
                    })
                }}
                />

                <TouchableOpacity style = {styles.button} 
                onPress = {()=> {
                    this.userLogin(this.state.email,this.state.password)
                }}
                >
                    <Text style = {styles.buttonText}> Login </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    buttonText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 20
    },
    button : {
          backgroundColor : 'black',
          width : 100,
          height : 50,
          borderWidth : 2,
          borderRadius : 11,
          alignSelf : 'center',
          borderColor : 'blue',
    }
})