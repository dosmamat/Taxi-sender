import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class Header extends React.Component {
   
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerMargin}>
           
        </View>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingBottom: 5,
    backgroundColor: 'rgb(239, 239, 239)'
  },

  headerMargin:{
   paddingTop: 30,
   backgroundColor:'rgb(105, 105, 105);'
  }
});