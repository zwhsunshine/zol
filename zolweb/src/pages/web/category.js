import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/category.less';

class Category extends Component{
	constructor(){
		super();
		this.state = {
			menuArr:[]
		}
	}

	getMenu = async () => {
		let {navArr} = this.state;
		let data = await fetch('http://localhost/api/types?act=get')
		let d = await data.json();
		this.setState({menuArr:d.data});
	}

	getList = async () => {
		let {navArr} = this.state;
		let data = await fetch('http://localhost/api/products?act=get')
		let d = await data.json();
		this.setState({menuArr:d.data});
	}

	componentDidMount(){
		this.getMenu();
	}

	render(){
		let {menuArr} = this.state;
		let menu = menuArr.map((e,i)=>{
			return (
				<li
					key={i}
					className={i==0?'active':''}
				><a href="javascript:;">{e.name}</a></li>
			)
		})


		return (
			<div className="category">
				<div className="menu">
					<ul>
						{menu}
					</ul>
				</div>
				<div className="ovh cat-con">
					<ul className="ovh">
						<li>
							<h4>推荐分类</h4>
							<ul>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<h4>推荐品牌</h4>
							<ul>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<h4>推荐品牌</h4>
							<ul>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
								<li>
									<Link to="proDetail">
										<img src="https://mercrt-fd.zol-img.com.cn/g5/M00/0D/02/ChMkJlf7RLKIVr3hAABYR70a-R0AAWxsAAes7sAAFhf954.jpg" />
										<p>手机</p>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Category;