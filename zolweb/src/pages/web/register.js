import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ResPopup from '../../pages/web/resPopup';

class Register extends Component{
	constructor(){
		super();
		this.state = {
			arr:[],
			code:null,
			msg:''
		}
	}

	//注册
	register = async () => {

		//请求数据
		let uv = this.refs.username.value;
		let pv = this.refs.password.value;
		let str = new URLSearchParams({
			act:'reg',
			username: uv,
			password: pv
		}).toString();
		let data = await fetch('http://localhost/user/register',{
			method:'post',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			body:str
		})
		let d = await data.json();
		this.setState({code:d.code,msg:d.msg});

		//提示框
		this.refs.webpop.style.display = "block";
		this.state.msg = d.msg;
		let timer = setTimeout(()=>{
			this.refs.webpop.style.display = "none";
			clearTimeout(timer);
		},500)

	}
	successReg = async () => {

		//请求数据
		let uv = this.refs.username.value;
		let pv = this.refs.password.value;
		let str = new URLSearchParams({
			act:'add',
			username: uv,
			password: pv
		}).toString();
		let data = await fetch('http://localhost/user/register',{
			method:'post',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			body:str
		})
		let d = await data.json();
		this.setState({code:d.code,msg:d.msg});

		//存储用户信息
		document.cookie = 'username = ' + uv;

		//跳转至个人中心
		this.props.history.replace('/personal');

	}
	closePop = () => {
		let {code} = this.state;
		this.setState({code:1})
	}
	
	render(){
		let {code,user} = this.state;
		let pop = null;
		if(code === 0){
			pop = <ResPopup 
						{...{
							closePop:this.closePop,
							successReg:this.successReg
						}}
					/>
		}else{
			pop = null
		}
		return (
			<div>
				<section className="ovh login-main">
					<ul className="ovh">
						<li>
							{/*<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-xingmingyonghumingnicheng"></use>
							</svg>*/}
							<input type="text" placeholder="请输入用户名" className="" ref="username" />
						</li>
						<li>
							{/*<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-mima"></use>
							</svg>*/}
							<input type="password" placeholder="请输入密码" ref="password" />
						</li>
					</ul>
					<a href="javascript:;" className="ovh login-submit" onClick={this.register}>立即注册</a>
				</section>
				<div className="web-pop" ref="webpop">{this.state.msg}</div>
				{pop}
			</div>
		)
	}
}


export default Register;