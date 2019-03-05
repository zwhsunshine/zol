import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProFooter extends Component{
	render(){
		return (
			<footer class="pro-footer">
				<ul>
					<li class="active"><a href="index.html">联系商家</a></li>
					<li><a href="category.html"></a></li>
					<li><a href="cart.html">加入购物车</a></li>
					<li><a href="personal.html">立即购买</a></li>
				</ul>
			</footer>
		)
	}
}


export default ProFooter;