import React from 'react';
import MyButton from '../../componets/common/button';
import MyInput from '../../componets/common/input';
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
  },
  textArea: {
    height: 120,
    borderColor: 'rgb(188, 197, 204)',
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    marginBottom: 20,
    marginTop: 10,
  },
  MyInputNew: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});
export default class Help extends React.Component {
  static navigationOptions = {
    title: 'Поддержка',
  };

  static sendMessage(question, phone, name) {
    fetch(`https://bot.dosj.ru/taxi-sender.php?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&question=${encodeURIComponent(question)}`, {
      method: 'GET',
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      name: '',
      phone: '+7',
      errorName: '',
      errorPhone: '',
      errorQuestion: '',
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
      errorQuestion: '',
      errorName: '',
      errorPhone: '',
    });
    const {
      question,
      name,
      phone,
    } = this.state;
    if (question === '') {
      this.setState({ errorQuestion: 'Введите вопрос' });
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
    if (question !== '' && name !== '' && phone.length.toString() == 12) {
      Help.sendMessage(question, phone2, name);
      Alert.alert('Заявка отправлена', 'В ближайшее времся с Вами свяжется менджер.');
    }
  }

  render() {
    const {
      question,
      name,
      phone,
      errorName,
      errorPhone,
      errorQuestion,
    } = this.state;
    return (
      <KeyboardAvoidingView  behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 20} style={{flex:1}}>
        <ScrollView >
          <View style={styles.container}>
            <Text style={styles.p}>Задать вопрос</Text>
            <MyInput
              label="Вопрос"
              placeholder="Ваш вопрос"
              multiline={true}
              MyInputContainerStyle={styles.textArea}
              errorMessage={errorQuestion}
              onChangeText={text => this.setState({ question: text })}
              value={question}
              maxLength={300}
              multiline={true}
            />
            <MyInput
              label="Имя"
              placeholder="Введите имя"
              errorMessage={errorName}
              onChangeText={text => this.setState({ name: text })}
              value={name}
            />
            <MyInput
              label="Телефон"
              placeholder="Введите телефон"
              errorMessage={errorPhone}
              maxLength={12}
              keyboardType="numeric"
              onChangeText={text => this.myMask(text)}
              value={phone}
            />
            <MyButton onPress={() => this.myAlert()}>
              Отправить
            </MyButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
