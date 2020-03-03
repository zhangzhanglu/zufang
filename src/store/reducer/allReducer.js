//合并reducer 导出到index.js中
import {combineReducers} from 'redux';
//引入city
import city from './city.js';
import user from './user.js';
import sc from './sc.js';

//合并reducer
const allReducer = combineReducers({
    city,
    user,
    sc
})

//导出allReducer
export default allReducer;