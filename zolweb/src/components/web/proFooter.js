import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ProFooter extends Component{
	render(){
		return (
			<footer class="pro-footer">
				<ul>
					<li class="active"><a>联系商家</a></li>
					<li><Link to="category"></Link></li>
					<li><Link to="cart">加入购物车</Link></li>
					<li><Link to="personal">立即购买</Link></li>
				</ul>
			</footer>
		)
	}
}


export default ProFooter;