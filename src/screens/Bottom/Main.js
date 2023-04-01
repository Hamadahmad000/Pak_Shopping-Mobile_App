import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Products} from '../../api/Products';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ProductCards from '../../components/ProductCards';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TO_CART} from '../../Redux/ActionTypes';
import {additemtocart, addtowishlist} from '../../Redux/Action/Action';

const Main = () => {
  const [categories, setcategories] = useState([]);
  const [TshirtsList, setTshirtsList] = useState([]);
  const [TrouserList, setTrouserList] = useState([]);
  const [ShoesList, setShoesList] = useState([]);
  const [JacketList, setJacketList] = useState([]);
  const [SlipperList, setSlipperList] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  console.log(data);
  useEffect(() => {
    let tempcategories = [];
    Products.Categories.map((list, ind) => {
      tempcategories.push(list);
    });
    setcategories(tempcategories);
    setTshirtsList(Products.Categories[0].data);
    setTrouserList(Products.Categories[1].data);
    setShoesList(Products.Categories[2].data);
    setSlipperList(Products.Categories[3].data);
    setJacketList(Products.Categories[4].data);
  }, []);

  return (
    <View style={{flex: 1, paddingBottom: responsiveHeight(15)}}>
      <ScrollView style={{flex: 1}}>
        <Header />
        <Image
          source={require('../../assets/img/Banner.png')}
          style={styles.BannerImage}
          resizeMode={'contain'}
        />
        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: responsiveWidth(3),
            paddingTop: responsiveHeight(2),
          }}>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, ind}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1.5,
                    padding: responsiveWidth(3),
                    marginHorizontal: responsiveWidth(4),
                    borderRadius: responsiveWidth(9),
                  }}>
                  <Text
                    style={{fontSize: responsiveFontSize(1.7), color: 'black'}}>
                    {item.Categories}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(2.4),
            color: 'black',
            fontWeight: '500',
            padding: responsiveWidth(4),
            paddingLeft: responsiveWidth(5),
            paddingTop: responsiveHeight(4),
          }}>
          New T-Shirts
        </Text>
        <View style={{paddingHorizontal: responsiveWidth(3)}}>
          <FlatList
            data={TshirtsList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, ind}) => {
              return (
                <ProductCards
                  item={item}
                  onAddtoCart={x => {
                    dispatch(additemtocart(x));
                  }}
                  onAddWishlist={x => {
                    dispatch(addtowishlist(x))
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            fontSize: responsiveFontSize(2.4),
            color: 'black',
            fontWeight: '500',
            padding: responsiveWidth(4),
            paddingLeft: responsiveWidth(5),
            paddingTop: responsiveHeight(4),
          }}>
          New Trousers
        </Text>
        <View style={{paddingHorizontal: responsiveWidth(3)}}>
          <FlatList
            data={TrouserList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, ind}) => {
              return (
                <ProductCards
                  item={item}
                  onAddtoCart={x => {
                    dispatch(additemtocart(x));
                  }}
                  onAddWishlist={x => {
                    dispatch(addtowishlist(x))
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            fontSize: responsiveFontSize(2.4),
            color: 'black',
            fontWeight: '500',
            padding: responsiveWidth(4),
            paddingLeft: responsiveWidth(5),
            paddingTop: responsiveHeight(4),
          }}>
          New Shoes Designs
        </Text>
        <View style={{paddingHorizontal: responsiveWidth(3)}}>
          <FlatList
            data={ShoesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, ind}) => {
              return (
                <ProductCards
                  item={item}
                  onAddtoCart={x => {
                    dispatch(additemtocart(x));
                  }}
                  onAddWishlist={x => {
                    dispatch(addtowishlist(x))
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            fontSize: responsiveFontSize(2.4),
            color: 'black',
            fontWeight: '500',
            padding: responsiveWidth(4),
            paddingLeft: responsiveWidth(5),
            paddingTop: responsiveHeight(4),
          }}>
          New Slippers
        </Text>
        <View style={{paddingHorizontal: responsiveWidth(3)}}>
          <FlatList
            data={SlipperList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, ind}) => {
              return (
                <ProductCards
                  item={item}
                  onAddtoCart={x => {
                    dispatch(additemtocart(x));
                  }}
                  onAddWishlist={x => {
                    dispatch(addtowishlist(x))
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            fontSize: responsiveFontSize(2.4),
            color: 'black',
            fontWeight: '500',
            padding: responsiveWidth(4),
            paddingLeft: responsiveWidth(5),
            paddingTop: responsiveHeight(4),
          }}>
          New Jackets
        </Text>
        <View style={{paddingHorizontal: responsiveWidth(3)}}>
          <FlatList
            data={JacketList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, ind}) => {
              return (
                <ProductCards
                  item={item}
                  onAddtoCart={x => {
                    dispatch(additemtocart(x));
                  }}
                  onAddWishlist={x => {
                    dispatch(addtowishlist(x))
                  }}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  BannerImage: {
    height: responsiveHeight(29),
    width: '97%',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
});
