import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:responsiveFontSize(2),color:'black',textTransform:'uppercase',fontWeight:'500'}}>
            Pak Shopping
        </Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>
            Mode
        </Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer:{
        height:responsiveHeight(10),
        backgroundColor:'white',
 flexDirection:'row',
 justifyContent:'space-between',
 paddingHorizontal:responsiveWidth(8)
    }
})