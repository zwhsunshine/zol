import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class DetHeader extends Component{
	render(){
		return (
			<header className="pro-head">
				<a href="product.html" className="ovh return"></a>
				<div className="ovh head-con head-menu">
					<a href="javascript:;" className="active">商品</a>
					<a href="javascript:;">评价</a>
					<a href="javascript:;">详情</a>
					<a href="javascript:;">推荐</a>
				</div>
				<a href="javascript:;" className="ovh head-more">···</a>
			</header>
		)
	}
}


export default DetHeader;