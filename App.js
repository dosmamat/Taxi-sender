import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import Main from './src/screens/main/main.js';
import Info from './src/screens/info/info.js';
import Registry from './src/screens/registry/registry.js';
import Help from './src/screens/help/help.js';
// #fff100 -желтый цвет везде
// npm i react-native-elements
export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex:1 }}>
        <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>
        {/* <Help/> */}
        <Registry/>
      </View>
    );
  }
}