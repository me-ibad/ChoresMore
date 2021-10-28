import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Platform,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import { colorStyle } from 'styled-system';

export default function Signin({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header name='Log in or sign up' />
      <ScrollView style={styles.viewScroll}>
        <View style={styles.viewImg}>
          <Text
            style={{ color: colors.black, fontSize: 20, fontWeight: 'bold' }}
          >
            Chores & More (logo)
          </Text>
        </View>

        <View style={styles.viewBody}>
          {/* <View style={styles.viewCountry}>
            <Text style={[styles.textStyl, styles.textCountry]}>
              Country/Region
            </Text>
            <Text style={[styles.textStyl]}>Pakistan (+92)</Text>
          </View> */}

          <TextInput
            style={styles.inputText}
            placeholder='Username/ Email'
            keyboardType='email-address'
          />
          <TextInput
            style={styles.inputText}
            placeholder='Phone Number'
            secureTextEntry={true}
          />

          <Text style={[styles.textStyl, styles.textdesc]}>
            We’ll call you or text you to confirm your number. Standard message
            and data rates may apply.
          </Text>

          <View style={styles.btnview}>
            <TouchableOpacity
              style={styles.btnStyl}
              onPress={() => navigation.navigate('MyTabs')}
            >
              <Text style={[styles.textStyl, styles.btnText]}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.footer}>
          <View style={styles.btnview}>
            {/* <TouchableOpacity
              style={styles.applestyle}
              onPress={() => Alert.alert('Login to Apple')}
            >
              <AntDesign name='apple1' color={colors.white} size={20} />
              <Text style={[styles.textStyl, styles.textapple]}>
                Continue with Apple
              </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.googlestyle}
              onPress={() => Alert.alert('Login to Google')}
            >
              <AntDesign name='google' color={colors.black} size={20} />
              <Text style={[styles.textapple, styles.textStyl]}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.facebookstyle}
            onPress={() => Alert.alert('Login to Facebook')}
          >
            <MaterialIcons name='facebook' color={colors.white} size={20} />
            <Text style={[styles.textStyl, styles.textapple]}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  textStyl: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  textdesc: {
    color: colors.light,
  },
  imghead: {
    height: height * 0.3,
    width: width * 0.9,
  },
  viewImg: {
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  viewBody: {
    marginHorizontal: 10,
    marginTop: 50,
  },

  viewCountry: {
    borderWidth: 1,
    padding: 10,
    borderColor: colors.border,
    borderRadius: 10,
  },
  textCountry: {
    fontSize: 10,
  },
  inputText: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
  btnview: {
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  divider: {
    borderBottomColor: colors.border,
    marginHorizontal: 10,

    marginVertical: 25,
    borderBottomWidth: 1,
  },
  footer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  applestyle: {
    width: '100%',
    backgroundColor: colors.black,
    padding: 13,
    height: 50,
    borderRadius: 5,
    flex: 1,
    elevation: 2,
    flexDirection: 'row',
  },
  textapple: {
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 55,
  },
  googlestyle: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    padding: 13,
    height: 50,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 10,
    borderColor: colors.border,
  },
  facebookstyle: {
    width: '100%',
    backgroundColor: '#1877F2',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    padding: 13,
    height: 50,
    elevation: 2,
    flexDirection: 'row',
    marginTop: 10,
  },
});
