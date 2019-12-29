import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, Button} from 'react-native';
import {searchUrlBuilder} from '../util/helpers';

export const SearchScreen = props => {
  const [searchText, setSearchText] = useState('');
  const [searchGroup, setSearchGroup] = useState('people');

  const onSearchSubmit = e => {
    e.preventDefault();
    const {navigate} = props.navigation;
    const url = searchUrlBuilder(searchText, searchGroup);
    navigate('Results', {
      url: url,
    });
  };

  return (
    <SafeAreaView>
      <TextInput
        value={searchText}
        editable
        placeholder={'Do you a searchin'}
        onChangeText={text => setSearchText(text)}
      />
      <Button onPress={e => onSearchSubmit(e)} title={'Do it'} />
    </SafeAreaView>
  );
};
