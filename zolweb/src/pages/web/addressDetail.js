import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/personal/addDetail.less';

class Address extends Component{
	render(){
		return (
			<ul className="ovh per-list man-pw address">
				<li><a>收货人<input type="text" placeholder="姓名" /></a></li>
				<li><a>联系方式<input type="text" placeholder="手机号码" /></a></li>
				<li><a>所在地区<input type="text" placeholder="" /></a></li>
				<li><a>详细地址<input type="text" placeholder="详细地址需填写楼栋楼层或房间号信息" /></a></li>
			</ul>
		)
	}
}

export default Address;