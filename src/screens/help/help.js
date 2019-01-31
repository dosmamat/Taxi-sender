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
    borderColor: 'green',
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
      borderBottomColor: '#fff100',
    };
  }

  myMask = (phone) => {
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
    const {question, name, phone}=this.state;
    Alert.alert(question+ name+phone);
   
  }

  render() {
    const {
      question,
      name,
      phone,
      borderBottomColor,
    } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.p}>Задать вопрос</Text>
        <TextInput
          multiline={true}
          style={styles.textArea}
          placeholder="Ваш вопрос"
          onChangeText={text => this.setState({ question: text })}
          value={question}
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
        />
        <TextInput
          style={[styles.input, { borderBottomColor }]}
          placeholder="Фамилия"
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
          // style={[styles.input, { borderBottomColor }]}
          // inputContainerStyle={styles.inputNew}
          errorMessage='lllo'
          onChangeText={text => this.setState({ name: text })}
          value={name}
          // onBlur={() => this.onBlur()}
          // onFocus={() => this.onFocus()}
          
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
