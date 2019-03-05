import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/admin/css/home.less';

class Shome extends Component{
	render(){
		return (
			<div className="ovh main">
				<ul className="ovh survey">
					<li><p>2</p>待发货订单</li>
					<li><p>0</p>维权订单</li>
					<li><p>66</p>昨日订单</li>
					<li><p>¥6688.88</p>昨日交易额</li>
				</ul>
				<h5 className="main-tit">常用功能</h5>
				<div className="ovh">
					<ul className="ovh common">
						<li><Link to="/admin/types">商品分类</Link></li>
						<li><Link to="/admin/product">商品列表</Link></li>
						<li><a href="javascript:;">全部订单</a></li>
						<li><a href="javascript:;">待发货</a></li>
						<li><a href="javascript:;">会员信息</a></li>
						<li><a href="javascript:;">收货地址</a></li>
					</ul>
				</div>
			</div>
		)
	}
}


export default Shome;