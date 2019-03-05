import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/order/orderList.less';

class OrderList extends Component{
	render(){
		return (
			<div>
				<section className="ovh order">
					<ul className="ord-menu">
						<li><a href="javascript:;">全部</a></li>
						<li className="ord-active"><a href="javascript:;">待付款</a></li>
						<li><a href="javascript:;">待发货</a></li>
						<li><a href="javascript:;">待收货</a></li>
					</ul>
				</section>
				<section className="ovh cart ord-main">
					{/*
						//这是没有订单时的效果
						<div className="ovh ord-con cart-none">
							<p>您暂时没有待收货订单</p>
						</div>
					*/}
					<div className="ovh cart-con">
						<h4>ZOL商城<span></span>
							<div>
								<i>已签收 | </i>
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-delete"></use>
								</svg>
							</div>
						</h4>
						<ul className="ovh">
							<li>
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<div className="ovh cart-info">
									<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
								</div>
								<p className="ovh ord-info"><span>共2件商品</span> 实付金额：<i>¥1799.00</i></p>
								<div className="ovh ord-btn">
									<a href="#">去评价</a>
									<a href="#" className="ord-bact">再次购买</a>{/*跳转至确认订单页面*/}
								</div>
							</li>
						</ul>
					</div>
					<div className="ovh cart-con cart-dfk">
						<h4>ZOL商城<span></span>
							<div>
								<i>待付款</i>
							</div>
						</h4>
						<ul className="ovh">
							<li>
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<p className="ovh ord-info"><span>共3件商品</span> 实付金额：<i>¥1799.00</i></p>
								<div className="ovh ord-btn">
									<p>支付剩余22时40分</p>
									<a href="#" className="ord-bact">去支付</a>{/*跳转至结算页面*/}
								</div>
							</li>
						</ul>
					</div>
					<div className="ovh cart-con">
						<h4>ZOL商城<span></span>
							<div>
								<i>已签收 | </i>
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-delete"></use>
								</svg>
							</div>
						</h4>
						<ul className="ovh">
							<li>
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
								<p className="ovh ord-info"><span>共3件商品</span> 实付金额：<i>¥1799.00</i></p>
								<div className="ovh ord-btn">
									<a href="#">去评价</a>
									<a href="#" className="ord-bact">在此购买</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		)
	}
}


export default OrderList;