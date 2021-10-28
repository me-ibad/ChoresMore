import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Walkthrough from '@screens/Walkthrough';
import Signin from '@screens/Signin';
import Otpscreen from '@screens/Otpscreen';
import Notification from '@screens/Notification';
import Community from '@screens/Community';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Listings from '@screens/Listings';
import Brand from '@screens/Brand';
import Deals from '@screens/Deals';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../common/colors';
import Search from '@screens/Search';
import GoogleSearch from '@screens/Search/GoogleSearch';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Deals') {
            iconName = focused ? 'pricetags' : 'pricetags';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-sharp';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Deals' component={Deals} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signin'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='MyTabs' component={MyTabs} />

        <Stack.Screen name='Walkthrough' component={Walkthrough} />
        <Stack.Screen name='Otpscreen' component={Otpscreen} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='Listings' component={Listings} />
        <Stack.Screen name='Community' component={Community} />
        <Stack.Screen name='GoogleSearch' component={GoogleSearch} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Brand' component={Brand} />
        <Stack.Screen name='Search' component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
