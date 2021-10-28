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

const renderHeader = () => (
  <View style={styles.header}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  </View>
);

const CategoryData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Grocery',
    subtitle: 'you will get ordinary med',
    img: 'https://i.ibb.co/prRLjbC/Grocery.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Restaurants',
    subtitle: 'you will get ordinary med',
    img: 'https://i.ibb.co/BtD9DYL/Restaurants.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medicine',
    subtitle: 'you will get ordinary med',
    img: 'https://i.ibb.co/5K029v7/Medicine.png',
  },
];

const HomeServiceData = [
  {
    id: '1',
    title: 'AC Repair',

    img: 'https://i.ibb.co/3pCk8Y5/AC-Repair.png',
  },
  {
    id: '2',
    title: 'Home Clean',

    img: 'https://i.ibb.co/2kGCr6C/Home-Clean.png',
  },
  {
    id: '3',
    title: 'Move Store',

    img: 'https://i.ibb.co/V9RWvPp/Move-Store.png',
  },
];

const ShoppingData = [
  {
    id: '1',
    title: 'Electronics',
    subtitle: 'BEST SELLER',
    img: 'https://i.ibb.co/dWDjwd8/Electronics.png',
  },
  {
    id: '2',
    title: 'Fashions',
    subtitle: 'TRENDING',
    img: 'https://i.ibb.co/D1ZLBfL/Fashions.png',
  },
  {
    id: '3',
    title: 'Homes',
    subtitle: 'NEW ARRIVALS',
    img: 'https://i.ibb.co/bdhNv6x/Homes.png',
  },
  {
    id: '4',
    title: 'Mobiles',
    subtitle: 'TOP BRANDS',
    img: 'https://i.ibb.co/zSh81fJ/Mobiles.png',
  },
];

const AutomobileData = [
  {
    id: '1',
    title: 'Bikes',
    subtitle: 'BEST SELLER',
    img: 'https://i.ibb.co/JsXqbKJ/Bikes.png',
  },
  {
    id: '2',
    title: 'New Cars',
    subtitle: 'TRENDING',
    img: 'https://i.ibb.co/RNZthvy/New-Cars.png',
  },
  {
    id: '3',
    title: 'Parts',
    subtitle: 'NEW ARRIVALS',
    img: 'https://i.ibb.co/4tPxj8S/Parts.png',
  },
  {
    id: '4',
    title: 'Used Cars',
    subtitle: 'TOP BRANDS',
    img: 'https://i.ibb.co/1fMPB5j/Used-Cars.png',
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
      <Text style={styles.texthead}>{item.title}</Text>
      <Text style={styles.subtext}>Enjoy 50% Off and more</Text>
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

const HomeService = ({ item }) => {
  return (
    <ImageBackground
      resizeMode='stretch'
      style={styles.ImageBackground}
      imageStyle={{ borderRadius: 5 }}
      source={{
        uri: item.img,
      }}
    >
      <Text style={styles.texthead}>{item.title}</Text>
    </ImageBackground>
  );
};

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

const Automobile = ({ item }) => {
  return (
    <ImageBackground
      resizeMode='stretch'
      style={styles.ImageBackgroundShopcar}
      imageStyle={{ borderRadius: 5 }}
      source={{
        uri: item.img,
      }}
    >
      <View
        style={[styles.viewInnercat, { position: 'absolute', top: 5, left: 5 }]}
      >
        {/* <Text style={gstyles.textStyl}>{item.subtitle}</Text> */}
        <Text style={gstyles.textStyl2}>{item.title}</Text>
      </View>
    </ImageBackground>
  );
};

export default function Home({ navigation }) {
  const sheetRef = React.useRef(null);

  const [items, setItems] = React.useState([
    { name: 'Autoparts', img: 'https://i.ibb.co/XzGSNnY/Auto-Parts.png' },
    { name: 'Books', img: 'https://i.ibb.co/WprBfnW/Books.png' },
    { name: 'Bus', img: 'https://i.ibb.co/2k3GMs0/Bus.png' },
    { name: 'Cars', img: 'https://i.ibb.co/rtFcVqm/Cars.png' },
    { name: 'Delivery', img: 'https://i.ibb.co/M9fYBnQ/Delivery.png' },
    {
      name: 'Entertainment',
      img: 'https://i.ibb.co/Wpq8Bz1/Entertainment.png',
    },
    { name: 'Food', img: 'https://i.ibb.co/xXwjM7b/Food.png' },
    { name: 'Grocery', img: 'https://i.ibb.co/jD7KX1w/Grocery.png' },
    { name: 'Haircutting', img: 'https://i.ibb.co/n1CfVM2/Haircutting.png' },
    { name: 'Real Estate', img: 'https://i.ibb.co/F0dnkYV/Real-Estate.png' },
    { name: 'Travel Tour', img: 'https://i.ibb.co/JqvKCgH/Travel-Tour.png' },
    { name: 'View More', img: 'https://i.ibb.co/FKwDH63/View-More.png' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <Text
        style={{
          color: colors.black,
          marginHorizontal: 10,
          marginVertical: 10,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Chores & More (logo)
      </Text>
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
      <ScrollView style={styles.viewBody}>
        <View style={styles.panel}>
          <CategoryOptions name='Cleaning' />
          <FlatList
            data={CategoryData}
            horizontal={true}
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
            renderItem={HomeService}
            keyExtractor={(item) => item.id}
          />

          <CategoryOptions name='Shopping' />
          <FlatGrid
            itemDimension={130}
            data={ShoppingData}
            renderItem={Shopping}
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
  viewBody: {
    marginHorizontal: 10,
    marginVertical: 10,
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
  bannerimage: {
    width: '100%',
    height: 80,
    // flexWrap: 'wrap',
    // justifyContent: 'flex-end',
    // paddingHorizontal: 10,
    // paddingVertical: 15,
  },
  imgAvt: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  viewBackImage: {
    marginVertical: 10,
  },
  bannerHeadertext: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  bannersubHeadertext: {
    color: colors.white,
    width: '65%',
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  viewBanner: {
    marginHorizontal: '5%',
    marginVertical: 10,
  },

  imgCategory: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  viewFlatgrid: {
    marginLeft: 10,
  },
  gridView: {
    marginTop: 10,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1,
  },
  textCategory: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  imgLogo: {
    // width: 10,
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
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
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
    width: 100,
    // borderRadius: 10,
    height: 150,
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
