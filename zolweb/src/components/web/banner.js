import React,{Component} from 'react';
import '../../static/web/css/banner.less';

class Banner extends Component{
	render(){
		return (
			<div className="ovh banner">
				<div className="ovh banner-main">
					<img src={require('../../static/web/images/banner.jpg')} />
				</div>
				<ul className="ovh dots">
					<li></li>
					<li className="active"></li>
					<li></li>
				</ul>
			</div>
		)
	}
}

export default Banner;