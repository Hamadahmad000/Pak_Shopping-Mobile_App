import {createStore} from 'redux'
import rootReducer from '../Reducer/RootReducer'

const store = createStore(rootReducer)

export default store