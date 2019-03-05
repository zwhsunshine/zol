import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/order/pay.less';

class Pay extends Component{
	render(){
		return (
			<div>
				<p className="ovh pay-tit">需支付：<span>¥1799.00</span></p>
				<ul className="ovh pay-list">
					<li>
						<p>
							<svg className="icon" aria-hidden="true">
				  				<use xlinkHref="#icon-zhifupingtai-zhifubao"></use>
							</svg>
							微信支付
						</p>
						<i className="cart-sel cart-active"></i>
					</li>
					<li>
						<p>
							<svg className="icon" aria-hidden="true">
				  				<use xlinkHref="#icon-zhifupingtai-weixin"></use>
							</svg>
							支付宝支付
						</p>
						<i className="cart-sel"></i>
					</li>
				</ul>
			</div>
		)
	}
}

export default Pay;