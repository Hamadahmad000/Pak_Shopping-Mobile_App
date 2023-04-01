import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import CommonButton from '../components/button/CommonButton';
import { removeAddress } from '../Redux/Action/Action';

const MyAddress = () => {
  const navigation = useNavigation();
  const addresslist = useSelector(state => state.AddressReducer);
  const dispatch = useDispatch()
  console.log(addresslist);
  return (
    <View style={{flex: 1}}>
      <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text style={styles.HeaderSetting}>Add Address</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={addresslist}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  padding: responsiveWidth(4),
                  backgroundColor: '#010024',
                  margin: responsiveWidth(4),
                  borderRadius: responsiveWidth(5),
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
               <CommonButton title={'Delete Address'} bgColor={'red'} textcolor={'white'} onpress={()=>{
                dispatch(removeAddress(index))
               }}/>
               </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(10),
    alignItems: 'center',
    marginHorizontal: responsiveWidth(3),
  },
  HeaderSetting: {
    fontSize: responsiveFontSize(2),
    padding: responsiveWidth(2.2),
    borderWidth: 0.3,
    color: 'black',
    borderRadius: responsiveWidth(2),
  },
  HeaderTitle: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: '500',
    color: 'black',
  },
});
