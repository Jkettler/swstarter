import React from 'react';
import {Button, View, Text} from 'react-native';

export const DetailsScreen = props => {
  const navigationOptions = {
    title: 'Details',
  };
  const {details} = props.navigation.state.params;
  const {crud, key, ...rest} = details;
  return (
    <View>
      {Object.entries(rest).map((k, v) => {
        return (
          <Text key={v}>
            {k[0]}: {k[1]}
          </Text>
        );
      })}
    </View>
  );
};
