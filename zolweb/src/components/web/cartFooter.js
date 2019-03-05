import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProFooter extends Component{
	render(){
		return (
			<footer className="cart-footer">
				<i className="cart-sel">全选</i>
				<div>
					<p>总计：<b>¥1799.00</b></p>
					<span>总额¥1999.00 立减¥0.00</span>
				</div>
				<a href="order">去结算<span>(6件)</span></a>
			</footer>
		)
	}
}


export default ProFooter;