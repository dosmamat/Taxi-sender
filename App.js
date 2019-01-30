import React from 'react';
import { StyleSheet, Text, View, Image,Button, Alert, TouchableHighlight } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2
import Header from "./componets/header.js"

export default class App extends React.Component {
  clikBt(){
    Alert.alert("click");
  }
  render() {
    return (
     
     
      <View style={styles.container}>
        <View style={styles.header}>
         </View>
        <View style={styles.centerContent}>
          
           <Image source={require('./assets/img/car-logo.png') } style={{width: 250, height: 130}} />
           <Text style={styles.text}>Центр регистрации и обучения водителей</Text>
           {/* <Button 
              
               onPress={this.clikBt}
              title="Регистрация"
              buttonStyle={styles.button2}
            /> */}
            <TouchableHighlight
              onPress={this.clikBt}
              style={styles.button2}>
             <Text style={styles.submitText}>Зарегистрироваться</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.clikBt}
              style={styles.button3}>
             <Text style={styles.submitText}>Информация</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent} >
            <TouchableHighlight onPress={this.clikBt}>
               <Image source={require('./assets/img/handset.png') } style={{width: 30, height: 30}} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this.clikBt}>
               <Image source={require('./assets/img/q.png') } style={{width: 30, height: 30}} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this.clikBt}>
               <Image source={require('./assets/img/share.png') } style={{width: 30, height: 30}} />
            </TouchableHighlight>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  centerContent:{
    flex:20,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    paddingTop: 10,
    backgroundColor:'rgb(105, 105, 105);'
   },
   footer:{
    flex:5,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
    footerContent:{
      marginLeft:20,
      marginRight:20,
      flexDirection: 'row',
      justifyContent:"space-around",
      alignSelf: 'stretch',
    },
  text:{
    fontSize:16
  },
  button2:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'rgb(255, 230, 0)',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff',
    width:230

  },
  button3:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'rgb(255, 230, 0)',
    width:230
  },
  submitText:{
    color:'#000',
    textAlign:'center',
    fontSize:16,
}
 
});
