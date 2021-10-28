import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import gstyles from '@common/gstyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '@common/colors';
import Searchbar from '@components/Searchbar';
export default function GoogleSearch({ navigation }) {
  return (
    <>
      <View style={{ width: '10%', marginTop: '10%' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-sharp' color={colors.primary} size={30} />
        </TouchableOpacity>
      </View>
      <GooglePlacesAutocomplete
        placeholder='Search'
        //   currentLocation={true}
        //   style={styles.viewInput}
        styles={{
          textInputContainer: {
            backgroundColor: 'white',
            marginTop: 10,
            marginHorizontal: 10,
          },
          textInput: {
            height: 38,

            borderWidth: 1,
            borderColor: colors.primary,
          },
          predefinedPlacesDescription: {
            color: colors.primary,
          },
          listView: {
            marginHorizontal: 10,
          },
          poweredContainer: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: '#c8c7cc',
            borderTopWidth: 0.5,
            //   backgroundColor: 'red',
          },
        }}
        currentLocationLabel='Current location'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  viewInput: {
    marginTop: 100,
    marginHorizontal: 10,
    marginVertical: 50,
  },
});
