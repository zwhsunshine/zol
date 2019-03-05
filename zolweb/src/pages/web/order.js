import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/order/order.less';
import OrdPopup from '../../pages/web/ordPopup';

class Order extends Component{
	render(){
		return (
			<div>
				<a href="address.html" class="ovh order-address">
					{/*
						//没有收货地址的情况
						<h6>请填写收货地址</h6>
					*/}
					<h6>郑文会<span>152****0130</span></h6>
					<p><span>默认</span>北京昌平区沙河镇松兰堡</p>
				</a>
				<section class="ovh cart">
					<div class="ovh cart-con">
						<h4>vivo旗舰店<span></span></h4>
						<ul class="ovh">
							<li>
								<i class="cart-sel"></i>
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<div class="ovh cart-info">
									<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
									<p>黑色官方标配</p>
									<div class="ovh pop-num">
										<p>¥299</p>
										<div class="ovh">
											<a>-</a>
											<input type="text" value="1" readonly />
											<a>+</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<i class="cart-sel cart-active"></i>
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<div class="ovh cart-info">
									<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
									<p>黑色官方标配</p>
									<div class="ovh pop-num">
										<p>¥299</p>
										<div class="ovh">
											<a>-</a>
											<input type="text" value="1" readonly />
											<a>+</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<div class="ovh order-pay">
					<ul class="ovh">
						<li class="ovh">
							<h6>支付方式</h6>
							<div>
								<p class="cart-sel cart-active">在线支付</p>
								<p class="cart-sel">货到付款</p>
							</div>
						</li>
						<li class="ovh">
							<h6>配送方式</h6>
							<div>
								<p class="cart-sel cart-active">送货上门</p>
								<p class="cart-sel">上门自提</p>
							</div>
						</li>
						<li class="ovh">
							<h6>发票信息</h6>
							<div>
								<p class="order-inv">不开发票</p>
							</div>
						</li>
					</ul>
				</div>

				{/*<OrdPopup />*/}

			</div>
		)
	}
}


export default Order;