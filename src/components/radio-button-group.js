import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RadioButton} from './radio-button';

export const RadioButtonGroup = ({selected, options, onPress}) => {
  const buttons = options.map((opt, idx) => {
    const active = idx === selected;
    return (
      <TouchableOpacity
        disabled={active}
        key={idx}
        style={styles.radioButton}
        onPress={() => onPress(idx)}>
        <RadioButton
          style={active ? 'active' : 'inactive'}
          title={opt.display}
        />
      </TouchableOpacity>
    );
  });
  return <View style={styles.buttonGroup}>{buttons}</View>;
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
  },
  radioButton: {
    alignContent: 'center',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30,
  },
});
