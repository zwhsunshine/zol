import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class OrdPopup extends Component{
	render(){
		return (
			<div class="ovh popup">

				{/*弹窗选择*/}
				<div class="ovh pop-con">
					<div class="ovh pop-ser">
						<div class="ovh pop-main">
							<h5 class="ovh pop-stitle">发票信息</h5>
							<div class="ovh pop-center">
								<p class="ovh pop-inv">发票抬头</p>
								<div class="ovh pop-isel">
									<a class="pop-iact">个人</a>
									<a>公司</a>
								</div>
								<input type="text" placeholder="请填写单位名称" class="ovh pop-itxt" />
								<p class="ovh pop-tips">注：目前只提供普通纸质发票</p>
							</div>
						</div>
						<div class="ovh pop-btn">
							<a href="javascript:;">保存发票信息</a>
						</div>
					</div>
					<a href="javascript:;" class="ovh pop-close">×</a>
				</div>
				
				{/*
					//确认订单->返回
					<div class="ovh pop-success">
						<p>便宜不等人</p>
						<div class="ovh">
							<a href="javascript:;">我再想想</a>
							<a href="cart.html">确认离开</a>
						</div>
					</div>

					//支付->返回
					<div class="ovh pop-success pop-order">
						<h6>确认要取消支付</h6>
						<p>您的订单在23小时59分钟内未支付将被取消,请尽快完成支付。</p>
						<div class="ovh">
							<a href="javascript:;">继续支付</a>
							<a href="order.html">确认离开</a>
						</div>
					</div>
				*/}

			</div>
		)
	}
}


export default OrdPopup;





