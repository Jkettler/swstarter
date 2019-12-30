import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {orderedObjectList} from '../util/helpers';
import {fetchManyInstances} from '../util/fetchers';
import {ObjectTextWrap} from '../components/object-text-wrap';
import {MockLink} from '../components/mock-link';

export const DetailsScreen = props => {
  const item = props.navigation.getParam('item');
  const {name, title, films, characters, opening_crawl} = item;

  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const orderedFilter = [
    'birth_year',
    'gender',
    'eye_color',
    'hair_color',
    'height',
    'mass',
  ];

  const onPress = (e, itemAttrs) => {
    const {navigate} = props.navigation;
    setIsLoading(true);
    setReferences([]);
    navigate('Details', {item: itemAttrs});
  };

  const renderItem = itemAttrs => {
    return <MockLink key={itemAttrs.url} onPress={onPress} item={itemAttrs} />;
  };

  useEffect(() => {
    const refUrls = films || characters;

    fetchManyInstances(refUrls).then(results => {
      setIsLoading(false);
      setReferences(results);
    });
  }, [films, characters]);

  const header = name || title;
  const blockOneHeader = name ? 'Details' : 'Opening Crawl';
  const blockOne = name ? (
    <ObjectTextWrap list={orderedObjectList(item, orderedFilter)} />
  ) : (
    <Text>{opening_crawl}</Text>
  );
  const blockTwoHeader = name ? 'Movies' : 'Characters';

  return (
    <View>
      <Text style={styles.header}>{header}</Text>
      <Text>{blockOneHeader}</Text>
      {blockOne}
      <Text style={styles.header}>{blockTwoHeader}</Text>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && references.map(ref => renderItem(ref))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontFamily: 'Montserrat-bold',
  },
  block: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'black',
  },
});
