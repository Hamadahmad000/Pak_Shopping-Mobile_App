import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartItems from '../../components/CartItems';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {additemtocart, removefromwishlist} from '../../Redux/Action/Action';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const Wishlist = () => {
  const data = useSelector(state => state.WishReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.constainer}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.4),
          fontWeight: 'bold',
          marginVertical: responsiveHeight(3),
        }}>
        WISHLISTS
      </Text>
{
  data.length > 0 ? (   <FlatList
    data={data}
    renderItem={({item, index}) => {
      return (
        <CartItems
          item={item}
          onRemoveFromWishlist={() => {
            dispatch(removefromwishlist(index));
          }}
          isWishlist={'HamadMirza'}
          onAddtoCart={x => {
            dispatch(additemtocart(x));
          }}
        />
      );
    }}
  />):(
    <View>
    <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>
      No item in Wishlist
    </Text>
  </View>
  )
}
   
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
