import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, View, StyleSheet} from 'react-native';
import {searchUrlBuilder} from '../util/helpers';
import {SwsButton} from '../components/sws-button';
import {SEARCH_OPTIONS} from '../constants';
import {RadioButtonGroup} from '../components/radio-button-group';

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
        <Text style={styles.prompt}>What are you searching for ?</Text>
        <RadioButtonGroup
          selected={selection}
          options={SEARCH_OPTIONS}
          onPress={setSelection}
        />
        <TextInput
          style={styles.searchBox}
          value={searchText}
          editable
          placeholder={SEARCH_OPTIONS[selection].placeholder}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <View style={styles.bottomButton}>
        <SwsButton
          disabled={!searchText.length}
          onPress={e => onSearchSubmit(e)}
          title={'SEARCH'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: 30,
  },
  controls: {
    flex: 0.25,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    marginRight: 30,
  },
  bottomButton: {
    marginBottom: 10,
  },
  searchBox: {
    height: 36,
    width: 260,
    paddingLeft: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 3,
  },
  prompt: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
