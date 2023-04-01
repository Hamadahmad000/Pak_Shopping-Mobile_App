import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


const ProductCards = ({item,onAddtoCart,onAddWishlist}) => {
  return (
    <View style={styles.cardContaienr}>
     

    

      <Image source={item.img} style={styles.CardImg} resizeMode={'cover'}/>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',
    alignItems:'center',paddingHorizontal:responsiveWidth(3),paddingTop:responsiveHeight(3)}}>
     <Text style={{fontSize:responsiveFontSize(2),color:'black'}}>Rs {item.price}</Text>
     <TouchableOpacity style={{borderWidth:1,paddingHorizontal:responsiveWidth(2),paddingVertical:responsiveWidth(2),borderRadius:responsiveWidth(1)}} onPress={()=>{
onAddtoCart(item)
     }}>
        <Text style={{color:'black'}}>Add to cart</Text>
     </TouchableOpacity>
     
      </View>
      <TouchableOpacity style={styles.AddCartIcon} onPress={()=>{
        onAddWishlist(item)
      }}>
        <Image source={require('../assets/icons/heart.png')} style={{height:responsiveWidth(7),width:responsiveWidth(7)}}/>
      </TouchableOpacity>
    </View>
  )
}

export default ProductCards

const styles = StyleSheet.create({
    cardContaienr:{
        backgroundColor:'white',
        borderWidth:.2,
       width:responsiveWidth(50),
       height:'100%',
       marginRight:responsiveWidth(5),
       height:responsiveHeight(30),
    //    borderRadius:responsiveWidth(2)
    elevation:10
       

    },
    CardImg:{
        width:'100%',
        height:responsiveHeight(14)
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