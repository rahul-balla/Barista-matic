import { combineReducers } from 'redux';
import inventoryReducer from './inventoryReducer';

const rootReducer = combineReducers({
	updateInventory: inventoryReducer,
});

export default rootReducer;
