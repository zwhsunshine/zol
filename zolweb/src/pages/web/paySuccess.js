import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/order/paySuccess.less';

class PaySuccess extends Component{
	render(){
		return (
			<div className="ovh pay-suc">
				<svg className="icon" aria-hidden="true">
					<use xlinkHref="#icon-duigou"></use>
				</svg>
				<p>支付成功</p>
				<div className="pay-scon">
					<a href="#">再逛逛</a>
					<a href="orderlist.html">查看订单</a>
				</div>
			</div>
		)
	}
}


export default PaySuccess;