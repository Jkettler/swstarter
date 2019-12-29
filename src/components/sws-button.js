import React from 'react';
import {Button, StyleSheet} from 'react-native';

export const SwsButton = props => {
  return (
    <Button style={styles.button} onPress={props.onPress} title={props.title} />
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 32,
    color: 'white',
  },
});
