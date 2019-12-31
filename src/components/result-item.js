import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {SwsButton} from './sws-button';
import {Divider} from './divider';

export const ResultItem = ({item, onItemVisit}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name || item.title}</Text>
      <SwsButton title="SEE DETAILS" onPress={() => onItemVisit(item)} />
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontFamily: 'Montserrat-bold',
    marginBottom: 15,
  },
  item: {
    justifyContent: 'space-between',
  },
});
