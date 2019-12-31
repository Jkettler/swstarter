import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export const RadioButton = props => {
  return (
    <View style={styles.radio}>
      <View style={styles[props.style]} />
      <Button style={styles.active} title={''} onPress={props.onPress} />
      <Text style={styles.label}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    marginLeft: -30,
  },
  active: {
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    borderColor: 'rgb(0,148,255)',
    borderWidth: 5,
  },
  inactive: {
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    borderColor: '#ACACAC',
    borderWidth: 1,
  },
  label: {
    marginTop: -1,
    fontFamily: 'Montserrat-bold',
    fontSize: 14,
    letterSpacing: -0.01,
  }
});
