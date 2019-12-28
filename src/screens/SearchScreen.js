import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, Button} from 'react-native';
// import {ActionButton} from '../components/action-button';

export const SearchScreen = props => {
  const [searchText, setSearchText] = useState('');

  // const navigationOptions = {
  //   title: 'Search',
  // };

  // const onResultPress = details => {
  //   const {navigate} = this.props.navigation;
  //   console.log('onResultPress details: ', details);
  //   navigate('Details', {details: details});
  // };

  const onSearchSubmit = e => {
    e.preventDefault();
    // const {navigate} = props.navigation;
    console.log('str: ', searchText);
    // navigate('Results', {
    //   results: {},
    // });
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
