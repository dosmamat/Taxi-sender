import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  StatusBar,
  Linking,
  TextInput,
} from 'react-native';
import { Input } from 'react-native-elements';
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
});
export default class Registry extends React.Component {
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

  myMask=(phone)=> {
    if(this.state.phone.length.toString()>=2)
      this.setState({ phone });
    else{
      this.setState({phone:'+7'})
    }
  }

  sendMessage(city,surname,phone="00",name="none"){
    fetch(`https://www.saat24.ru/php/send2.php?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&surname=${encodeURIComponent(surname)}&city=${encodeURIComponent(city)}`, {
      method: "GET"
    })
  }
  myAlert() {
    this.setState({errorCity:'',errorName:'',errorPhone:''});
    const {city, surname, name, phone}=this.state;
    if(city==='')
      this.setState({errorCity:'Введите город'}); 
    if(name===''){
      this.setState({errorName:'Введите имя'});
    }  
    if(this.state.phone.length.toString()<12){
      this.setState({errorPhone:'Введите правильный номер'});
    }  
    phone.toString();
    let phone2 = phone.substr(0, 1) + '8' + phone.substr(1 + 1);
    this.sendMessage(city,surname,phone2,name);
    Alert.alert("Заявка отправлена","В ближайшее времся с Вами свяжется менджер.")
    
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
      <View style={styles.container}>
        <Text style={styles.p}>Введите информацию о себе</Text>
        <Input
          containerStyle={{ marginBottom:20 }}
          label='Город'
          placeholder='Введите город'
          errorMessage={errorCity}
          onChangeText={text => this.setState({ city: text })}
          value={city}
        />
         <Input
          containerStyle={{ marginBottom:20 }}
          label='Фамилия'
          placeholder='Введите фамилию'
          onChangeText={text => this.setState({ surname: text })}
          value={surname}
        />
         <Input
          containerStyle={{ marginBottom:20 }}
          label='Имя'
          placeholder='Введите имя'
          errorMessage={errorName}
          onChangeText={text => this.setState({ name: text })}
          value={name}
        />
         <Input
          containerStyle={{ marginBottom:20 }}
          label='Телефон'
          placeholder='Введите телефон'
          errorMessage={errorPhone}
          value={phone}
          maxLength={12}
          keyboardType="numeric"
          onChangeText={this.myMask}
        />
        <TouchableOpacity
          onPress={() => this.myAlert()}
          style={styles.button2}
        >
          <Text style={styles.submitText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

class MyInput extends React.Component{
  state={borderBottomColor: '#fff100', phone:"+77"};
  onFocus() {
    this.setState({
      borderBottomColor: 'green',
    });
  }

  onBlur() {
    this.setState({
      borderBottomColor: 'black',
    });
  }
  myMask=(phone)=> {
    if(this.state.phone.length.toString()>=2)
      this.setState({ phone });
    else{
      this.setState({phone:'+7'})
    }
  }
  render(){
    const { borderBottomColor,phone}=this.state;
    return(
      <TextInput
          
          maxLength={12}
          placeholder="Телефон"
          keyboardType="numeric"
          onChangeText={this.myMask}
          value={phone}
          
        />
    )
  }
}