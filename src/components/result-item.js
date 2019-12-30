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
import {SwsButton} from './sws-button';

export const ResultItem = ({item, onItemVisit}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <SwsButton title="SEE DETAILS" onPress={() => onItemVisit(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {},
  name: {},
});
