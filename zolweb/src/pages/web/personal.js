import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect, bindActionCreators, actioncreators } from '../../store/reduxInfo';

import '../../static/web/css/personal.less';

class Personal extends Component{
	constructor(){
		super();
		this.state = {
			username:''
		}
	}
	componentWillMount(){
		this.props.getCookie('username')
	}
	render(){
		let { username } = this.props;
		return (
			<div>
				<div className="ovh personal">
					<Link to={ username ? "/manage" : '/login' }>
						<i className="ovh per-pic"><img src="https://icon.zol-img.com.cn/group/detail_images/zoler.jpg" /></i>
						<p>{ username ? username : '请登录' }</p>
					</Link>
					<Link to={ username ? "/manage" : '/login' }><i className="ovh per-manage">账号管理</i></Link>
				</div>
				<div className="ovh per-order">
					<h5>我的订单</h5>
					<ul>
						<li>
							<Link to={ username ? "/orderList" : '/login' }>
								<div className="ovh">
									<i><img src={require('../../static/web/images/menu3.png')} /></i>
									<p>待付款</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to={ username ? "/orderList" : '/login' }>
								<div className="ovh">
									<i><img src={require('../../static/web/images/menu3.png')} /></i>
									<p>待发货</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to={ username ? "/orderList" : '/login' }>
								<div className="ovh">
									<i><img src={require('../../static/web/images/menu3.png')} /></i>
									<p>待收货</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to={ username ? "/orderList" : '/login' }>
								<div className="ovh">
									<i><img src={require('../../static/web/images/menu3.png')} /></i>
									<p>待评价</p>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/orderList">
								<div className="ovh">
									<i><img src={require('../../static/web/images/menu3.png')} /></i>
									<p>全部订单</p>
								</div>
							</Link>
						</li>
					</ul>
				</div>
				<ul className="ovh per-list">
					<li><Link to={ username ? "/address" : '/login' }>退款/售后</Link></li>
					<li><Link to={ username ? "/address" : '/login' }>收货地址管理</Link></li>
					<li><Link to={ username ? "/collection" : '/login' }>我的收藏</Link></li>
					<li><a href="tel:12345678901">客服电话：400-688-1999</a></li>
				</ul>

			</div>
		)
	}
}

export default connect(
	(state)=>{ return {username:state.username}},
	(dispatch)=>bindActionCreators(actioncreators,dispatch)
)(Personal);