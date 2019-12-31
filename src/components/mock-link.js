import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export const MockLink = ({item, onPress, final = false}) => {
  return (
    <View style={styles.group}>
      <TouchableOpacity
        key={item.url}
        style={styles.link}
        onPress={() => onPress(item)}>
        <Text style={styles.text}>{item.name || item.title}</Text>
      </TouchableOpacity>
      {!final && <Text>{', '}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
  },
  link: {
    fontSize: 18,
    fontFamily: 'Montserrat-bold',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Montserrat-Regular',
    color: 'rgb(0, 148, 255)',
  },
});
