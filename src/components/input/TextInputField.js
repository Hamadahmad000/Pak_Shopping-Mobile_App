import { Image, StyleSheet, Text, View ,TextInput,Dimensions} from 'react-native'
import React from 'react'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
const TextInputField = ({type,OnChangeText,value,icon,placeholder,keyboardtype}) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={icon} style={styles.InputIcon}/>
      <TextInput placeholder={placeholder} secureTextEntry={type?true:false} style={{flex:1,color:'black'}} value={value} onChangeText={(text)=>OnChangeText(text)} keyboardType={keyboardtype ? keyboardtype : 'default'}/>
    </View>
  )
}
const {height,width} = Dimensions.get('screen')
export default TextInputField

const styles = StyleSheet.create({
    inputContainer:{
        width:width - responsiveWidth(15),
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        borderWidth:0.4,
        paddingHorizontal:responsiveWidth(3),
        paddingVertical:responsiveHeight(1),
        borderRadius:responsiveWidth(1),
        marginTop:responsiveHeight(3)

    },
    InputIcon:{
        height:responsiveHeight(4),
        width:responsiveHeight(4),
        marginHorizontal:responsiveWidth(1)
    }
})