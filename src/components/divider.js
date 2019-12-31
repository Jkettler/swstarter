import {View} from 'react-native';
import React from 'react';
import {DISABLED_GREY} from '../constants';

export const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: DISABLED_GREY,
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10,
      }}
    />
  );
};
