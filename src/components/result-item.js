import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

export const ResultItem = ({item, onItemVisit}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Button title="See Details" onPress={() => onItemVisit(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {},
  name: {
    fontSize: 32,
    color: 'black',
  },
});
