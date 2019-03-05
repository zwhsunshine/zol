import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/personal/manage.less';

class Manage extends Component{
	render(){
		return (
			<ul className="ovh per-list manage">
				<li><a>登录名<span>zol_40w751x00l7z958</span></a></li>
				<li><Link to="/password">修改账户密码</Link></li>
			</ul>
		)
	}
}


export default Manage;