import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {SWS_GREEN, DISABLED_GREY} from '../constants';

export const SwsButton = props => {
  const {onPress, title, disabled = false} = props;

  const disabledStyles = {
    backgroundColor: DISABLED_GREY,
    borderColor: DISABLED_GREY,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={disabled ? [styles.button, disabledStyles] : styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: SWS_GREEN,
    borderColor: SWS_GREEN,
    height: 35,
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 15,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-bold',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
