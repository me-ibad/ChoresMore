import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Platform,
  FlatList,
} from 'react-native';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../common/colors';
import gstyles from '@common/gstyles';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');

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
    <ImageBackground
      resizeMode='stretch'
      style={styles.ImageBackgroundShopcar}
      imageStyle={{ borderRadius: 5 }}
      source={{
        uri: item.img,
      }}
    >
      <View style={styles.viewInnercat}>
        <Text style={gstyles.textStyl}>{item.subtitle}</Text>
        <Text style={gstyles.textStyl2}>{item.title}</Text>
      </View>
    </ImageBackground>
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

export default function BottomContent() {
  return (
    <View style={styles.panel}>
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
      <FlatGrid itemDimension={130} data={ShoppingData} renderItem={Shopping} />
      <CategoryOptions name='Automobile' />
      <FlatGrid
        itemDimension={130}
        data={AutomobileData}
        renderItem={Automobile}
      />
    </View>
  );
}
const styles = StyleSheet.create({
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
    marginBottom: 50,
  },
});
