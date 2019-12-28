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

export const ResultItem = ({details, onResultPress}) =>
  console.log('Details====: ') || (
    <View style={styles.item}>
      <Text style={styles.name}>{details.name}</Text>
      <Button title="See Details" onPress={() => onResultPress(details)} />
    </View>
  );

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});
