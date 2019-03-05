import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/popup.less'

class ProPopup extends Component{
	render(){
		return (
			<div className="ovh popup">
				{/*弹窗选择
				<div className="ovh pop-con">
					<!-- 服务说明
					<div className="ovh pop-ser">
						<div className="ovh pop-main">
							<h5 className="ovh pop-stitle">服务说明</h5>
							<div className="ovh pop-center">
								<ul className="ovh pop-service">
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
									<li>
										<h6><i>icon</i>先行赔付</h6>
										<p>若因该交易导致买家权益受损，且在买家直接要求卖家处理未果的情况下，买家有权在交易成功后向ZOL商城发起针对卖家的投诉，并提出赔付申请。</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="ovh pop-btn">
							<a href="javascript:;">知道了</a>
						</div>
					</div>
					
					<!-- 配置
					<div className="ovh pop-config">
						<div className="ovh pop-main">
							<div className="ovh pop-profile pop-prod">
								<div className="ovh pop-pimg"><img src="https://mercrt-fd.zol-img.com.cn/t_s600x600/g5/M00/01/03/ChMkJlq2AOuIZolSAAWYzNjLjkYAAm_ZgBnDSkABZjk978.png" /></div>
								<div className="ovh pop-pinfo">
									<h6>¥1298</h6>
									<p>库存：<span>2 件</span></p>
								</div>
							</div>
							<ul className="ovh pop-prod pop-clist">
								<li>
									<p>内存容量：</p>
									<div className="ovh">
										<a className="ovh pop-cac">行货64GB</a>
										<a className="ovh">行货128GB</a>
									</div>
								</li>
								<li>
									<p>商品颜色：</p>
									<div className="ovh">
										<a className="ovh pop-cac">撒浪黑</a>
									</div>
								</li>
								<li>
									<p>购买方式：</p>
									<div className="ovh">
										<a className="ovh pop-cac">非合约机</a>
									</div>
								</li>
								<li>
									<p>选择套餐：</p>
									<div className="ovh">
										<a className="ovh pop-cac">官方标配</a>
									</div>
								</li>
							</ul>
							<div className="ovh pop-num">
								<p>购买数量<span>限购3件</span></p>
								<div className="ovh">
									<a>-</a>
									<input type="text" value="1" readonly />
									<a>+</a>
								</div>
							</div>
						</div>
						<div className="ovh pop-btn">
							<a href="javascript:;">加入购物车</a>
							<a href="javascript:;" className="pop-buy">立即购买</a>
						</div>
					</div>

					<a href="javascript:;" className="ovh pop-close">×</a>
				</div>
				*/}
				

				{/*成功加入购物车*/}
				<div className="ovh pop-success">
					<p>添加成功！<br />商品已加入购物车</p>
					<div className="ovh">
						<a href="javascript:;">再逛逛</a>
						<a href="cart.html">去购物车</a>
					</div>
				</div>

			</div>
		)
	}
}


export default ProPopup;





