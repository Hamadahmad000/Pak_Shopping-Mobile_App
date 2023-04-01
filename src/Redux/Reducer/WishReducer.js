const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require('../ActionTypes');

const initialState = [];

const WishReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
      break;
    case REMOVE_FROM_WISHLIST:
      const deletedarray = state.filter((ls, index) => {
        return index !== action.payload;
      });
      return deletedarray;
    default:
      return state;
  }
};


export default WishReducer