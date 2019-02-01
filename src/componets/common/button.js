import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
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
const MyButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.button}
    >
      <Text style={styles.submitText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
export default MyButton;
