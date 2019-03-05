import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect, bindActionCreators, actioncreators } from '../../store/reduxInfo';

import '../../static/web/css/personal/login.less';

class Login extends Component{
	loginSub = async () => {
		let uv = this.refs.username.value;
		let pv = this.refs.password.value;
		let str = new URLSearchParams({
			username: uv,
			password: pv
		}).toString();
		let data = await fetch('http://localhost/user/login',{
			method:'post',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			body:str
		})
		let d = await data.json();
		this.setState({code:d.code,msg:d.msg});

		//存储用户信息
		this.props.setCookie('username',uv,{name:'date',time:2});

		//跳转至个人中心
		this.props.history.replace('/personal');
	}
	render(){
		return (
			<section className="ovh login-main">
				<ul className="ovh">
					<li>
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-xingmingyonghumingnicheng"></use>
						</svg>
						<input type="text" placeholder="请输入用户名" ref="username" />
					</li>
					<li>
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-mima"></use>
						</svg>
						<input type="password" placeholder="请输入密码" ref="password" />
					</li>
				</ul>
				<a href="javascript:;" className="ovh login-submit" onClick={this.loginSub}>登　录</a>
				<div className="ovh login-btn">
					{/*<a href="javascript:;">忘记密码</a>*/}
					<Link to="/register">立即注册</Link>
				</div>
			</section>
		)
	}
}


export default connect(
	(state)=>{ return {gcookie:state.gcookie}},
	(dispatch)=>bindActionCreators(actioncreators,dispatch)
)(Login);