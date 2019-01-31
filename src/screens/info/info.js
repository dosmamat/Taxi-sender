import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  Linking,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  h2: {
    fontSize:23,
    fontWeight:'bold',
  },
  p:{
    fontSize:18
  },
  paddignTop: {
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
  },
  margin: {
    marginTop:20,
    marginBottom:20,
  },
  call: {
    fontSize: 20,
    color: '#f48024',
    alignSelf:'center',
  }
});

export default class Info extends React.Component {
  callPhone(){
    Linking.openURL(`tel:+7-915-015-69-82`);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView  style={styles.paddignTop}>
          <Text style={styles.h2}> Официальное подключение водителей к Яндекс.такси </Text>
          <Text style={styles.margin}> У нас работает более 16000 водителей, присоединяйтесь и вы! </Text>
          <Text>Основные требования для подключения:</Text>
          <Text>- наличие подходящего автомобиля (мы не предоставляем автомобили в аренду);</Text>
          <Text>- водительское удостоверение со стажем от 3 лет</Text>
          <Text style={[styles.h2, styles.margin]}>Почему работать с нами выгодно? </Text>
          <Text>- моментальные выплаты по безналичным заказам сразу после поездки на банковую карту; </Text>
          <Text>- комиссия с заказа всего 3%;</Text>
          <Text>- отсутсвие скрытых комиссий и платежей (мы не берём каких-либо дополнительных комиссий за вывод средств или абонентскую плату за пользование приложением;</Text>
          <Text>- круглосуточная диспетчерская служба;</Text>
          <Text>- удаленное подключение без посещения офиса и экзаменов!</Text>
          <Text style={styles.margin}>Более подробную информацию вы можете узнать, оставив заявку, либо связавшись с нами по телефону:  </Text>
          <Text onPress={this.callPhone} style={styles.call}>+7-915-015-69-82</Text>
          
        </ScrollView>
      </View>
    );
  }
}