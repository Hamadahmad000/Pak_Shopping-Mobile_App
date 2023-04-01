import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes";

export const additemtocart = data => ({
    type:ADD_TO_CART,
    payload:data
})
export const removefromcart = index => ({
    type:REMOVE_FROM_CART,
    payload:index
})

export const addtowishlist = data => ({
    type:ADD_TO_WISHLIST,
    payload:data
})
export const removefromwishlist = index => ({
    type:REMOVE_FROM_WISHLIST,
    payload:index
})