import { StyleSheet, Text, View,Alert,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import CommonButton from '../components/button/CommonButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions, useNavigation } from '@react-navigation/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const Setting = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.Container}>
         <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }} style={{position:'absolute',top:20,left:20,padding:responsiveWidth(.4),borderWidth:.3,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
        <Image
          source={require('../assets/icons/left-arrow.png')}
          style={{
            height: responsiveWidth(7),
            width: responsiveWidth(7),
            margin: responsiveWidth(2),
          }}
        />
      </TouchableOpacity>

      <CommonButton title={'Logout'} bgColor={'red'} textcolor={'white'} onpress={()=>{
         Alert.alert('Logout','Are you sure?',[
            {
                text:'Yes',
                onPress:async()=>{
                   await AsyncStorage.clear()
                   navigation.dispatch(StackActions.replace('Login'))
                }
            },
            {
                text:'No'
            },
         ])
      }}/>
     
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})