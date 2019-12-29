import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import {RequestList} from '../components/request-list';
import {bulkUrlBuilder} from '../util/helpers';

export const DetailsScreen = props => {
  const item = props.navigation.getParam('item');

  const {name, films, title, opening_crawl, characters} = item;

  const orderedFilter = [
    'birth_year',
    'gender',
    'eye_color',
    'hair_color',
    'height',
    'mass',
  ];

  // orderedFilter acts as both a filter and a sorting scheme
  //
  const orderedObjectList = obj => {
    let result = [];
    for (let [k, v] of Object.entries(obj)) {
      const pos = orderedFilter.indexOf(k);
      if (pos >= 0) {
        const lhs = k
          .split('_')
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join(' ');

        result[pos] = (
          <Text key={k}>
            {lhs}: {v}
          </Text>
        );
      }
    }

    return result;
  };

  const onItemVisit = (e, itemAttrs) => {
    console.log('itemAttrs: ', itemAttrs);
    const {navigate} = props.navigation;
    navigate('Details', {item: itemAttrs});
  };

  const renderItem = itemAttrs => {
    return (
      <View>
        <Button
          title={itemAttrs.name || itemAttrs.title}
          onPress={e => onItemVisit(e, itemAttrs)}
        />
      </View>
    );
  };

  const header = name || title;
  const blockOneHeader = name ? 'Details' : 'Opening Crawl';
  const blockOne = name ? (
    orderedObjectList(item)
  ) : (
    <Text>{opening_crawl}</Text>
  );
  const blockTwoHeader = name ? 'Movies' : 'Characters';
  const bulkUrl = name ? bulkUrlBuilder(films) : bulkUrlBuilder(characters);
  const blockTwo = <RequestList url={bulkUrl} renderItem={renderItem} />;

  return (
    <View>
      <Text style={styles.header}>{header}</Text>
      <Text>{blockOneHeader}</Text>
      <View style={styles.block}>{blockOne}</View>
      <Text>{blockTwoHeader}</Text>
      {blockTwo}
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
