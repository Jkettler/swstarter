import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, View, StyleSheet} from 'react-native';

export const RequestList = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    const {url} = props;
    const fetchData = async () =>
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          setIsLoading(false);
          setResult(responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    fetchData();
  }, [props, props.url]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      data={result.results}
      renderItem={({item}) => props.renderItem(item)}
      keyExtractor={({url}, index) => url}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    padding: 20,
  },
});
