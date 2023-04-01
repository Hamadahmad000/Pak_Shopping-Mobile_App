import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import TextInputField from '../components/input/TextInputField';
import CommonButton from '../components/button/CommonButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signup = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [Mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  // fields Checking
  const [isBadEmail, setisBadEmail] = useState(false);
  const [isBadPassword, setisBadPassword] = useState(false);
  const [isBadName, setisBadName] = useState(false);
  const [isBadMobile, setisBadMobile] = useState(false);
  const [isBadConfirmPassword, setisBadConfirmPassword] = useState(false);
  const ValidateUser = () => {
    if (email == '') {
      setisBadEmail(true);
    } else {
      setisBadEmail(false);
    }
    if (password == '') {
      setisBadPassword(true);
    } else {
      setisBadPassword(false);
    }
    if (name == '') {
      setisBadName(true);
    } else {
      setisBadName(false);
    }
    if (Mobile == '') {
      setisBadMobile(true);
    } else {
      setisBadMobile(false);
    }
    if (Mobile.length < 10) {
      setisBadMobile(true);
    } else {
      setisBadMobile(false);
    }
    if (confirmPassword == '') {
      setisBadConfirmPassword(true);
    } else {
      setisBadConfirmPassword(false);
      if (password != confirmPassword) {
        setisBadConfirmPassword(true);
        setisBadPassword(true);
      } else {
        setisBadConfirmPassword(false);
        setisBadPassword(false);

        RegisterUser();
      }
    }
  };
  const RegisterUser = async () => {
    try {
      if (
        !isBadName &&
        !isBadPassword &&
        !isBadConfirmPassword &&
        !isBadMobile &&
        !isBadEmail
      ) {
        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('MOBile', Mobile);
        await AsyncStorage.setItem('PASSWORD', password);
        await AsyncStorage.setItem('CPASSWORD', confirmPassword);
        ToastAndroid.show('Success', 2000);
        navigation.dispatch(StackActions.replace('Login'));
      } else {
        ToastAndroid.show('Failed - Please fill all details', 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <StatusBar hidden={true} />
      <View style={styles.Container}>
        <Image source={require('../assets/img/Pak.png')} style={styles.Image} />
        <Text
          style={{
            alignSelf: 'center',
            color: 'black',
            fontSize: responsiveFontSize(2.8),
            fontWeight: 'bold',
            marginTop: responsiveHeight(3),
          }}>
          Signup an account
        </Text>

        <TextInputField
          icon={require('../assets/icons/user.png')}
          placeholder={'Enter Your Name'}
          value={name}
          OnChangeText={setName}
        />
        {isBadName ? (
          <Text
            style={{
              color: 'red',
              paddingLeft: responsiveWidth(7),
              paddingTop: responsiveHeight(1),
            }}>
            Please Enter Your Name *
          </Text>
        ) : null}

        <TextInputField
          icon={require('../assets/icons/email.png')}
          placeholder={'Enter Your Email'}
          value={email}
          OnChangeText={setemail}
        />
        {isBadEmail ? (
          <Text
            style={{
              color: 'red',
              paddingLeft: responsiveWidth(7),
              paddingTop: responsiveHeight(1),
            }}>
            Please Enter Email*
          </Text>
        ) : null}

        <TextInputField
          icon={require('../assets/icons/Mobile.png')}
          placeholder={'Enter Your Phone'}
          value={Mobile}
          OnChangeText={setMobile}
          keyboardtype={'number-pad'}
        />
        {isBadMobile ? (
          <Text
            style={{
              color: 'red',
              paddingLeft: responsiveWidth(7),
              paddingTop: responsiveHeight(1),
            }}>
            Please Enter Correct Mobile Number*
          </Text>
        ) : null}

        <TextInputField
          icon={require('../assets/icons/password.png')}
          placeholder={'Enter Your password'}
          value={password}
          OnChangeText={setpassword}
        />
        {isBadPassword ? (
          <Text
            style={{
              color: 'red',
              paddingLeft: responsiveWidth(7),
              paddingTop: responsiveHeight(1),
            }}>
            Please enter password or Password are not same*
          </Text>
        ) : null}

        <TextInputField
          icon={require('../assets/icons/password.png')}
          placeholder={'Enter Your password'}
          value={confirmPassword}
          OnChangeText={setconfirmPassword}
        />
        {isBadConfirmPassword ? (
          <Text
            style={{
              color: 'red',
              paddingLeft: responsiveWidth(7),
              paddingTop: responsiveHeight(1),
            }}>
            Please enter confirm password or Password are not same*
          </Text>
        ) : null}

        <View style={{marginVertical: responsiveHeight(2)}}></View>
        <CommonButton
          title={'Sign up'}
          bgColor={'black'}
          textcolor={'white'}
          onpress={() => {
            ValidateUser();
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          marginVertical: responsiveHeight(2),
        }}>
        Or
      </Text>

      <Text
        style={{
          fontSize: responsiveFontSize(2.4),
          fontWeight: 'bold',
          alignSelf: 'center',
          marginBottom: responsiveHeight(8),
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already have an account
      </Text>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Image: {
    height: responsiveWidth(22),
    width: responsiveWidth(22),
    borderRadius: responsiveWidth(15),
    alignSelf: 'center',
    marginTop: responsiveWidth(10),
  },
});
