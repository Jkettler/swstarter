import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const MockLink = ({item, onPress}) => {
  return (
    <TouchableOpacity
      key={item.url}
      style={styles.link}
      onPress={e => onPress(e, item)}>
      <Text>{item.name || item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 18,
    fontFamily: 'Montserrat-bold',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'black',
  }
});
