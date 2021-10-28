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
import gstyles from '@common/gstyles';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import colors from '@common';
export default function Profile() {
  const [items, setItems] = React.useState([
    { name: 'Personal Information', code: 'basket' },
    { name: 'Payments and payouts', code: 'ios-send' },
    { name: 'Notifications', code: 'pie-chart' },
    { name: 'My Cataloges', code: 'pie-chart' },
    { name: 'My Customers', code: 'person' },
    { name: 'Wallet', code: 'ios-wallet' },
    { name: 'Transactions', code: 'calculator' },
    { name: 'Refer and Earn', code: 'information-circle' },
    { name: 'How ravi works', code: 'shield-checkmark' },
    { name: 'Help Center', code: 'shield-checkmark' },
    { name: 'Give us feedback', code: 'shield-checkmark' },
    { name: 'Terms of service', code: 'shield-checkmark' },

    { name: 'Privacy policy', code: 'shield-checkmark' },
  ]);

  return (
    <SafeAreaView style={gstyles.container}>
      <View style={styles.viewbellicon}>
        <View style={{ width: '86%' }} />
        <MaterialCommunityIcons
          name='bell-outline'
          size={30}
          color={colors.light}
        />
      </View>

      <ScrollView style={gstyles.viewBody}>
        <View style={styles.viewInfo}>
          <View style={{ width: '70%', marginTop: 10 }}>
            <Text style={[gstyles.textStyl2, { fontSize: 20 }]}>Hey! User</Text>
            <TouchableOpacity style={styles.tochBronce}>
              <MaterialCommunityIcons name='medal' size={20} color='#D77367' />
              <Text style={[gstyles.textStyl2, { width: '60%' }]}>Bronce</Text>

              <MaterialIcons
                name='arrow-forward-ios'
                size={20}
                color={colors.light}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: '30%' }}>
            <Image
              style={styles.imgAvt}
              source={{
                uri: 'https://ui-avatars.com/api/?name=Ibad+Rehman',
              }}
            />
          </View>
        </View>

        <View style={styles.viewOptions}>
          <TouchableOpacity style={styles.touchOptions}>
            <Image
              style={styles.imgOption}
              source={{
                uri: 'https://ui-avatars.com/api/?name=up',
              }}
            />
            <Text style={[gstyles.textStyl, { textAlign: 'center' }]}>
              User Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchOptions}>
            <Image
              style={styles.imgOption}
              source={{
                uri: 'https://ui-avatars.com/api/?name=oh',
              }}
            />
            <Text style={[gstyles.textStyl, { textAlign: 'center' }]}>
              Orders history
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchOptions}>
            <Image
              style={styles.imgOption}
              source={{
                uri: 'https://ui-avatars.com/api/?name=hp',
              }}
            />
            <Text style={[gstyles.textStyl, { textAlign: 'center' }]}>
              Help Center
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchOptions}>
            <Image
              style={styles.imgOption}
              source={{
                uri: 'https://ui-avatars.com/api/?name=ph',
              }}
            />

            <Text style={[gstyles.textStyl, { textAlign: 'center' }]}>
              Payment method
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewRefer}>
          <Text
            style={[gstyles.textStyl2, { color: colors.white, fontSize: 17 }]}
          >
            Refer a friend
          </Text>
          <Text
            style={[gstyles.textStyl, { color: colors.white, marginTop: 5 }]}
          >
            For each friend that you refer
          </Text>
        </View>

        <SectionGrid
          itemDimension={width}
          // staticDimension={300}
          // fixed
          // spacing={20}
          sections={[
            {
              title: 'Personal settings',
              data: items.slice(0, 4),
            },
            {
              title: 'Performance and wallet',
              data: items.slice(4, 8),
            },
            {
              title: 'Support',
              data: items.slice(8, 11),
            },
            {
              title: 'Legal',
              data: items.slice(11, 13),
            },
          ]}
          style={styles.gridView}
          renderItem={({ item, section, index }) => (
            <View style={styles.viewPortion}>
              <TouchableOpacity style={styles.touchPortion}>
                <Ionicons name={item.code} size={25} color={colors.darkblue} />
                <Text
                  style={[
                    gstyles.textStyl2,
                    { marginHorizontal: 8, marginTop: 3, width: '78%' },
                  ]}
                >
                  {item.name}
                </Text>

                <MaterialIcons
                  name='arrow-forward-ios'
                  size={25}
                  color={colors.light}
                />
              </TouchableOpacity>
              <View style={gstyles.divider} />
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={[gstyles.textStyl2, { fontSize: 17 }]}>
              {section.title}
            </Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  viewbellicon: {
    // marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: colors.width,
  },
  viewInfo: {
    flexDirection: 'row',
    // marginTop: 10,
  },
  imgAvt: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  viewPortion: {
    marginTop: 5,
  },
  tochBronce: {
    padding: 7,
    flexDirection: 'row',
    marginTop: 10,
    width: '50%',
    borderRadius: 10,
    marginHorizontal: 3,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  touchPortion: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  viewRefer: {
    backgroundColor: colors.primary,
    padding: 40,
    borderRadius: 10,
    marginVertical: 15,
  },
  viewOptions: {
    padding: 20,
    marginVertical: 10,
    marginTop: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgOption: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  touchOptions: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
});
