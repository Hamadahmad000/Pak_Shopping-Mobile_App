import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Loader from '../components/Loader/Loader';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Main from './Bottom/Main';
import Search from './Bottom/Search';
import Wishlist from './Bottom/Wishlist';
import Cart from './Bottom/Cart';
import Profile from './Bottom/Profile';
import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state => state);
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}

      <View style={styles.BottomNavigation}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../assets/icons/home.png')}
            style={[
              styles.NavIcons,
              {tintColor: selectedTab == 0 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../assets/icons/search.png')}
            style={[
              styles.NavIcons,
              {tintColor: selectedTab == 1 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>

        <View
          style={[
            styles.NavCartIcon,
            {backgroundColor: selectedTab == 2 ? 'green' : 'black'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={require('../assets/icons/bag.png')}
              style={[styles.NavIcons, {tintColor: 'white'}]}
            />
            <View style={styles.ItemsNumberOfCart}>
              <Text style={styles.ItemsNumberOfCartText}>
                {data.MyReducer.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../assets/icons/heart.png')}
            style={[
              styles.NavIcons,
              {tintColor: selectedTab == 3 ? '#000' : '#8e8e8e'},
            ]}
          />
          <View style={styles.ItemsNumberOfCart}>
            <Text style={styles.ItemsNumberOfCartText}>
              {data.WishReducer.length}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={[
              styles.NavIcons,
              {tintColor: selectedTab == 4 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  BottomNavigation: {
    height: responsiveHeight(10),
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(2),
  },
  NavIcons: {
    height: responsiveWidth(7),
    width: responsiveWidth(7),
  },
  NavCartIcon: {
    borderRadius: 50,
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemsNumberOfCart: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    right: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemsNumberOfCartText: {
    color: 'white',
  },
});
