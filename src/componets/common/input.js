import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#7D8B99',
    borderBottomWidth: 1,
    width: '100%',
    fontSize: 20,
    paddingBottom: 5,
  },
  view: {
    width: '94%',
    marginBottom: 20,
  },
  topText: {
    fontSize: 18,
    color: '#4b4b4b',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
const MyInput = (props) => {
  const {
    label,
    placeholder,
    onChangeText,
    value,
    errorMessage,
  } = props;
  let {
    keyboardType,
    maxLength,
    multiline,
  } = props;
  if (keyboardType === undefined) {
    keyboardType = 'default';
  }
  if (maxLength === undefined) {
    maxLength = 25;
  }
  if (multiline === undefined) {
    multiline = false;
  }
  return (
    <View style={styles.view}>
      <Text style={styles.topText}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        multiline={multiline}
      />
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};
export default MyInput;
