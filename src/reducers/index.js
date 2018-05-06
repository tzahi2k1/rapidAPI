import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { homeReducer } from './home.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    homeReducer,
    users,
    alert
});

export default rootReducer;