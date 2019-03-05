import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/footer.less';

class MyFooter extends Component{
	render(){
		let { pathN } = this.props;
		return (
			<footer>
				<ul>
					<li className={ (pathN==='/') ? 'active' : '' }>
						<Link to="/">首页</Link>
					</li>
					<li className={ (pathN==='/category') ? 'active' : '' }>
						<Link to="/category">分类</Link>
					</li>
					<li className={ (pathN==='/cart') ? 'active' : '' }>
						<Link to="/cart">购物车</Link>
					</li>
					<li className={ (pathN==='/personal') ? 'active' : '' }>
						<Link to="/personal">我的</Link>
					</li>
				</ul>
			</footer>
		)
	}
}


export default MyFooter;