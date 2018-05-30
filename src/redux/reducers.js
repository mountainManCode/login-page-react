import { combineReducers } from 'redux';
import loginReducer from './modules/login';

export default combineReducers({
    login: loginReducer,
});
