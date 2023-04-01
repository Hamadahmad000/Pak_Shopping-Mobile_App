import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItems from '../../components/CartItems'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { REMOVE_FROM_CART } from '../../Redux/ActionTypes'
import { removefromcart } from '../../Redux/Action/Action'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const Cart = () => {
  const data = useSelector(state=>state.MyReducer)
  const dispatch = useDispatch()
  return (
    
    <View style={styles.constainer}>
    <Text style={{fontSize:responsiveFontSize(2.4),fontWeight:'bold',marginVertical:responsiveHeight(3)}}>CART ITEMS</Text>
  
  <FlatList data={data} renderItem={({item,index})=>{
    return  (<CartItems item={item} onRemoveItem={()=>{
      dispatch(removefromcart(index))
    }}/>)
   }}/>

    </View>
   
  )
}

export default Cart

const styles = StyleSheet.create({
  constainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
   
  }
})