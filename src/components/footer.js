import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SwsButton} from './sws-button';

export const Footer = ({navigation, visible}) => {
  return (
    <SafeAreaView style={styles.footer}>
      {visible && (
        <SwsButton
          title={'BACK TO SEARCH'}
          onPress={() => navigation.navigate('Search')}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 36.5,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
