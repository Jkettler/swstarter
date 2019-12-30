import React from 'react';
import {Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SWS_GREEN} from '../constants';

export const SwsButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: SWS_GREEN,
    borderColor: SWS_GREEN,
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-bold',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
