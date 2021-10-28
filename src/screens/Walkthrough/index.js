import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Swiper from 'react-native-swiper';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Walkthrough({ navigation }) {
  function Skip() {
    return (
      <View style={styles.viewSkip}>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.textSkip}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        paginationStyle={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 50,
        }}
        activeDotColor={colors.black}
        dotColor='#998FA2'
      >
        <View style={styles.slide}>
          <View style={styles.viewImg}>
            <Image
              source={require('../../assets/img/walk.png')}
              style={styles.img}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.title}>Get Mithu</Text>
            <Text style={styles.text}>
              Makes your design workflow easy and save your time with Prisma UI
              Kit
            </Text>
          </View>
        </View>

        <View style={styles.slide1}>
          <Skip />
          <View style={styles.viewImg}>
            <Image
              source={require('../../assets/img/walk.png')}
              style={styles.img}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.title}>Do everything from one app</Text>
            <Text style={styles.text}>
              Makes your design workflow easy and save your time with Prisma UI
              Kit
            </Text>
          </View>
        </View>

        <View style={styles.slide2}>
          <Skip />
          <View style={styles.viewImg}>
            <Image
              source={require('../../assets/img/walk.png')}
              style={styles.img}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.title}>
              Food delivery, Consult your doctor, Dine out and more
            </Text>
            <Text style={styles.text}>
              Makes your design workflow easy and save your time with Prisma UI
              Kit
            </Text>
          </View>
        </View>

        <View style={styles.slide3}>
          <Skip />
          <View style={styles.viewImg}>
            <Image
              source={require('../../assets/img/walk.png')}
              style={styles.img}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.title}>
              Socialize, Stay upto date and play awesome games
            </Text>
            <Text style={styles.text}>
              Makes your design workflow easy and save your time with Prisma UI
              Kit
            </Text>
          </View>

          <View style={styles.btnview}>
            <TouchableOpacity
              style={styles.btnGetstarted}
              onPress={() => navigation.navigate('Signin')}
            >
              <Text style={styles.btntext}>Get Started!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slide: {
    backgroundColor: colors.white,
    height: height,
    width: width,
  },
  slide1: {
    backgroundColor: '#5EAE53',
    height: height,
    width: width,
  },
  slide2: {
    backgroundColor: '#ACDA7D',
    height: height,
    width: width,
  },
  slide3: {
    backgroundColor: '#4DAC70',
    height: height,
    width: width,
  },
  viewImg: {
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: '50%',
  },
  viewText: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSkip: {
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: '15%',
    position: 'absolute',
    right: 10,
  },
  textSkip: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  btnGetstarted: {
    width: 200,
    backgroundColor: colors.white,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    elevation: 3,
  },
  btnview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  img: {
    height: height * 0.3,
    width: width * 0.9,
  },
  title: {
    fontFamily: fonts.medium,
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.black,
    alignSelf: 'center',
  },
  text: {
    color: colors.black,
    fontFamily: fonts.light,
    marginTop: 20,
    fontSize: 13,
    lineHeight: 25,
    marginLeft: 10,
  },
  close: {
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingTop: '10%',
  },
  nextview: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: colors.primary,
  },
  preview: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: colors.primary,
    marginHorizontal: 20,
  },
});
