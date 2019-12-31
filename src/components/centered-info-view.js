import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DISABLED_GREY} from '../constants';

export const CenteredInfoView = ({text}) => {
  return (
    <View style={styles.outer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: DISABLED_GREY,
    fontFamily: 'Montserrat-bold',
  },
  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
