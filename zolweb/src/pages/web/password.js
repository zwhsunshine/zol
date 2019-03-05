import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/personal/password.less';

class MyFooter extends Component{
	render(){
		return (
			<ul className="ovh per-list man-pw">
				<li><a>输入当前密码<input type="text" placeholder="4-16位英文字母/数字/特殊字符" /></a></li>
				<li><a>输入新密码<input type="text" placeholder="4-16位英文字母/数字/特殊字符" /></a></li>
				<li><a>确认新密码<input type="text" placeholder="4-16位英文字母/数字/特殊字符" /></a></li>
			</ul>
		)
	}
}


export default MyFooter;