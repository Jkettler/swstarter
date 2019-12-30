import React from 'react';
import {Text, View} from 'react-native';

export const ObjectTextWrap = ({list}) => {
  return list.map((attr, idx) => {
    return (
      <Text key={idx}>{`${Object.keys(attr)}: ${Object.values(attr)}`}</Text>
    );
  });
};
