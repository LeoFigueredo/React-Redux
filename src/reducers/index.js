import { combineReducers } from 'redux';
import citasReducer from './citasReducer';
import validatorReducer from './validatorReducer'

export default combineReducers({
    citas: citasReducer, 
    error: validatorReducer
});