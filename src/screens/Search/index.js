import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import SeacondHeader from '@components/Header/secondHeader';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { colors } from '@common/colors';
import { fonts } from '@common/fonts';
import gstyles from '@common/gstyles';
import Searchbar from '@components/Searchbar';
const { width, height } = Dimensions.get('window');
import { FlatGrid, SectionGrid } from 'react-native-super-grid';

const FirstRoute = () => <View />;

const SecondRoute = () => <View />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
  forth: SecondRoute,
});

export default function Search({ navigation }) {
  const [items, setItems] = React.useState([
    { name: 'Autoparts', img: 'https://i.ibb.co/XzGSNnY/Auto-Parts.png' },
    { name: 'Books', img: 'https://i.ibb.co/WprBfnW/Books.png' },
    { name: 'Bus', img: 'https://i.ibb.co/2k3GMs0/Bus.png' },
    { name: 'Cars', img: 'https://i.ibb.co/rtFcVqm/Cars.png' },
    { name: 'Beauty', img: 'https://i.ibb.co/Bttfw8q/Beauty.png' },
    { name: 'Fashion', img: 'https://i.ibb.co/QcNwXFn/Fashion.png' },
    { name: 'Kids', img: 'https://i.ibb.co/P5TsrqV/Kids.png' },
    { name: 'Spa Saloon', img: 'https://i.ibb.co/HX6kqxt/Spa-Saloon.png' },

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
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={[styles.indicator, { backgroundColor: colors.primary }]}
      style={[styles.tabbar, { backgroundColor: colors.background }]}
      tabStyle={styles.tab}
      inactiveColor={colors.light}
      activeColor={colors.black}
      renderLabel={({ route, focused, color }) => (
        <View style={{ flex: 1, width: 130, alignItems: 'center' }}>
          <Text semibold={focused} style={{ color }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Popular' },
    { key: 'second', title: 'Games' },
    { key: 'third', title: 'Promo Incaranmu' },
    { key: 'forth', title: 'TopUp' },
  ]);

  return (
    <SafeAreaView style={gstyles.container}>
      <SeacondHeader name='All Categories' />
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: width }}
      />

      <ScrollView style={gstyles.viewBody}>
        <Searchbar placeholder='Search Category' />

        <SectionGrid
          itemDimension={width / 5}
          sections={[
            {
              title: 'Popular',
              data: items.slice(0, 4),
            },
            {
              title: 'Games',
              data: items.slice(4, 8),
            },
            {
              title: 'Promo Incaranmu',
              data: items.slice(8, 12),
            },
            {
              title: 'Legal',
              data: items.slice(12, 16),
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ marginBottom: 10 }}
              onPress={() => navigation.navigate('Listings')}
            >
              <Image style={styles.imgCategory} source={{ uri: item.img }} />
              <Text style={styles.textCategory}>{item.name}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={gstyles.textStyl2}>{section.title}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textCategory: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginRight: 5,
  },
  imgCategory: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  sectionHeader: {
    backgroundColor: colors.graylight,
    padding: 3,
    width: '100%',
  },

  tab: {
    width: 100,
  },
  indicator: {
    height: 2,
  },
});
