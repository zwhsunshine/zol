import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/personal/address.less';

class Address extends Component{
	render(){
		return (
			<ul className="ovh add-list">
				<li>
					<Link to="/addressDetail">
						<div className="ovh order-address">
							<h6>郑文会<span>152****0130</span></h6>
							<p><span>默认</span>北京昌平区沙河镇松兰堡</p>
						</div>
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-bi"></use>
						</svg>
					</Link>
				</li>
				<li>
					<Link to="/addressDetail">
						<div className="ovh order-address">
							<h6>郑文会<span>152****0130</span></h6>
							<p>北京昌平区沙河镇松兰堡</p>
						</div>
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-bi"></use>
						</svg>
					</Link>
				</li>
				<li>
					<Link to="/addressDetail">
						<div className="ovh order-address">
							<h6>郑文会<span>152****0130</span></h6>
							<p>北京昌平区沙河镇松兰堡</p>
						</div>
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-bi"></use>
						</svg>
					</Link>
				</li>
			</ul>
		)
	}
}

export default Address;