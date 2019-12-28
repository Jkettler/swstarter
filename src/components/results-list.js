import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import {ResultItem} from './result-item';

export const ResultsListView = props => (
  <SafeAreaView>
    <FlatList
      data={props.results}
      renderItem={({item}) =>
        console.log('item===: ') || (
          <ResultItem details={item} onResultPress={props.onResultPress} />
        )
      }
      keyExtractor={item => item.url}
    />
  </SafeAreaView>
);
