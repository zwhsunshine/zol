import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class MyHeader extends Component{
	render(){
		return (
			<header>
				<a href="index.html" className="ovh logo"><img src={require('../../static/web/images/logo.png')} /></a>
				<div className="ovh head-main">
					<p>北京</p>
					{/*<div style={display: 'none';}>
						<ul>
							<li>北京</li>
							<li>上海</li>
							<li>广州</li>
							<li>北京</li>
							<li>上海</li>
							<li>广州</li>
							<li>北京</li>
							<li>上海</li>
							<li>广州</li>
						</ul>
					</div>*/}
				</div>
				<input type="text" placeholder="iphone 7" className="ovh search" />
				<Link to="/register"><div className="ovh por login">登录</div></Link>
			</header>
		)
	}
}

export default MyHeader;