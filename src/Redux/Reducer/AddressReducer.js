const { Add_Address, Remove_Address } = require('../ActionTypes');

const initialState = [];

const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Address:
      return [...state, action.payload];
      break;
    case Remove_Address:
      const deletedarray = state.filter((ls, index) => {
        return index !== action.payload;
      });
      return deletedarray;
    default:
      return state;
  }
};

export default AddressReducer;
