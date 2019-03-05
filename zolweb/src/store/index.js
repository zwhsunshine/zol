
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';
// import adminReducer from './adminReducer';

// combineReducers 用于 Reducer 的拆分，将多个reducer函数，合成一个大的reducer
// let reducers = combineReducers({webr:reducer,adminr:adminReducer});

// 创建store
let store = createStore(reducer, applyMiddleware(reduxThunk));

export {store};
