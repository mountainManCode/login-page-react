import { combineReducers } from 'redux';
import loginReducer from './modules/login';

const rootReducer = combineReducers({
    login: loginReducer,
});
export default rootReducer;
