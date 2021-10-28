import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './src/navigations';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
export default function App() {
  let [fontsLoaded] = useFonts({
    'airbnb-li': require('./src/assets/fonts/AirbnbCerealLight.ttf'),
    'airbnb-md': require('./src/assets/fonts/AirbnbCerealMedium.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        {/* expo build:ios */}
        <Navigation />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
