import { ADD_TO_CART, ADD_TO_WISHLIST, Add_Address, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, Remove_Address } from "../ActionTypes";

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

export const addAddress = data => ({
    type:Add_Address,
    payload:data
})
export const removeAddress = index => ({
    type:Remove_Address,
    payload:index
})