import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class OrdFooter extends Component{
	render(){
		return (
			<footer className="cart-footer order-footer">
				<div>
					<p>总计：<b>¥1799.00</b><span>(共6件)</span></p>
				</div>
				<Link to="/pay">提交结算</Link>
			</footer>
		)
	}
}


export default OrdFooter;