import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/admin/fonts/iconfont.css'
import '../../static/admin/css/side.less';

class Side extends Component{
	constructor(){
		super();
		this.state = {
			val:1
		}
		this.next = null
	}
	spread = (v,ev) =>{
		let that = ev.target;
		let parent = null;
		if( that.nodeName == 'A' ){
			parent = that;
		}else if( that.nodeName == 'SPAN' ){
			parent = that.parentNode;
		}
		this.setState({val:v},()=>{
			if(this.next){
				this.next.style.height = 0;
			}
			parent.nextElementSibling.style.height = parent.nextElementSibling.children.length * 34 + 'px';
			this.next = parent.nextElementSibling;
		});
	}
	render(){
		let { val } = this.state;
		return (
			<div className="ovh sys-nav">
				<div className="ovh nav-info">
					<a className="ovh"><img src={require('../../static/admin/images/user.png')} /></a>
					<p>mysunshine</p>
				</div>
				<ul className="ovh" id="sys-nlist">
					<li>
						<Link to="/admin">
							<span className="iconfont icon-gaikuang"></span>
							商城概况
						</Link>
					</li>
					<li className={ (val==1) ? 'nav-active' : '' }>
						<a onClick={ this.spread.bind(null,1) }>
							<span className="iconfont icon-home"></span>
							首页管理
						</a>
						<ul ref='menulist'>
							<li><a>幻灯片</a></li>
							<li><Link to="/admin/nav">首页导航</Link></li>
							<li><a>首页分类</a></li>
						</ul>
					</li>
					<li className={ (val==2) ? 'nav-active' : '' }>
						<a onClick={ this.spread.bind(null,2) }>
							<span className="iconfont icon-shangpin"></span>
							商品管理
						</a>
						<ul ref='menulist'>
							<li><Link to='/admin/types'>商品分类</Link></li>
							<li><Link to="/admin/product">商品列表</Link></li>
						</ul>
					</li>
					<li className={ (val==3) ? 'nav-active' : '' }>
						<a onClick={ this.spread.bind(null,3) }>
							<span className="iconfont icon-dingdan"></span>
							订单管理
						</a>
						<ul ref='menulist'>
							<li><a>全部</a></li>
							<li><a>待发货</a></li>
							<li><a>待付款</a></li>
							<li><a>待评价</a></li>
						</ul>
					</li>
					<li className={ (val==4) ? 'nav-active' : '' }>
						<a onClick={ this.spread.bind(null,4) }>
							<span className="iconfont icon-huiyuan"></span>
							会员管理
						</a>
						<ul ref='menulist'>
							<li><Link to="/admin/user">会员信息</Link></li>
						</ul>
					</li>
				</ul>
			</div>
		)
	}
}

export default Side;