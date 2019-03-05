import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProHeader extends Component{
	render(){
		return (
			<header className="pro-head">
				<a href="product.html" className="ovh return"></a>
				<div className="ovh head-con">购物车</div>
				{/*
					<a href="javascript:;" className="ovh head-more">···</a>
					<ul className="ovh head-list">
						<li><a href="index.html">首页</a></li>
						<li><a href="category.html">分类</a></li>
						<li><a href="cart.html">购物车</a></li>
						<li><a className="personal.html">我的</a></li>
					</ul>
				*/}
			</header>
		)
	}
}


export default ProHeader;