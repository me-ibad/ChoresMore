import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '@common/colors';
import { fonts } from '@common/fonts';
import gstyles from '@common/gstyles';
export default function Searchbar(props) {
  return (
    <View style={styles.viewInput}>
      <Ionicons name='search' size={25} color={colors.primary} />
      <TextInput
        style={styles.inputSearch}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder={props.placeholder}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewInput: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    padding: 5,
    borderRadius: 10,
  },
  inputSearch: {
    width: '100%',
    marginLeft: 5,
  },
});
