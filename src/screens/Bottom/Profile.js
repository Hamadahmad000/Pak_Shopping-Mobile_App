import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
  let name
  const navigation = useNavigation()
  useEffect(() => {
  getAsyncData()
  }, [])
  const getAsyncData = async()=>{
try {
  name = await AsyncStorage.getItem('NAME')
  console.log(name);
} catch (error) {
  console.log(error);
  
}
  }
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>
          Profile
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
          <Image source={require('../../assets/icons/setting.png')} style={styles.HeaderSetting}/>
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/icons/user_filled.png')} style={styles.ProfileIcons}/>
      <Text style={{alignSelf:'center'}}>{name}</Text>
      <TouchableOpacity style={styles.options} onPress={()=>{navigation.navigate('MyAddress')}}>
        <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>Offers</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Header:{
   flexDirection:'row',
   justifyContent:'space-between',
   height:responsiveHeight(10),
   alignItems:'center',
   marginHorizontal:responsiveWidth(3)
  },
  HeaderSetting:{
    height:responsiveWidth(7),
    width:responsiveWidth(7)
  },
  HeaderTitle:{
    fontSize:responsiveFontSize(2.4),
    fontWeight:'500',
    color:'black'
  },
  ProfileIcons:{
    height:responsiveWidth(20),
    width:responsiveWidth(20),
    alignSelf:'center',
    marginVertical:responsiveHeight(2)
  }
  ,

  options:{
    borderBottomWidth:.3,
    marginVertical:responsiveHeight(2),
    paddingVertical:responsiveHeight(1.4),
    marginHorizontal:responsiveWidth(4)
  }
})