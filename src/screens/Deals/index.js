import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import gstyles from '@common/gstyles';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Deals() {
  return (
    <SafeAreaView style={gstyles.container}>
      <ScrollView style={gstyles.viewBody}>
        <View style={styles.viewUploadimg}>
          <Ionicons name='cloud-upload' size={20} color={colors.black} />
          <Text>Upload Image</Text>
        </View>
        <View style={styles.viewInput}>
          <Text style={gstyles.textStyl2}>Title</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor='black'
            placeholder='Title'

            // onChangeText={setpass}
          />
        </View>

        <View style={styles.viewInput}>
          <Text style={gstyles.textStyl2}>Price</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor='black'
            placeholder='Price'

            // onChangeText={setpass}
          />
        </View>

        <View style={gstyles.btnview}>
          <TouchableOpacity
            style={gstyles.btnStyl}
            onPress={() => navigation.navigate('MyTabs')}
          >
            <Text style={[gstyles.textStyl, gstyles.btnText]}>Upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  viewUploadimg: {
    backgroundColor: colors.graylight,
    padding: 20,
    margin: 20,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  viewInput: {
    marginVertical: 10,
  },
});
