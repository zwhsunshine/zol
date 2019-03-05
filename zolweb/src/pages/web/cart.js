import React,{Component} from 'react';
import '../../static/web/css/cart.less';

class Cart extends Component{
	render(){
		return (
			<section className="ovh cart">
				<div className="ovh cart-con">
					<h4>vivo旗舰店<span></span></h4>
					<ul className="ovh">
						<li>
							<i className="cart-sel"></i>
							<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
							<div className="ovh cart-info">
								<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
								<p>黑色官方标配</p>
								<div className="ovh pop-num">
									<p>¥299</p>
									<div className="ovh">
										<a>-</a>
										<input type="text" value="1" readonly />
										<a>+</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<i className="cart-sel cart-active"></i>
							<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
							<div className="ovh cart-info">
								<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
								<p>黑色官方标配</p>
								<div className="ovh pop-num">
									<p>¥299</p>
									<div className="ovh">
										<a>-</a>
										<input type="text" value="1" readonly />
										<a>+</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="ovh cart-con">
					<h4>vivo旗舰店<span></span></h4>
					<ul className="ovh">
						<li>
							<i className="cart-sel"></i>
							<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
							<div className="ovh cart-info">
								<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
								<p>黑色官方标配</p>
								<div className="ovh pop-num">
									<p>¥299</p>
									<div className="ovh">
										<a>-</a>
										<input type="text" value="1" readonly />
										<a>+</a>
									</div>
								</div>
							
							</div>
						</li>
						<li>
							<i className="cart-sel"></i>
							<img src="https://mercrt-fd.zol-img.com.cn/t_s80x60/g5/M00/07/09/ChMkJlwPLf2IWuNwAABy5kNN20gAAtsiwDYA-UAAHL-704.jpg" />
							<div className="ovh cart-info">
								<h5>华为 Mate 20 Pro智能视窗保护套华为 Mate 20 Pro智能视窗保护套</h5>
								<p>黑色官方标配</p>
								<div className="ovh pop-num">
									<p>¥299</p>
									<div className="ovh">
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
		)
	}
}

export default Cart;