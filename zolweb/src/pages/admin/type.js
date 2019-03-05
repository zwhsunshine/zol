import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect, bindActionCreators, actioncreators } from '../../store/reduxInfo';

import Tips from '../../components/admin/tips';

class SType extends Component{
	constructor(){
		super();
		this.state = {
			msg:'',
			nv:null
		}
	}
	componentDidMount(){
		this.getData();
	}

	//获取数据
	getData = async () => {
		console.log(1111);
		let lnone = this.refs.lnone;
		let {proTypes,gettypes} = this.props;
		gettypes(proTypes,lnone);

	}

	//删除数据
	delData = async (id) => {

		let {msg} = this.state;
		let data = await fetch('http://localhost/api/types?act=del&id=' + id)
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

			//更新redux数据
			let lnone = this.refs.lnone;
			let {gettypes} = this.props;
			gettypes([],lnone);
		}
	}

	//编辑
	edit = (id) => {
		window.sessionStorage.setItem('id',id);
		window.sessionStorage.setItem('edit','true');
	}

	//移除session
	delSession = () => {
		window.sessionStorage.removeItem('id');
		window.sessionStorage.removeItem('edit');
	}

	render(){

		let {msg,nv} = this.state;
		let that = this;

		let {proTypes} = this.props;
		let navs = proTypes.map((e,i)=>{
			return (
				<li key={e._id}>
					<div><p>{i+1}</p></div>
					<div><p>{e.title}</p></div>
					<div>
						<Link to='typesDetail'><p className="tab-edit" onClick={this.edit.bind(null,e._id)}>编辑</p></Link>
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
						<span>商品分类</span>
					</div>
					<Link to="typesDetail"><p className="con-add" onClick={this.delSession}>添加分类</p></Link>
				</div>
				<div className="ovh">
					<ul className="ovh table types">
						<li>
							<div><p>序号</p></div>
							<div><p>商品分类</p></div>
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

export default connect(
	(state)=>{ return {proTypes:state.proTypes}},
	(dispatch)=>bindActionCreators(actioncreators,dispatch)
)(SType);