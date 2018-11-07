import orders from './orderReducer';
import items from './availableItemsReducer';
import auth from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    orders: orders,
    items: items,
    auth: auth
});

export default rootReducer;
