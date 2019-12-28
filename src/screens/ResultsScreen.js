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
import {ResultsListView} from '../components/results-list';
import {RequestList} from '../components/request-list';

export const ResultsScreen = props => {
  // const results = props.navigation.getParam('results', []);
  // const onResultPress = props.navigation.getParam('onResultPress', null);
  const navigationOptions = {
    title: 'Results',
  };

  return (
    <SafeAreaView>
      <Text>Check it out, some results:</Text>
    </SafeAreaView>
  );
};
