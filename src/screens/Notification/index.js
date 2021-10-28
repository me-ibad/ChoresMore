import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  Switch,
  TouchableOpacity,
} from 'react-native';

import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
import Header from '../../components/Header';
const { width, height } = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';

export default function Notification({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Header name='Notification' />

      <View style={styles.viewBody}>
        <Entypo name='chat' color={colors.primary} size={50} />

        <View style={styles.viewText}>
          <Text style={[styles.textStyl, styles.textTurn]}>
            Turn on notification?
          </Text>
          <Text style={styles.subtextStyl}>
            Don’t miss important messages like check-in details and account
            activity
          </Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.viewTypes}>
          <Text style={[styles.textStyl, styles.textSwitch]}>
            Get prduct deals, personalized recommendations, and more
          </Text>

          <Switch
            style={styles.switch}
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.btnview}>
          <TouchableOpacity
            style={styles.btnStyl}
            onPress={() => Alert.alert('Confirmed')}
          >
            <Text style={[styles.textStyl, styles.btnText]}>
              Yes, notify me
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewSkip}>
          <TouchableOpacity
            style={styles.btnSkip}
            onPress={() => navigation.navigate('Community')}
          >
            <Text style={[styles.textStyl, styles.textSkip]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  viewBody: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textStyl: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  subtextStyl: {
    fontSize: 13,
    fontFamily: fonts.light,
    color: colors.black,
  },
  viewText: {
    marginVertical: 10,
  },
  textTurn: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  divider: {
    borderBottomColor: colors.border,
    marginHorizontal: 10,

    marginVertical: 25,
    borderBottomWidth: 1,
  },
  viewTypes: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textSwitch: {
    width: '80%',
    fontFamily: fonts.light,
  },
  switch: {
    position: 'absolute',
    right: 10,
  },
  btnview: {
    marginVertical: 10,
  },
  btnStyl: {
    width: '50%',
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    elevation: 3,
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  viewSkip: { marginVertical: 10 },
  btnSkip: {
    width: '30%',
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

    elevation: 3,
  },
  textSkip: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
