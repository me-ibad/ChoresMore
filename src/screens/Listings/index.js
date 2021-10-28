import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { colors } from '@common/colors';
import { fonts } from '@common/fonts';
import SeacondHeader from '@components/Header/secondHeader';
import Searchbar from '@components/Searchbar';

const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Listingcard from '../../components/Cards/Listingcard';

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
  {
    id: '58694a0f-3da1-471f-bd96-145781e29d72',
    name: 'Food',
    img: 'https://i.ibb.co/xXwjM7b/Food.png',
  },
];

const FilterData = [
  {
    id: '1',
    name: 'Pickup',
    icon: 'bicycle',
  },
  {
    id: '2',
    name: 'Promotions',
    icon: 'pricetag',
  },

  {
    id: '3',
    name: 'Gift',
    icon: 'gift',
  },
  {
    id: '4',
    name: 'Over 4.5',
    icon: 'star',
  },
  {
    id: '5',
    name: 'Over 3.5',
    icon: 'star',
  },
];

const renderCategory = ({ item }) => {
  return (
    <View
      style={{
        marginBottom: 10,
        marginLeft:
          item.id === 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba' ? 10 : 30,
      }}
    >
      <Image style={styles.imgCategory} source={{ uri: item.img }} />

      <Text style={styles.textCategory}>{item.name}</Text>
    </View>
  );
};

const Filter = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.border,
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
      }}
    >
      <Ionicons name={item.icon} size={15} color={colors.yellow} />

      <Text style={styles.filterText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function Listings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <SeacondHeader name='Pakistan' />
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.viewSearch}
          onPress={() => navigation.navigate('Search')}
        >
          <Searchbar placeholder='What do you want' />
        </TouchableOpacity>

        <Swiper
          height={160}
          showsButtons={false}
          paginationStyle={{
            position: 'absolute',
            marginRight: 300,
            // left: 10,
            // right: 0,
            bottom: '74%',
          }}
          activeDotColor={colors.primary}
          dotColor={'#998FA2'}
        >
          <View style={styles.slide}>
            <View style={styles.viewImg}>
              <Image
                source={require('../../assets/img/listingbanner.png')}
                style={styles.img}
              />
            </View>
          </View>
        </Swiper>

        <View style={styles.viewCategory}>
          <FlatList
            data={dataCategory}
            horizontal={true}
            renderItem={renderCategory}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.viewCategory}>
          <FlatList
            data={FilterData}
            horizontal={true}
            renderItem={Filter}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.viewBody}>
          <Listingcard
            img='https://i.ibb.co/dJdqHf2/Red-Bridge.png'
            name='RedBridge'
          />
          <Listingcard
            img='https://i.ibb.co/5TrRq7T/American-Jr.png'
            name='American Jr'
          />
          <Listingcard
            img='https://i.ibb.co/zNq2Db3/Bonchon-Chicken.png'
            name='Bonchon Chicken'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    height: height,
    width: width,
  },
  scrollView: {},
  viewImg: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  img: {
    borderRadius: 10,
    //    resizeMode: "contain",
    //     alignSelf: "center",
    height: height * 0.17,
    justifyContent: 'flex-end',
    width: '100%',
  },
  slide: {
    backgroundColor: colors.white,
    // height: 20,
    height: height,
    width: width,
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
  divider: {
    borderBottomColor: colors.light,
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  viewSearch: {
    marginHorizontal: 10,
  },
  viewBody: {
    marginHorizontal: 10,
    marginVertical: 5,
    // 70% of height device screen
    width: wp('90%'), // 80% of width device screen
  },
  filterText: {
    margin: 2.5,
    fontSize: 10,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
});
