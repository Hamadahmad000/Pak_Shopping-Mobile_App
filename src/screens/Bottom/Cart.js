import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartItems from '../../components/CartItems';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {REMOVE_FROM_CART} from '../../Redux/ActionTypes';
import {addtowishlist, removefromcart} from '../../Redux/Action/Action';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import CommonButton from '../../components/button/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const data = useSelector(state => state.MyReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation()
  return (
    <View style={styles.constainer}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.4),
          fontWeight: 'bold',
          marginVertical: responsiveHeight(3),
        }}>
        CART ITEMS
      </Text>
{
  data.length > 0 ? (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        return (
          <CartItems
            item={item}
            onRemoveItem={() => {
              dispatch(removefromcart(index));
            }}
            onAddtoWishlist={x => {
              dispatch(addtowishlist(x));
            }}
          />
        );
      }}
    />):(
      <View>
        <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>
          No item in cart
        </Text>
      </View>
    )
}
{
  !data.length > 0 ? null : (
    <View style={{position:'absolute',bottom:responsiveHeight(12)}}>
      <CommonButton title={'Checkout'} bgColor={'green'} textcolor={'white'} onpress={()=>{
        navigation.navigate('Checkout')
      }}/>
    </View>
  )
}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
