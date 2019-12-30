import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailBlock = props => {
  return (
    <View>
      <Text style={styles.header}>{props.header}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Montserrat-bold',
  },
});
