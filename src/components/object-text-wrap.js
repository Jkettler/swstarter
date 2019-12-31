import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ObjectTextWrap = ({list}) => {
  return list.map((attr, idx) => {
    return (
      <Text style={styles.text} key={idx}>{`${Object.keys(attr)}: ${Object.values(attr)}`}</Text>
    );
  });
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.01,
  },
});
