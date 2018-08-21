import React, { Component } from 'react';
import Login from './src/Login';
import FlatlistText from './src/FlatlistText';
import DialogTest from './src/DialogTest'

import { createStackNavigator} from 'react-navigation';
import MainScreen from './src/MainScreen';

export default class App extends Component {
  render() {
    return(
      <FlatlistText/>
    );
  }
}

const navigation =createStackNavigator({
    Home:{
      screen: FlatlistText
    },
    CheckOut:{
      screen: Login
    }

})
  


