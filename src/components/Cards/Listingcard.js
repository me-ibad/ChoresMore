import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const image = { uri: 'https://i.ibb.co/dJdqHf2/Red-Bridge.png' };
import { colors } from '@common/colors';
import { fonts } from '@common/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Listingcard(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.Cardcontainer}>
      <View style={styles.cardImg}>
        <ImageBackground
          source={{
            uri: props.img,
          }}
          resizeMode='cover'
          imageStyle={{ borderRadius: 10 }}
          style={styles.image}
        >
          <View style={styles.viewFeature}>
            <Text style={styles.textFeature}>Featured</Text>
          </View>
          <View style={styles.viewRating}>
            <FontAwesome name='star' size={15} color={colors.primary} />
            <Text>4.6</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ width: '75%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Brand')}>
          <Text style={styles.textName}>{props.name}</Text>
        </TouchableOpacity>
        <View style={styles.viewVerify}>
          <FontAwesome name='check' size={15} color={colors.primary} />
          <Text style={styles.textTime}>erified</Text>
        </View>

        <View style={styles.viewDescription}>
          <Text style={styles.textStyl}>$$$ </Text>
          <Text style={styles.textType}> Pizza, Burger, Pasta </Text>
        </View>
        <View style={styles.viewDescription}>
          <FontAwesome name='clock-o' size={15} color={colors.primary} />
          <Text style={styles.textTime}> 39 - 54 min </Text>
          <Text style={styles.textStyl}> 106 K, DHA 1 - 3.5 KM</Text>
        </View>

        <View style={styles.viewDescription}>
          <FontAwesome name='percent' size={15} color={colors.primary} />
          <Text style={styles.textTime}> HASTA 28% OFF</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Cardcontainer: {
    flexDirection: 'row',
    marginVertical: 12,
    // height: hp('70%'), // 70% of height device screen
    // width: wp('80%'), // 80% of width device screen
  },
  cardImg: {
    width: '35%',
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },

  viewFeature: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 10,
    width: '60%',
    borderRadius: 5,
    padding: 2,
  },
  textFeature: {
    fontSize: 13,
    color: colors.white,
    fontFamily: fonts.medium,
  },
  viewRating: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    bottom: -6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    elevation: 3,
    width: '40%',
    right: 30,
  },
  textName: {
    fontSize: 15,
    fontFamily: fonts.medium,
    fontWeight: 'bold',
  },
  textType: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.light,
    marginLeft: 5,
  },
  textStyl: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  textTime: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  viewDescription: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  viewVerify: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
});
