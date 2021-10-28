import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
import Header from '../../components/Header';
const { width, height } = Dimensions.get('window');
export default function Otpscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header name='Confirm your number' />
      <View style={styles.viewText}>
        <Text style={styles.textStyl}>
          Enter the code we sent over SMS to 3111999825:
        </Text>
      </View>
      <View style={styles.mainview}>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          tintColor={colors.primary}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textStyl}>Didn’t get an SMS?</Text>
        <TouchableOpacity>
          <Text style={[styles.textStyl, styles.textSend]}>Send again</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnview}>
        <TouchableOpacity
          style={styles.btnStyl}
          onPress={() => navigation.navigate('Notification')}
        >
          <Text style={[styles.textStyl, styles.btnText]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  mainview: {
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  viewText: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 2,
  },
  textStyl: {
    fontSize: 15,
    fontFamily: fonts.light,
    color: colors.black,
  },
  textSend: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: colors.primary,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  btnview: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '95%',
  },
  btnStyl: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    elevation: 3,
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
});
