import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, View, StyleSheet} from 'react-native';
import {searchUrlBuilder} from '../util/helpers';
import {SwsButton} from '../components/sws-button';
import {SEARCH_OPTIONS} from '../constants';

export const SearchScreen = props => {
  const [searchText, setSearchText] = useState('');
  const [selection, setSelection] = useState(0);

  const onSearchSubmit = e => {
    e.preventDefault();
    const {navigate} = props.navigation;
    const {category} = SEARCH_OPTIONS[selection];
    const url = searchUrlBuilder(searchText, category);
    navigate('Results', {
      url: url,
    });
  };

  return (
    <SafeAreaView style={styles.searchScreen}>
      <View style={styles.controls}>
        <Text style={styles.prompt}>What are you searching for?</Text>
        <TextInput
          style={styles.searchBox}
          value={searchText}
          editable
          placeholder={SEARCH_OPTIONS[selection].placeholder}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <View style={styles.bottomButton}>
        <SwsButton onPress={e => onSearchSubmit(e)} title={'SEARCH'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    alignContent: 'center',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30,
  },
  controls: {
    justifyContent: 'space-between',
  },
  bottomButton: {
    justifyContent: 'space-evenly',
  },
  searchBox: {
    height: 36,
    width: 260,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 3,
  },
  prompt: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
