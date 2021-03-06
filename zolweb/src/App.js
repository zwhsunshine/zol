import React,{Component} from 'react';
import {withRouter,Switch} from 'react-router-dom';	//路由
import routes from './router/index';
import {connect} from 'react-redux';	//connect：数据store和操作事件action绑定到需要使用的组件上
import {bindActionCreators} from 'redux';	//bindActionCreators是redux的一个API，作用是将单个或多个ActionCreator转化为dispatch(action)的函数集合形式。开发者不用再手动dispatch(actionCreator(type))，而是可以直接调用方法。
import * as actioncreators from './actioncreators/index';

import './static/web/js/resize';
import './static/web/css/reset.css';
import './static/web/css/header.less';
import './static/web/css/footer.css';

import { WebHeader, PerHeader, ProHeader, SeaHeader, DetHeader, WebFooter, PerFooter, ProFooter, CartFooter, ManFooter, OrdFooter } from './components/web';
import { AdminHeader, Side } from './components/admin';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			users:[],
			islocad:false,
			personal:'我的',
			manage:'账户管理',
			password:'修改密码',
			address:'收货地址',
			addressDetail:'新建收货人',
			orderList:'我的订单',
			order:'确认订单',
			pay:'支付',
			paySuccess:'支付成功',
			collection:'我的收藏'
		}
	}


	//当组件输出到 DOM 后会执行 componentDidMount()
	componentDidMount(){
	    // fetch('http://localhost:88/user?act=search&name=aa')
	    // .then(e=>e.json())
	    // .then(data=>{
	    // 	console.log(data);
	    // })
	}
	render(){
		
		let {location:{pathname}} = this.props,
			header = null,
			footer = null,
			side = null;
		if( pathname==='/' || pathname==='/category' ){
			header = <WebHeader />
		}
		if( pathname==='/personal' || pathname==='/manage' || pathname==='/password' || pathname==='/address' || pathname==='/addressDetail' || pathname==='/orderList' || pathname==='/order' || pathname==='/pay' || pathname==='/paySuccess' || pathname==='/collection' ){
			header = <PerHeader title={this.state[pathname.substring(1)]} />
		}
		if( pathname==='/cart' || pathname==='/login' || pathname==='/register' ){
			header = <ProHeader />
		}
		if( pathname==='/product' ){
			header = <SeaHeader />
		}
		if( pathname==='/proDetail' ){
			header = <DetHeader />
		}

		if( pathname==='/' || pathname==='/category' || pathname==='/personal' || pathname==='/paySuccess' ){
			footer = <WebFooter pathN = {pathname} />
		}
		if( pathname==='/manage' || pathname==='/password' || pathname==='/address' || pathname==='/addressDetail' || pathname==='/pay' ){
			footer = <ManFooter />
		}
		if( pathname==='/cart' ){
			footer = <CartFooter />
		}
		if( pathname==='/order' ){
			footer = <OrdFooter />
		}
		if( pathname.includes('/admin') ){
			header = <AdminHeader />
			side = <Side />
		}
		return (
			<div id="app">
				{/*<button onClick={this.porps.add} >{this.obj.num}</button>*/}
				{header}
				{side}
				<Switch>
					{routes}
				</Switch>
				{footer}
			</div>
		)
	}
}


// 如果使用了connect，路由跳转会失效，此时，使用withRouter解决。
export default withRouter(App);

// export default withRouter(connect(
// 	(state)=>{ return {obj:state.r1} },
// 	(dispatch)=>bindActionCreators(actioncreators,dispatch)
// )(App));

/*
	1. connect：数据store和操作事件action绑定到需要使用的组件上
	    1. connect第一个参数：mapStateToProps(state, ownProps) 
	        允许我们将store中的数据作为props绑定到组件中，只要store更新了就会调用mapStateToProps方法，mapStateToProps返回的结果必须是object对象，该对象中的值将会更新到组件中
	    2. connect第二个参数：mapDispatchToProps(dispatch, [ownProps]) 
	        允许我们将action作为props绑定到组件中，如果不传这个参数redux会把dispatch作为属性注入给组件，可以手动当做store.dispatch使用，mapDispatchToProps希望你返回包含对应action的object对象

	2. action、store、reducer关系
		1. 当view需要发起某个行为的时候，需要去触发action，即store.dispatch(add())
		2. 当store收到action后，就会进行运算返回一个新的state，这个过程就是reducer
		3. 而reducer方法是由store.dispatch方法触发来自动执行的，为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法
		4. reducer函数，接收state和action两个参数，不能直接改变state，需要返回一个全新的对象
		5. state更新，触发view发生改变，数据store和操作事件action绑定到需要使用的组件上，就需要用到connect函数


	3. Route 中exact、strict的用法
		path		location		显示情况
		one			one下的two		能显示one
		one exact	one下的two		只能显示two，不能显示one

		在path为/detail/  没有加strict那么 url为/detail能够匹配

            加了strict的时候，能匹配
                1./detail/
                2./detail/xxx

    4. 重定向
    	<Redirect to="/home"/>
    	
*/
