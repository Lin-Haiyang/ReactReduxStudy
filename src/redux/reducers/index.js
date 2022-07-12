import { combineReducers } from "redux";

import count from './count';
import persons from './persons';

export default combineReducers({
    count,
    persons
})