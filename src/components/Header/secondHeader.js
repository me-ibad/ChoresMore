import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function SeacondHeader(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: '10%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name='arrow-back-sharp'
                color={colors.primary}
                size={30}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('GoogleSearch')}
            style={{
              width: '80%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Ionicons
              name='md-location-outline'
              color={colors.black}
              size={15}
            />
            <Text style={styles.Headertext}>{props.name}</Text>
            <MaterialIcons
              name='keyboard-arrow-down'
              color={colors.black}
              size={18}
            />
          </TouchableOpacity>

          <View style={{ width: '10%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name='bell-outline'
                color={colors.light}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingBottom: 5,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: 50,
    paddingHorizontal: 10,
  },
  Headertext: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontFamily: fonts.medium,
  },
});
