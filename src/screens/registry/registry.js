import React from 'react';
import MyInput from '../../componets/common/input';
import MyButton from '../../componets/common/button';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Header,
} from "react-navigation";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 25,
  },
  p: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
  MyInput: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    width: 200,
  },

});
export default class Registry extends React.Component {
  static navigationOptions = {
    title: 'Регистрация',
  };

  static sendMessage(city, surname, phone, name) {
    fetch(`https://bot.dosj.ru/taxi-sender.php?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&surname=${encodeURIComponent(surname)}&city=${encodeURIComponent(city)}`, {
      method: 'GET',
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      surname: '',
      name: '',
      phone: '+7',
      errorCity: '',
      errorName: '',
      errorPhone: '',
    };
  }

  myMask(text) {
    const { phone } = this.state;
    if (phone.length.toString() >= 2) {
      this.setState({ phone: text });
    } else {
      this.setState({ phone: '+7' });
    }
  }

  myAlert() {
    this.setState({
      errorCity: '',
      errorName: '',
      errorPhone: '',
    });
    const {
      city,
      surname,
      name,
      phone,
    } = this.state;
    if (city === '') {
      this.setState({ errorCity: 'Введите город' });
    }
    if (name === '') {
      this.setState({ errorName: 'Введите имя' });
    }
    if (phone.length.toString() < 12) {
      this.setState({ errorPhone: 'Введите правильный номер' });
    }
    let phone2 = phone.substr(0, 1);
    phone2 += '8';
    phone2 += phone.substr(1 + 1);
    if (city !== '' && name !== '' && phone.length.toString() == 12) {
      Registry.sendMessage(city, surname, phone2, name);
      Alert.alert('Заявка отправлена', 'В ближайшее времся с Вами свяжется менджер.');
    }
  }

  render() {
    const {
      city,
      surname,
      name,
      phone,
      errorCity,
      errorName,
      errorPhone,
    } = this.state;
    return (
      <KeyboardAvoidingView  behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 20} style={{flex:1}}>
        <ScrollView >
          <View style={styles.container}>
            <Text style={styles.p}>Введите информацию о себе</Text>
            <MyInput
              containerStyle={{ marginBottom: 20 }}
              label="Город"
              placeholder="Введите город"
              errorMessage={errorCity}
              onChangeText={text => this.setState({ city: text })}
              value={city}
            />
            <MyInput
              containerStyle={{ marginBottom: 20 }}
              label="Фамилия"
              placeholder="Введите фамилию"
              onChangeText={text => this.setState({ surname: text })}
              value={surname}
            />
            <MyInput
              containerStyle={{ marginBottom: 20 }}
              label="Имя"
              placeholder="Введите имя"
              errorMessage={errorName}
              onChangeText={text => this.setState({ name: text })}
              value={name}
            />
            <MyInput
              containerStyle={{ marginBottom: 20 }}
              label="Телефон"
              placeholder="Введите телефон"
              errorMessage={errorPhone}
              value={phone}
              maxLength={12}
              keyboardType="numeric"
              onChangeText={text => this.myMask(text)}
            />
            <MyButton  onPress={() => this.myAlert()}>
              Зарегистрироваться
            </MyButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
