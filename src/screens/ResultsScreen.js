import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {RequestList} from '../components/request-list';
import {ResultItem} from '../components/result-item';
import {fetchOne} from '../util/fetchers';

export const ResultsScreen = props => {
  const url = props.navigation.getParam('url');
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState({});

  const onItemVisit = item => {
    const {navigate} = props.navigation;
    navigate('Details', {item: item});
  };

  const renderItem = item => {
    return <ResultItem item={item} onItemVisit={onItemVisit} />;
  };

  useEffect(() => {
    fetchOne(url).then(results => {
      setIsLoading(false);
      setResult(results);
    });
  }, [url]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.results}>
      <Text>Results:</Text>
      <RequestList renderItem={renderItem} data={result.results} />
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    marginLeft: 30,
    marginRight: 30,
  },
});
