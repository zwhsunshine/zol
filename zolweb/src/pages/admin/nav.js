import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Tips from '../../components/admin/tips';

class SNav extends Component{
	constructor(){
		super();
		this.state = {
			arr:[],
			msg:'',
			nv:null,
			iv:null
		}
	}
	componentDidMount(){
		this.getData();
	}

	//添加数据
	getData = async () => {
		let {arr} = this.state;
		let data = await fetch('http://localhost/api/home/nav?act=get')
		let d = await data.json();
		this.setState({arr:d.data});

		if( d.data.length > 0 ){
			this.refs.lnone.style.display = 'none';
		}else{
			this.refs.lnone.style.display = 'block';
		}
	}

	//删除数据
	delData = async (id) => {
		let {arr,msg} = this.state;
		let data = await fetch('http://localhost/api/home/nav?act=del&id=' + id)
		let d = await data.json();
		if( d.code === 0 ){

			this.setState({msg:d.msg})
			this.refs.ptips.style.opacity = 1;
			this.refs.ptips.style.visibility = 'visible';

			let ptimer = setTimeout(()=>{
				this.refs.ptips.style.opacity = 0;
				this.refs.ptips.style.visibility = 'hidden';
				clearTimeout(ptimer);
			},500);
			await this.getData();
		}
	}

	render(){
		let {arr,msg,nv,iv} = this.state;
		let that = this;
		let navs = arr.map((e,i)=>{
			return (
				<li key={e._id}>
					<div><p>{i+1}</p></div>
					<div><p>{e.name}</p></div>
					<div><p>{e.img}</p></div>
					<div>
						<Link
							to={{
								pathname:'navDetail',
								query:{
									nv:e.name,
									iv:e.img
								}
							}}
						><p className="tab-edit">编辑</p></Link>
						<a href="javascript:;" className="tab-del" ref="del" onClick={that.delData.bind(that,e._id)}>删除</a>
					</div>
				</li>
			)
		})
		return (
			<div className="ovh main">
				<div className="ovh con-main">
					<div className="ovh con-tit">
						<Link to="/admin">商城概况</Link>
						<span>导航列表</span>
					</div>
					<Link to="navDetail"><p className="con-add">添加导航</p></Link>
				</div>
				<div className="ovh">
					<ul className="ovh table navtypes">
						<li>
							<div><p>序号</p></div>
							<div><p>导航名称</p></div>
							<div><p>图片</p></div>
							<div><p>操作</p></div>
						</li>
						{navs}
					</ul>
					<div className="list-none" ref="lnone">空空如也，点击右上方添加按钮，添加内容</div>
				</div>
				<div className="ptips" ref="ptips">{this.state.msg}</div>
			</div>
		)
	}
}

export default SNav