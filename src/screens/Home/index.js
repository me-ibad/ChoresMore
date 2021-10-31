import React, { createRef } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  Button,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomContent from '../../components/BottomContent';
import gstyles from '@common/gstyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Searchbar from '@components/Searchbar';

const CleaningData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Laundry',
    img: 'https://img.freepik.com/free-vector/clothes-with-laundry-service-icons_24877-50300.jpg?size=338&ext=jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Cleaning',
    img: 'https://image.freepik.com/free-vector/cleaners-with-cleaning-products-housekeeping-service_18591-52068.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cooking',
    img: 'https://image.freepik.com/free-vector/realistic-flying-ingredients_23-2147856679.jpg',
  },
];

const HomeServiceData = [
  {
    id: '1',
    title: 'Repairs',
    img: 'https://image.freepik.com/free-vector/maintenance-concept-illustration_114360-391.jpg',
  },
  {
    id: '2',
    title: 'Sinks & More',
    img: 'https://img.freepik.com/free-vector/kitchen-table-illustration_1284-39940.jpg?size=338&ext=jpg',
  },
  {
    id: '3',
    title: 'Auto Fix',
    img: 'https://image.freepik.com/free-vector/hand-with-wrench-neon-sign_1262-15581.jpg',
  },
];

const OddJobsData = [
  {
    id: '1',
    title: 'Requests',
    img: 'https://image.freepik.com/free-vector/freight-quote-request-abstract-concept-illustration_335657-3952.jpg',
  },
  {
    id: '2',
    title: 'Opportunities',
    img: 'https://img.freepik.com/free-vector/ambition-abstract-concept-illustration-business-ambition-determination-setting-big-goal-making-fast-career-self-confident-getting-what-you-want-desire-success_335657-33.jpg?size=338&ext=jpg',
  },
  {
    id: '3',
    title: 'Auto Fix',
    img: 'https://image.freepik.com/free-vector/hand-with-wrench-neon-sign_1262-15581.jpg',
  },
];

const ShoppingData = [
  {
    id: '1',
    title: 'Grass Maintenance',
    subtitle: 'NEW ARRIVALS',
    img: 'https://image.freepik.com/free-vector/dandelion-removal-abstract-concept-vector-illustration-garden-maintenance-weed-free-lawn-selective-herbicides-use-organic-gardening-grass-seed-lawn-mowing-backyard-abstract-metaphor_335657-4119.jpg',
  },
  {
    id: '2',
    title: 'Weekly Maintenance',
    subtitle: 'NEW ARRIVALS',
    img: 'https://image.freepik.com/free-vector/24-7-timer-concept_108855-794.jpg',
  },
  {
    id: '3',
    title: 'Shrubs & Stuff',
    subtitle: 'NEW ARRIVALS',
    img: 'https://image.freepik.com/free-vector/vertical-green-city-illustration_335657-4644.jpg',
  },
  {
    id: '4',
    title: 'Preventative Care',
    subtitle: 'TOP BRANDS',
    img: 'https://image.freepik.com/free-vector/prevent-epidemic-rebound-concept-illustration_114360-3227.jpg',
  },
];

const Category = ({ item }) => {
  return (
    <ImageBackground
      resizeMode='cover'
      style={styles.ImageBackground}
      imageStyle={{ borderRadius: 5 }}
      source={{
        uri: item.img,
      }}
    >
      <View style={styles.viewTitle}>
        <Text style={styles.texthead}>{item.title}</Text>
      </View>
      {/* <Text style={styles.subtext}>Enjoy 50% Off and more</Text> */}
    </ImageBackground>
  );
};

function CategoryOptions(props) {
  return (
    <View style={styles.categoryOptions}>
      <Text style={gstyles.textStyl2}>{props.name}</Text>
      <MaterialIcons name='arrow-forward-ios' size={20} color={colors.black} />
    </View>
  );
}

const Shopping = ({ item }) => {
  return (
    <View style={styles.viewshopCard}>
      <ImageBackground
        resizeMode='stretch'
        style={styles.ImageBackgroundShopcar}
        imageStyle={{ borderRadius: 5 }}
        source={{
          uri: item.img,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            flexDirection: 'row',
          }}
        >
          <Ionicons name='star' size={15} color={colors.yellow} />
          <Text style={{ fontSize: 10 }}>(15)</Text>
        </View>
      </ImageBackground>
      <View style={styles.viewInnercat}>
        <Text style={[gstyles.textStyl, { fontSize: 10 }]}>
          {item.subtitle}
        </Text>
        <Text style={gstyles.textStyl2}>{item.title}</Text>
      </View>
    </View>
  );
};

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <Image
        style={styles.imgLogo}
        source={require('../../assets/img/logo1.png')}
      />

      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <TouchableOpacity
          style={styles.viewSearch}
          // onPress={() => navigation.navigate('Search')}
        >
          <Searchbar placeholder='What do you want' />
        </TouchableOpacity>

        <View style={styles.viewbellicon}>
          <MaterialCommunityIcons
            name='bell-outline'
            size={30}
            color={colors.light}
          />
        </View>

        <View style={{ width: '10%', marginVertical: 15 }}>
          <Image
            style={styles.imgAvt}
            source={{
              uri: 'https://ui-avatars.com/api/?name=Ibad+Rehman',
            }}
          />
        </View>
      </View>
      <ScrollView style={gstyles.viewBody}>
        <View style={styles.panel}>
          <CategoryOptions name='Cleaning' />
          <FlatList
            data={CleaningData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={Category}
            keyExtractor={(item) => item.id}
          />
          <CategoryOptions name='Home Services' />
          <FlatList
            data={HomeServiceData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={Category}
            keyExtractor={(item) => item.id}
          />

          <CategoryOptions name='Lawn Care' />
          <FlatGrid
            itemDimension={130}
            data={ShoppingData}
            renderItem={Shopping}
          />

          <CategoryOptions name='Odd jobs' />
          <FlatList
            data={OddJobsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={Category}
            keyExtractor={(item) => item.id}
          />

          {/* <CategoryOptions name='Shopping' />
          <FlatGrid
            itemDimension={130}
            data={ShoppingData}
            renderItem={Shopping}
          />
          <CategoryOptions name='Automobile' />
          <FlatGrid
            itemDimension={130}
            data={AutomobileData}
            renderItem={Automobile}
          /> */}
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

  viewInput: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    flexDirection: 'row',
    marginVertical: 10,
    width: '80%',
    padding: 5,
    borderRadius: 10,
  },
  inputSearch: {
    width: '100%',
    marginLeft: 5,
  },
  viewbellicon: {
    marginVertical: 15,
    // marginHorizontal: 5,
    marginLeft: 5,
    width: '10%',
  },

  imgAvt: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  viewTitle: {
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
    padding: 10,
    borderRadius: 10,
  },

  imgLogo: {
    width: 10,
    height: 60,
    width: width,
    marginVertical: 10,
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,

    // elevation: 2,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderTopWidth: 2,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderRightColor: 'grey',
    // borderLeftColor: 'grey',
    // borderTopColor: 'grey',
  },

  viewSearch: {
    // marginHorizontal: 10,
    width: '80%',
  },
  panel: {
    backgroundColor: '#FFFFFF',
    padding: 4,
    marginHorizontal: 10,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // height: height,
    // flexDirection: 'row',
  },
  ImageBackground: {
    width: 120,
    // borderRadius: 10,
    height: 170,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginRight: width / 25,
    paddingVertical: 15,
  },

  texthead: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  subtext: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  categoryOptions: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: 90,
    flexWrap: 'wrap',
  },
  ImageBackgroundShopcar: {
    width: '100%',
    // borderRadius: 10,
    height: 100,
    justifyContent: 'flex-end',
    // paddingHorizontal: 10,
  },
  viewInnercat: {
    margin: 10,
    marginBottom: 10,
  },
  viewshopCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    padding: 5,
    backgroundColor: colors.white,
  },
});
