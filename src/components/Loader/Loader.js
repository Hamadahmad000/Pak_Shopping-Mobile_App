import {StyleSheet, Text, View,ActivityIndicator,StatusBar,Modal} from 'react-native';
import React,{useState} from 'react';
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
const Loader = ({isLoading}) => {
    
  return (
    <Modal
    animationType='fade'
    onRequestClose={()=>{}}
    transparent
    visible={isLoading}
    >

    <View style={styles.container}>
    <StatusBar hidden={true}/>
     <View style={styles.loadingBox}>
        <ActivityIndicator size={'large'} color={'#0d2329'}/>
     </View>
    </View>
   </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    justifyContent:'center',
    backgroundColor:'transparent'
  },
  loadingBox:{
    backgroundColor:'#15758f',
    height:responsiveWidth(20),
    width:responsiveWidth(30),
    borderRadius:responsiveWidth(2),
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#15758f',

    elevation:1,
  
  }
});
