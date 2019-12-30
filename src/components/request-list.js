import React from 'react';

import {FlatList} from 'react-native';

export const RequestList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => props.renderItem(item)}
      keyExtractor={({url}) => url}
    />
  );
};
