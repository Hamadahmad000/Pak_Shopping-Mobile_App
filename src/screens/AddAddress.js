import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TextInputField from '../components/input/TextInputField'
import CommonButton from '../components/button/CommonButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addAddress } from '../Redux/Action/Action'

const AddAddress = () => {
    const navigation = useNavigation()
    const [Address, setAddress] = useState('')
    const [cityName, setcityName] = useState('')
    const [postCode, setpostCode] = useState('')
    const dispatch = useDispatch()
  return (
    <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>{
            navigation.goBack()
        }}>
        <Image source={require('../assets/icons/left-arrow.png')} style={{height:responsiveWidth(7),width:responsiveWidth(7),margin:responsiveWidth(5)}}/>
        </TouchableOpacity>
        <View>
        <TextInputField
          icon={require('../assets/icons/location.png')}
          placeholder={'Your Address'}
          value={Address}
          OnChangeText={setAddress}
        />
        <TextInputField
          icon={require('../assets/icons/city.png')}
          placeholder={'City Name'}
          value={cityName}
          OnChangeText={setcityName}
        />
        <TextInputField
          icon={require('../assets/icons/postcode.png')}
          placeholder={'Postal Code'}
          value={postCode}
          OnChangeText={setpostCode}
        />
        <View style={{marginVertical:responsiveHeight(4)}}>
        <CommonButton title={'Save Address'} bgColor={'black'}textcolor={'white'} onpress={()=>{
            if(Address !== '' && cityName !== '' && postCode !== ''){
                dispatch(addAddress({Address:Address,City:cityName,postcode:postCode}))
                navigation.goBack()
            }
        }}/>
        </View>
        </View>
      </View>
  
  )
}

export default AddAddress

const styles = StyleSheet.create({
    Header:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:responsiveHeight(10),
        alignItems:'center',
        marginHorizontal:responsiveWidth(3)
       },
       HeaderSetting:{
         fontSize:responsiveFontSize(2),
         paddingHorizontal:responsiveWidth(2),
         paddingVertical:responsiveWidth(1),
         borderWidth:.3,
         color:'black'
       },
       HeaderTitle:{
         fontSize:responsiveFontSize(2.4),
         fontWeight:'500',
         color:'black'
       },
})