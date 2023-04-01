import { StyleSheet, Text, View ,Image,ToastAndroid,StatusBar} from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import TextInputField from '../components/input/TextInputField'
import CommonButton from '../components/button/CommonButton'
import { StackActions, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../components/Loader/Loader'
const Login = () => {
    const navigation = useNavigation()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // fields Checking 
    const [isBadEmail, setisBadEmail] = useState(false)
    const [isBadPassword, setisBadPassword] = useState(false)
    const [isUserCorrect, setisUserCorrect] = useState(true)
    const [isLoading, setisLoading] = useState(false)
    const ValidateUser = () =>{
        setisLoading(true)
        if(email == ''){
            setisBadEmail(true)
            setisLoading(false)
        }else{
            setisBadEmail(false)
            setisLoading(false)
        }
        if(password == ''){
            setisBadPassword(true)
            setisLoading(false)
        }else{
            setisBadPassword(false)
           
            LoginUserID()
        }
    }
    const LoginUserID = async()=>{
        try {
    const REMAIL = await AsyncStorage.getItem('EMAIL')
    const RPASSWORD = await AsyncStorage.getItem('PASSWORD')

    if(email === REMAIL && password === RPASSWORD){
    setisLoading(false)
        setisUserCorrect(true)
      
            await AsyncStorage.setItem('IsLogin','true')
            navigation.dispatch(StackActions.replace('Home'))
            ToastAndroid.show('Login Successful',2000)
       
    }else{
        ToastAndroid.show('Login Failed',2000)
        setisUserCorrect(false)
        setisLoading(false)

    }
} catch (error) {
    console.log(error);
    
}
    }
  return (
    <View style={styles.Container}>
        <StatusBar hidden={true}/>
 <Loader isLoading={isLoading}/>
    <Image source={require('../assets/img/Pak.png')}style={styles.Image}/>
        <Text style={{alignSelf:'center',color:'black',fontSize:responsiveFontSize(2.8),fontWeight:'bold',marginTop:responsiveHeight(3)}}>Login</Text>
    
  
         {!isUserCorrect ? (<Text style={{alignSelf:'center',marginTop:responsiveHeight(1),color:'red',fontSize:responsiveFontSize(1.8)}}>Invalid user details!</Text> ): null}
  
        <TextInputField icon={require('../assets/icons/email.png')} placeholder={'Enter Your Email'} value={email} OnChangeText={setemail}/>
        {isBadEmail ? (<Text style={{color:'red',paddingLeft:responsiveWidth(7),paddingTop:responsiveHeight(1)}}>Please Enter Email *</Text>) : null}
  
        <TextInputField icon={require('../assets/icons/password.png')} placeholder={'Enter Your password'} value={password} OnChangeText={setpassword}/>
        {isBadPassword ? (<Text style={{color:'red',paddingLeft:responsiveWidth(7),paddingTop:responsiveHeight(1)}}>Please enter password *</Text>) : null}
  
  
          <View style={{marginVertical:responsiveHeight(2)}}></View>
       <CommonButton title={'Login'} bgColor={'black'} textcolor={'white'} onpress={()=>{ValidateUser()}}/>
  
  
       <Text style={{fontWeight:'bold',alignSelf:'center',marginVertical:responsiveHeight(2)}}>Or</Text>
  
  
       <Text style={{fontSize:responsiveFontSize(2.4),fontWeight:'bold',alignSelf:'center'}} onPress={()=>{
  navigation.navigate('Signup')
       }}>Create an account</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    Image:{
        height:responsiveWidth(22),
        width:responsiveWidth(22),
        borderRadius:responsiveWidth(15),
        alignSelf:'center',
        marginTop:responsiveWidth(20)
    }
})