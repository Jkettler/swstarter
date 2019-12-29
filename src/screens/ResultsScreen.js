import React from 'react';
import {View, Text} from 'react-native';
import {RequestList} from '../components/request-list';
import {ResultItem} from '../components/result-item';

export const ResultsScreen = props => {
  const url = props.navigation.getParam('url');

  const onItemVisit = item => {
    const {navigate} = props.navigation;
    navigate('Details', {item: item});
  };

  const renderItem = item => {
    return <ResultItem item={item} onItemVisit={onItemVisit} />;
  };

  return (
    <View>
      <Text>Results:</Text>
      <RequestList renderItem={renderItem} url={url} {...props} />
    </View>
  );
};
