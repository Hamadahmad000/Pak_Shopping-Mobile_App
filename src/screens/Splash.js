import { Image, StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {StackActions, useNavigation} from '@react-navigation/native'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
     setTimeout(async() => {
        try {
         const IsLogin = await AsyncStorage.getItem('IsLogin')
         console.log(IsLogin);
         if(IsLogin === 'true'){
           navigation.dispatch(StackActions.replace('Home'))
          }else{
           navigation.dispatch(StackActions.replace('Login'))
         }
        } catch (error) {
          console.log(error);
        }
     }, 3000);
    }, [])
  return (
    <View style={styles.Container}>
       <StatusBar hidden={true}/>
      <Image source={require('../assets/img/Pak.png')} style={styles.SplashLogo}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  SplashLogo:{
    height:responsiveWidth(29),
    width:responsiveWidth(29),
    borderRadius:responsiveWidth(15)
  }
})