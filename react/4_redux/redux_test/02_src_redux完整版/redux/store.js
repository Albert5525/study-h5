/*
* 改文件专门用于暴露store对象，整个应用只有一个store对象
* */

//专门用于创建redux中最为核心的store对象
import {legacy_createStore as createStore} from 'redux';
import countReducer from './count_reducer';
const  store=createStore(countReducer);

export default store;