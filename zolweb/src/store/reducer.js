
import * as types from '../actioncreators/actionTypes';

let obj = {
	num:1
}

/*
    1. 发起action后，触发reducer中对应的函数，就会进行运算返回一个新的state，这个过程就是reducer
    2. reducer函数，接收state和action两个参数，不能直接改变state，需要返回一个全新的对象
*/
function reducer(state=obj,action){
	switch (action.type){
		case types.ADD:
			let addS = JSON.parse(JSON.stringify(state));
			++addS.num;
			return addS;
		default:
			return state;
	}
}

export default reducer;
