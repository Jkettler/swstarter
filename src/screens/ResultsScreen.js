import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ResultList} from '../components/result-list';
import {ResultItem} from '../components/result-item';
import {Footer} from '../components/footer';
import {fetchOne} from '../util/fetchers';
import {CenteredInfoView} from '../components/centered-info-view';
import {InfoHeader} from '../styles/info-header';

export const ResultsScreen = props => {
  const url = props.navigation.getParam('url');
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState({});
  const headerComponent = <Text style={InfoHeader.header}>Results</Text>;

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

  // if (isLoading) {
  //   return;
  // }
  return (
    <View style={styles.results}>
      {isLoading ? (
        <CenteredInfoView text={'Searching...'} />
      ) : (
        <>
          <ResultList
            headerComponent={headerComponent}
            renderItem={renderItem}
            data={result.results}
          />
          <Footer visible={!isLoading} navigation={props.navigation} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    margin: 30,
    flexGrow: 1,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
