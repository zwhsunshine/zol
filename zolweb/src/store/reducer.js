
import * as types from '../actioncreators/actionTypes';

let obj = {
	num:1,
	proTypes:[],		//商品分类
	products:[],	//所有商品
	onedata:{},		//一条数据
	username:''			//获取cookie值
}

/*
    1. 发起action后，触发reducer中对应的函数，就会进行运算返回一个新的state，这个过程就是reducer
    2. reducer函数，接收state和action两个参数，不能直接改变state，需要返回一个全新的对象
*/
function reducer(state=obj,action){
	switch (action.type){
		case types.GETTYPES:
			state.proTypes = action.ptypes;
			return JSON.parse(JSON.stringify(state));

		case types.GETPRODUCT:
			state.products = action.data;
			return JSON.parse(JSON.stringify(state));

		case types.GETCOOKIE:
			state.username = action.username;
			return JSON.parse(JSON.stringify(state));

		default:
			console.log('come on reducer default');
			return JSON.parse(JSON.stringify(state));
	}
}

export default reducer;
