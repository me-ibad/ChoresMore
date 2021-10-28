import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Header from '../../components/Header/secondHeader';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import gstyles from '@common/gstyles';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import Rattings from '../../components/Rattings';

const dataCategory = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Autoparts',
    img: 'https://i.ibb.co/XzGSNnY/Auto-Parts.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Books',
    img: 'https://i.ibb.co/WprBfnW/Books.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Bus',
    img: 'https://i.ibb.co/2k3GMs0/Bus.png',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145671e29d72',
    name: 'Cars',
    img: 'https://i.ibb.co/rtFcVqm/Cars.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145771e29d72',
    name: 'Delivery',
    img: 'https://i.ibb.co/M9fYBnQ/Delivery.png',
  },
];

const AmenitiesData = [
  {
    id: '1',
    title: 'Message the Business',

    img: 'https://ui-avatars.com/api/?name=MB',
  },
  {
    id: '2',
    title: 'Message the Business',

    img: 'https://ui-avatars.com/api/?name=MB',
  },
  {
    id: '3',
    title: 'Message the Business',

    img: 'https://ui-avatars.com/api/?name=MB',
  },
];

export default function Brand() {
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const renderCategory = ({ item }) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginLeft:
            item.id === 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba' ? 10 : 30,
        }}
      >
        <Image style={styles.imgCategory} source={{ uri: item.img }} />
        <Text style={styles.textCategory}>{item.name}</Text>
      </View>
    );
  };
  const Amenities = ({ item }) => {
    return (
      <View style={styles.containerAmenities}>
        <Image
          style={styles.imgAmenities}
          source={{
            uri: item.img,
          }}
        />
        <Text style={[gstyles.textStyl2, styles.textAmenities]}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={gstyles.container}>
      <Header name='Pakistan' />
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper autoplay height={200} activeDotColor={colors.primary}>
            <View style={styles.slide}>
              <ImageBackground
                source={{
                  uri: 'https://image.freepik.com/free-psd/delicious-burger-food-menu-web-banner-template_106176-404.jpg',
                }}
                resizeMode='cover'
                style={styles.sliderImage}
              >
                <View style={styles.swiperView}>
                  <Text style={styles.swiperName}>American Jr.</Text>
                  <Text style={styles.swiperCategory}>
                    Pizza, Burger, Pasta
                  </Text>
                  <View style={styles.viewVerify}>
                    <FontAwesome name='check' size={15} color={colors.white} />
                    <Text style={styles.textTime}>erified</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </Swiper>
        </View>
        <View style={styles.viewDescription}>
          <View style={styles.viewPortion}>
            <Text style={styles.textPortion}>
              <FontAwesome name='star' size={15} color={colors.primary} /> 4.6
            </Text>

            <Text style={styles.textSubPortion}>See reviews</Text>
          </View>
          <View style={styles.verticleLine} />

          <View style={styles.viewPortion}>
            <Text style={styles.textPortion}>
              <Ionicons name='location' size={15} color={colors.primary} />{' '}
              0.55KM
            </Text>

            <Text style={styles.textSubPortion}>Distance</Text>
          </View>
          <View style={styles.verticleLine} />

          <View style={[styles.viewPortion]}>
            <Text style={styles.textPortion}>
              <FontAwesome name='dollar' size={15} color={colors.primary} />
              <FontAwesome name='dollar' size={15} color={colors.primary} />
              <FontAwesome name='dollar' size={15} color={colors.light} />
            </Text>

            <Text style={styles.textSubPortion}>16k-20k </Text>
          </View>
          <View style={styles.verticleLine} />

          <View style={styles.viewPortion}>
            <Text style={styles.textPortion}>
              <Ionicons
                name='md-ellipsis-horizontal-sharp'
                size={20}
                color={colors.primary}
              />
            </Text>

            <Text style={styles.textSubPortion}>View more</Text>
          </View>
        </View>

        <View style={styles.viewCategory}>
          <FlatList
            data={dataCategory}
            horizontal={true}
            renderItem={renderCategory}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={styles.textReview}>Start a review:</Text>
        <View style={styles.viewReview}>
          <Rattings />
        </View>

        <View style={gstyles.divider} />

        <View style={styles.viewMap}>
          <MapView
            style={styles.mapStyle}
            region={region}
            onRegionChangeComplete={(region) => setRegion(region)}
          >
            <Marker
              title='user'
              description='test'
              image={require('../../assets/img/greenMarker.png')}
              coordinate={region}
              initialRegion={region}
              loadingEnabled={true}
              loadingIndicatorColor='#666666'
              loadingBackgroundColor='#eeeeee'
              moveOnMarkerPress={false}
              showsUserLocation={true}
              showsCompass={true}
              showsPointsOfInterest={false}
            />
          </MapView>
        </View>

        <View style={styles.viewBusiness}>
          <Text style={styles.textBusinessHead}>Amenities</Text>
          <FlatList
            data={AmenitiesData}
            renderItem={Amenities}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.viewBusiness}>
          <Text style={styles.textBusinessHead}>From the business</Text>
          <Text style={styles.textBusinessDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>

        <View style={styles.viewUserData}>
          <Image
            style={styles.imgAvatar}
            source={{
              uri: 'https://ui-avatars.com/api/?name=Mohsin+Ali',
            }}
          />
          <View style={styles.viewUserInfo}>
            <Text style={styles.textPortion}>Mohsin Ali</Text>
            <Text style={styles.textBusinessDescription}>Business Owner</Text>
          </View>
        </View>
        <View style={gstyles.divider} />

        <View style={styles.viewAddReview}>
          <Text style={styles.textPortion}>Reviews</Text>

          <View style={styles.viewAddReviewBox}>
            <View style={styles.viewUserReview}>
              <Rattings />
            </View>
            <Text style={styles.textBusinessDescription}>Tap to review...</Text>
          </View>
        </View>

        <View>
          <View style={styles.viewUserData}>
            <Image
              style={styles.imgAvatar}
              source={{
                uri: 'https://ui-avatars.com/api/?name=Mohsin+Ali',
              }}
            />
            <View style={styles.viewUserInfo}>
              <Text style={styles.textPortion}>Mohsin Ali</Text>
              <Text style={styles.textBusinessDescription}>Business Owner</Text>
            </View>
          </View>
          <View style={styles.viewUserReview}>
            <Rattings />
          </View>

          <View style={styles.viewBusiness}>
            <Text style={styles.textBusinessDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View style={gstyles.divider} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  sliderContainer: {
    height: 200,
    width: wp('100%'),
    // marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  swiperName: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  swiperView: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '25%',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 10,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  swiperCategory: {
    color: colors.white,
    fontSize: 15,

    fontFamily: fonts.medium,
  },
  viewVerify: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  textTime: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  viewDescription: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    height: 80,
  },
  viewPortion: {
    marginHorizontal: 10,
    marginVertical: 15,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPortion: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  verticleLine: {
    borderLeftWidth: 1,
    borderLeftColor: colors.border,

    marginVertical: 15,
  },
  textSubPortion: {
    fontSize: 13,
    marginTop: 5,
    fontFamily: fonts.light,
  },
  imgCategory: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  textCategory: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  viewCategory: {
    marginRight: 10,
    marginTop: 10,
  },
  textReview: {
    fontSize: 15,
    fontFamily: fonts.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewReview: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },

  viewBusiness: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textBusinessHead: {
    fontSize: 15,
    fontFamily: fonts.medium,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textBusinessDescription: {
    fontSize: 13,
    fontFamily: fonts.light,
  },
  viewUserData: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  imgAvatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  viewUserInfo: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  viewUserReview: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  viewMap: {
    marginVertical: 10,
    height: 200,
    width: wp('100%'),
  },
  mapStyle: {
    height: '100%',
  },
  viewAddReview: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  viewAddReviewBox: {
    shadowColor: '#000',
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 10,
  },
  containerAmenities: {
    flexDirection: 'row',
    marginVertical: 10,
    // justifyContent: 'space-between',
  },
  imgAmenities: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  textAmenities: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
