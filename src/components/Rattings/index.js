import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '@common/colors';
export default function Rattings() {
  return (
    <>
      <View style={styles.viewStars}>
        <FontAwesome name='star' size={15} color={colors.white} />
      </View>
      <View style={styles.viewStars}>
        <FontAwesome name='star' size={15} color={colors.white} />
      </View>
      <View style={styles.viewStars}>
        <FontAwesome name='star' size={15} color={colors.white} />
      </View>
      <View style={styles.viewStars}>
        <FontAwesome name='star' size={15} color={colors.white} />
      </View>
      <View style={styles.viewStars}>
        <FontAwesome name='star' size={15} color={colors.white} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  viewStars: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
