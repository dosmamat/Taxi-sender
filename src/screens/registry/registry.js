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
      borderBottomColor: '#fff100',
      errorCity:'',
    };
  }

  myMask=(phone)=> {
    if(this.state.phone.length.toString()>=2)
      this.setState({ phone });
    else{
      this.setState({phone:'+7'})
    }
  }

  onFocus() {
    this.setState({
      borderBottomColor: 'green',
    });
  }

  onBlur() {
    this.setState({
      borderBottomColor: 'red',
    });
  }

  myAlert() {
    this.setState({errorCity:''});
    const {errorCity,city, surname, name, phone}=this.state;
    if(city==='')
      this.setState({errorCity:'Введите город'});
    Alert.alert(city+ surname+ name+phone);
   
  }

  render() {
    const {
      city,
      surname,
      name,
      phone,
      borderBottomColor,
      errorCity,
    } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.p}>Введите информацию о себе</Text>
        <TextInput
          style={[styles.input, { borderBottomColor }]}
          placeholder="Город"
          onChangeText={text => this.setState({ city: text })}
          value={city}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
        />
        <TextInput
          style={[styles.input, { borderBottomColor }]}
          placeholder="Фамилия"
          onChangeText={text => this.setState({ surname: text })}
          value={surname}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
        />
        <TextInput
          style={[styles.input, { borderBottomColor }]}
          placeholder="Имя"
          onChangeText={text => this.setState({ name: text })}
          value={name}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
        />
        <TextInput
          style={[styles.input, { borderBottomColor }]}
          maxLength={12}
          placeholder="Телефон"
          keyboardType="numeric"
          onChangeText={this.myMask}
          value={phone}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
        />
        <Input
          label='hello'
          placeholder='INPUT WITH ICON'
          errorMessage={errorCity}
          onChangeText={text => this.setState({ name: text })}
          value={name}
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