import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {CenteredInfoView} from './centered-info-view';
import {Divider} from './divider';
import {DISABLED_GREY} from '../constants';

export const ResultList = ({data = {}, renderItem, headerComponent}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={({url}) => url}
      // ItemSeparatorComponent={Divider}
      ListHeaderComponent={headerComponent}
      ListHeaderComponentStyle={styles.listHeader}
      contentContainerStyle={styles.container}
      ListEmptyComponent={
        <CenteredInfoView
          text={
            'There are zero matches.\n Use the form to search for People\n or Movies.'
          }
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  listHeader: {
    borderBottomColor: DISABLED_GREY,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  footer: {
    borderTopColor: DISABLED_GREY,
    borderTopWidth: 1,
  },
});
