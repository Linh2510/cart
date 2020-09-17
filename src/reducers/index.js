import hobbyReducer from './Hobby'
import {combineReducers} from 'redux';
import userReducer from './user'
import addToCart from './cart';
 const rootReducer = combineReducers ({
     hobby : hobbyReducer,
     product : addToCart,
     user: userReducer
 })
 export default rootReducer;

