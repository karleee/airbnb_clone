import { combineReducers } from 'redux';

import session from './session_reducer';
import entities from './entities_reducer';
import ui from './ui_reducer';
import currentSpot from './current_spot_reducer';
import errors from './errors_reducer';

// Root reducer
const RootReducer = combineReducers({
	session,
	entities,
	ui,
	currentSpot,
	errors
});

export default RootReducer;
