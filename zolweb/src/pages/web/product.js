import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/product.less';

class Product extends Component{
	render(){
		return (
			<div>
				<ul className="ovh pro-menu">
					<li><a href="javascript:;">默认</a></li>
					<li><a href="javascript:;">人气</a></li>
					<li><a href="javascript:;">销量</a></li>
					<li><a href="javascript:;">价格</a></li>
					<li><a href="javascript:;">筛选</a></li>
				</ul>
				<ul className="ovh product">
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
					<li>
						<Link to="proDetail">
							<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
							<div className="ovh pro-con">
								<p>华为 nova 2全场手机支持分期可送货上门/0首付0利息（学生/上班族均可）以旧换新 购机送靓号 155 5656 4444（微信同号）</p>
								<i>已售0件</i>
								<b>¥1299.00</b>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}


export default Product;