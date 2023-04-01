import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


const CartItems = ({item,onRemoveItem,onRemoveFromWishlist,isWishlist}) => {
  return (
    <View style={styles.cardContaienr}>
     

    

      <Image source={item.img} style={styles.CardImg} resizeMode={'cover'}/>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',
    alignItems:'center',paddingHorizontal:responsiveWidth(3),paddingTop:responsiveHeight(3)}}>
     <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>Rs {item.price}</Text>
    {isWishlist ?  <TouchableOpacity style={{borderWidth:1,paddingHorizontal:responsiveWidth(2),paddingVertical:responsiveWidth(2),borderRadius:responsiveWidth(1)}} onPress={()=>{
onRemoveItem()
     }}>
        <Text style={{color:'black'}}>Add To Cart</Text>
     </TouchableOpacity> :  <TouchableOpacity style={{borderWidth:1,paddingHorizontal:responsiveWidth(2),paddingVertical:responsiveWidth(2),borderRadius:responsiveWidth(1)}} onPress={()=>{
onRemoveItem()
     }}>
        <Text style={{color:'black'}}>Remove Item</Text>
     </TouchableOpacity>}
     
      </View>
     { isWishlist ? ( <TouchableOpacity style={styles.AddCartIcon} onPress={()=>{
        onRemoveFromWishlist()
      }}>
        <Image source={require('../assets/icons/heart_Filled.png')} style={{height:responsiveWidth(7),width:responsiveWidth(7),tintColor:'red'}}/>
      </TouchableOpacity>) : (<TouchableOpacity style={styles.AddCartIcon} onPress={()=>{
        onRemoveFromWishlist()
      }}>
        <Image source={require('../assets/icons/heart.png')} style={{height:responsiveWidth(7),width:responsiveWidth(7),tintColor:'red'}}/>
      </TouchableOpacity>)
      }
    </View>
  )
}

export default CartItems

const styles = StyleSheet.create({
    cardContaienr:{
        backgroundColor:'white',
      
       width:responsiveWidth(100),
       height:'100%',
       marginRight:responsiveWidth(5),
       height:responsiveHeight(30),
       alignSelf:'center',
       marginBottom:responsiveHeight(2),
    //    borderRadius:responsiveWidth(2)
    elevation:10,
    borderRadius:responsiveWidth(4),
  
       

    },
    CardImg:{
        width:'100%',
        height:responsiveHeight(14),
        borderTopRightRadius:responsiveWidth(4),
        borderTopLeftRadius:responsiveWidth(4)
    },
    itemName:{
        fontSize:responsiveFontSize(1.9),
        fontWeight:'500',
        paddingHorizontal:responsiveWidth(2),
        paddingTop:responsiveHeight(1),
        color:'black'
        
    },
    AddCartIcon:{
        position:'absolute',
        top:10,
        right:10,
        backgroundColor:'white',
        padding:responsiveWidth(2),
        borderRadius:50,
        elevation:8,

   
    }
})