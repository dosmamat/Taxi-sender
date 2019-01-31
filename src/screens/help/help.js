import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Input } from 'react-native-elements'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    padding: 25,
  },
  p: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 16,
  },
  button2: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(255, 230, 0)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    width: 230,

  },
  submitText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
  textArea: {
    height: 120,
    borderColor: 'rgb(188, 197, 204)',
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    marginBottom: 20,
    marginTop:10,
  },
  inputNew:{
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  }
});
export default class Help extends React.Component {
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

  myMask = (phone) => {
    if(this.state.phone.length.toString()>=2)
      this.setState({ phone });
    else{
      this.setState({phone:'+7'})
    }
  }
  // доделать
  sendMessage(city,surname,phone="00",name="none"){
    fetch(`https://www.saat24.ru/php/send2.php?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&question=${encodeURIComponent(question)}`, {
      method: "GET"
    })
  }

  myAlert() {
    this.setState({errorQuestion:'',errorName:'',errorPhone:''});
    const {question, name, phone}=this.state;
    if(question==='')
      this.setState({errorQuestion:'Введите вопрос'}); 
    if(name===''){
      this.setState({errorName:'Введите имя'});
    }  
    if(this.state.phone.length.toString()<12){
      this.setState({errorPhone:'Введите правильный номер'});
    }  
    phone.toString();
    let phone2 = phone.substr(0, 1) + '8' + phone.substr(1 + 1);
    this.sendMessage(question,name,phone2);
    Alert.alert("Заявка отправлена","В ближайшее времся с Вами свяжется менджер.")
   
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
      <View style={styles.container}>
        <Text style={styles.p}>Задать вопрос</Text>
        <Input
          label='Вопрос'
          placeholder='Ваш вопрос'
          multiline={true}
          inputContainerStyle={styles.textArea}
          errorMessage={errorQuestion}
          onChangeText={text => this.setState({ question: text })}
          value={question}
        />
        <Input
          label='Имя'
          placeholder='Введите имя'
          errorMessage={errorName}
          onChangeText={text => this.setState({ name: text })}
          value={name}
        />
        <Input
          label='Телефон'
          placeholder='Введите телефон'
          errorMessage={errorPhone}
          maxLength={12}
          keyboardType="numeric"
          onChangeText={text => this.setState({ phone: text })}
          value={phone}
        />
      
        <TouchableOpacity
          onPress={() => this.myAlert()}
          style={styles.button2}
        >
          <Text style={styles.submitText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
