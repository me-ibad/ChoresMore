import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';

import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
import LottieView from 'lottie-react-native';
import Header from '../../components/Header';
const { width, height } = Dimensions.get('window');

export default function Community({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  function Agree() {
    setModalVisible(false);
    navigation.navigate('MyTabs');
  }
  return (
    <View style={styles.container}>
      <Header name='Join our community' />

      <View style={styles.viewBody}>
        <View style={styles.viewText}>
          <Text style={[styles.textStyl, styles.textTurn]}>
            Mithu is a community where anyone can belong
          </Text>
          <Text style={styles.textStyl}>
            To ensure this, we’re asking you to commit to respecting everyone on
            Ravi.
          </Text>
        </View>

        <View style={styles.viewText}>
          <Text style={styles.textStyl}>
            I agree to treat everyone in the Mithu community-regardless of their
            race, religion, national origin, ethnicity, skin color, disability,
            sex, gender identity, sexual orientation or age-with respect, and
            without judgment of bias.
            <Text style={styles.textSend}> Learn more</Text>
          </Text>
        </View>
      </View>

      <View style={styles.btnview}>
        <TouchableOpacity
          style={styles.btnStyl}
          onPress={() => setModalVisible(true)}
        >
          <Text style={[styles.textStyl, styles.btnText]}>Agree and join</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewSkip}>
        <TouchableOpacity
          style={styles.btnSkip}
          onPress={() => Alert.alert('You Decline')}
        >
          <Text style={[styles.textStyl, styles.textSkip]}>Decline</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ width: 200, height: 200 }}>
                <LottieView
                  source={require('../../assets/json/tick2.json')}
                  autoPlay
                  loop={false}
                  onAnimationFinish={() => Agree()}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  viewBody: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: height,
    width: width,
  },
  textStyl: {
    fontSize: 13,
    fontFamily: fonts.light,
    color: colors.black,
  },
  viewText: {
    marginVertical: 10,
  },
  textTurn: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: fonts.medium,
    marginBottom: 5,
  },

  textSend: {
    // position: 'absolute',
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  btnview: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 80,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '95%',
  },
  btnStyl: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    marginTop: 20,
    elevation: 3,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontWeight: 'bold',
  },

  viewSkip: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '95%',
  },

  btnSkip: {
    width: '100%',
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

    elevation: 3,
  },
  textSkip: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fonts.medium,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 2,
    backgroundColor: 'white',
    width: 200,
    height: 200,
    borderRadius: 20,
    padding: 3,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
