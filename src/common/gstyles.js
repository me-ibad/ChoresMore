import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from './colors';
import { fonts } from './fonts';
const { width, height } = Dimensions.get('window');
export default {
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    height: hp('100%'),
    width: wp('100%'),
  },
  textStyl: {
    fontSize: 13,
    fontFamily: fonts.light,
    color: colors.black,
  },
  textStyl2: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  viewBody: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  divider: {
    borderBottomColor: colors.light,
    // marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
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
};
