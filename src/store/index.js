import {createStore,compose} from 'redux';
//引入合并的allReducer
import allReducer from './reducer/allReducer.js';
let store = createStore(allReducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :undefined));

//导出 供所有组件使用
export default store;