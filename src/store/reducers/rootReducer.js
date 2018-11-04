import orders from './orderReducer';
import items from './availableItemsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    orders: orders,
    items: items
});

export default rootReducer;
