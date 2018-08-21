import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, Button, Text} from 'react-native';

//import {Button,Text,Icon} from 'native-base'

export default class Login extends Component {
 
  render() {
    return (
      
        <View style={styles.container}>
           <TextInput 
            style={styles.Inputstyle}
            placeholder= "Username"
            />
           <TextInput 
            style={styles.Inputstyle} 
            placeholder= "Password"
            />  
         <Button
            style={styles.Inputstyle}
            title="LOGIN" 
            onPress={()=>this.props.navigaton.navigate(this)}/>
      </View>
    );
  }
}


var styles=StyleSheet.create({
  container:{
    backgroundColor: '#D9C2C2',
    flex:1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  Inputstyle:{
    backgroundColor: '#F9B250',
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: 15
  },
})
