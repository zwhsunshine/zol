import {connect} from 'react-redux';	//connect：数据store和操作事件action绑定到需要使用的组件上
import {bindActionCreators} from 'redux';	//bindActionCreators是redux的一个API，作用是将单个或多个ActionCreator转化为dispatch(action)的函数集合形式。开发者不用再手动dispatch(actionCreator(type))，而是可以直接调用方法。
import * as actioncreators from '../actioncreators/index';

export {
    connect,
    bindActionCreators,
    actioncreators
}