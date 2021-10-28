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

import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
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

          <View
            style={{
              width: '80%',
              alignItems: 'center',
            }}
          >
            <Text style={styles.Headertext}>{props.name}</Text>
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
    height: 60,
    // ...Platform.select({
    //   ios: {
    //     height: '8%',
    //     marginTop: '10%',
    //   },
    //   android: {
    //     height: '8%',
    //   },
    // }),
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  Headertext: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
});
