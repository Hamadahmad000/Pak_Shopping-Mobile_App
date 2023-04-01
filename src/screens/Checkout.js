import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StackActions, useNavigation} from '@react-navigation/native';
import {removefromcart} from '../Redux/Action/Action';
import CommonButton from '../components/button/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Checkout = () => {
  const data = useSelector(state => state.MyReducer);
  const addresslist = useSelector(state => state.AddressReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [SelectedAddress, setSelectedAddress] = useState({})

  const getTotal = ()=>{
      
      let tempprice = 0
      data.map((ls,index)=>{
          return tempprice = tempprice + ls.price
        })
        return tempprice
}


  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/icons/left-arrow.png')}
          style={{
            height: responsiveWidth(7),
            width: responsiveWidth(7),
            margin: responsiveWidth(5),
          }}
        />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#010024',
                marginVertical: responsiveHeight(1),
                marginHorizontal: responsiveWidth(2),
                padding: responsiveWidth(2),
                borderRadius: responsiveWidth(2),
              }}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  height: responsiveHeight(10),
                  width: responsiveHeight(10),
                  marginHorizontal: responsiveWidth(2),
                }}
              />
              <View style={{paddingVertical: responsiveHeight(2)}}>
                <Text style={{fontSize: responsiveFontSize(2), color: 'white'}}>
                  {item.name}
                </Text>
                <Text style={{color: 'white', fontSize: responsiveFontSize(2)}}>
                  {item.price}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 30,
                  bottom: 0,
                  top: 0,
                }}
                onPress={() => {
                  dispatch(removefromcart(index));
                }}>
                <Image
                  source={require('../assets/icons/delete.png')}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveHeight(4),
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />


<FlatList
          data={addresslist}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  padding: responsiveWidth(4),
                  backgroundColor: '#010024',
                  margin: responsiveWidth(2),
                  borderRadius: responsiveWidth(2),
                  paddingVertical:responsiveHeight(3)
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical:responsiveHeight(1)
                  }}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      color: 'white',
                      fontWeight: '500',
                    }}>
                    Full Addresss :
                  </Text>
                  <Text
                    style={{fontSize: responsiveFontSize(1.8), color: 'white'}}>
                    {item.Address}
                  </Text>
                </View>
                
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical:responsiveHeight(1)
                  }}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      color: 'white',
                      fontWeight: '500',
                    }}>
                    City :
                  </Text>
                  <Text
                    style={{fontSize: responsiveFontSize(1.8), color: 'white'}}>
                    {item.City}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical:responsiveHeight(1)
                  }}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      color: 'white',
                      fontWeight: '500',
                    }}>
                    PostalCode :
                  </Text>
                  <Text
                    style={{fontSize: responsiveFontSize(1.8), color: 'white'}}>
                    {item.postcode}
                  </Text>
                </View>
               <View style={{marginTop:responsiveHeight(2)}}>
               <CommonButton title={'Select Address'} bgColor={'green'} textcolor={'white'} onpress={()=>{
                setSelectedAddress({Address:item.Address,City:item.City})
               }}/>
               </View>
              </View>
            );
          }}
        />
        <Text style={{marginHorizontal:responsiveWidth(3),fontSize:responsiveFontSize(2),fontWeight:'bold',color:'black',marginVertical:responsiveHeight(2)}}>Selected Address :</Text>
       {
        SelectedAddress.length == 0  ? ( <Text style={{marginHorizontal:responsiveWidth(3),fontSize:responsiveFontSize(2),color:'black',marginVertical:responsiveHeight(0)}}>Please Select Address</Text>)
        :
         ( <Text style={{marginHorizontal:responsiveWidth(3),fontSize:responsiveFontSize(2),fontWeight:'bold',color:'black',marginVertical:responsiveHeight(0)}}>{SelectedAddress.Address}</Text>)
       }

     
    <View style={{paddingHorizontal:responsiveWidth(5),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <Text style={{fontSize:responsiveFontSize(3),color:'black',fontWeight:'bold'}}>Total :</Text>
    <Text style={{fontSize:responsiveFontSize(3),color:'black'}}>Rs : {getTotal()}</Text>
    </View>

    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
