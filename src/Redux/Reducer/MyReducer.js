const {ADD_TO_CART, REMOVE_FROM_CART} = require('../ActionTypes');

const initialState = [];

const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
      break;
    case REMOVE_FROM_CART:
      const deletedarray = state.filter((ls, index) => {
        return index !== action.payload;
      });
      return deletedarray;
    default:
      return state;
  }
};


export default MyReducer