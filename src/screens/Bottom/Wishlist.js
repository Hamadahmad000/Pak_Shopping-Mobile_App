import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartItems from '../../components/CartItems';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {removefromwishlist} from '../../Redux/Action/Action';
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

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <CartItems
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removefromwishlist(index));
              }}
              isWishlist={'HamadMirza'}
            />
          );
        }}
      />
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
