import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

const baseApi = 'https://swapi.co/api/';

export const RequestList = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    const {group, whitelist = [], whitelistKey = null} = props;

    const url = `${baseApi}${group}/`;

    const fetchData = async () =>
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          const {results} = responseJson;

          console.log('results: ', results);
          console.log('whitelist: ', whitelist);
          console.log('whitelistKey: ', whitelistKey);
          return results.filter(item => whitelist.includes(item[whitelistKey]));
        })
        .then(responseFiltered => {
          console.log('response: ', responseFiltered);
          setIsLoading(false);
          setResult(responseFiltered);
        })
        .catch(error => {
          console.error(error);
        });
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
  console.log('result: ', result);
  return (
    <View>
      <FlatList
        data={result}
        renderItem={({item}) => (
          <Text>
            {item[props.displayKey]} {item.url}
          </Text>
        )}
        keyExtractor={({url}, index) => url}
      />
    </View>
  );
};
