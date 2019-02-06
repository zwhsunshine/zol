
import {createStore,combineReducers} from 'redux';
import reducer from './reducer';
// import reducer2 from './reducer2';

// combineReducers 用于 Reducer 的拆分，将多个reducer函数，合成一个大的reducer
let reducers = combineReducers({r1:reducer});

// 创建store
let store = createStore(reducers);

export {store};
