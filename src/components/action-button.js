import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';

export const ActionButton = ({text = 'blah', action = null, actionArgs = []}) => {
  // const handleClick = e => {
  //   e.preventDefault();
  //   // action.call(actionArgs);
  // };

  return (
    <SafeAreaView><Button onPress={() => console.log(text)} title={'Do a thing'} /></SafeAreaView>
  );
};
