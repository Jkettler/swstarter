import React from 'react';
import {Button, View, Text} from 'react-native';
import {RequestList} from '../components/request-list';

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
          <View>
            <Text key={v}>
              {k[0]}: {k[1]}
            </Text>
            <RequestList
              group={'films'}
              whitelist={rest.films}
              whitelistKey={'url'}
              displayKey={'title'}
            />
          </View>
        );
      })}
    </View>
  );
};
