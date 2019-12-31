import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Divider} from './divider';

export const DetailBlock = props => {
  return (
    <View style={styles.block}>
      <Text style={styles.header}>{props.header}</Text>
      <Divider />
      {props.text}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Montserrat-bold',
  },
});
