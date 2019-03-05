import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect, bindActionCreators, actioncreators } from '../../store/reduxInfo';

import '../../static/admin/css/product.less';
import Tips from '../../components/admin/tips';

class SProduct extends Component{
	constructor(){
		super();
		this.state = {
			msg:'',
			type:'手机通讯',
			onOff:true,
			number:null
		}
	}


	componentDidMount(){
		this.getData();
	}


	//选择分类
	ctype = () => {
		let {onOff} = this.state;
		if(onOff){
			this.refs.cslist.style.height = this.refs.cslist.children.length * 32 + 'px';
		}else{
			this.refs.cslist.style.height = 0;
		}
		this.setState({onOff:!onOff});
	}
	clist = (num,ev) => {
		this.setState({type:ev.target.innerHTML,onOff:true,number:num});
		window.sessionStorage.setItem('number',num);
		this.refs.cslist.style.height = 0;
	}


	//获取数据
	getData = async () => {
		let lnone = this.refs.lnone;
		let {products,getpro,proTypes,gettypes} = this.props;
		getpro(products,lnone);
		gettypes(proTypes);
	}


	//删除数据
	delData = async (id) => {

		let {msg} = this.state;
		let data = await fetch('http://localhost/api/products?act=del&id=' + id)
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
			let {getpro} = this.props;
			getpro([],lnone);
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
		let that = this;
		let {number} = this.state;
		let {products,proTypes} = this.props;

		//当本路由number为空时，值为商品分类列表的第一项的number值
		if( !number && proTypes.length ){
			window.sessionStorage.setItem('number',proTypes[0].number);
		}

		//商品分类
		let detype = proTypes.map((e,i)=>{
			return (
				<a className={ e.number==this.state ? 'con-active' : '' } onClick={this.clist.bind(null,e.number)}>{e.title}</a>
			)
		})

		//商品列表
		let list = products.filter((e,i)=>{
			return e.number == window.sessionStorage.number*1;
		}).map((e,i)=>{
			return (
				<li key={e._id}>
					<div><p>{i+1}</p></div>
					<div><p>{e.title}</p></div>
					<div><p>{e.price}</p></div>
					<div><p>{e.freight}</p></div>
					<div>
						{ e.color.map((ec,i)=>{
							return (<p>{ec}</p>)
						}) }
					</div>
					<div>
						{ e.edition.map((ec,i)=>{
							return (<p>{ec}</p>)
						}) }
					</div>
					<div>
						{ e.memory.map((ec,i)=>{
							return (<p>{ec}</p>)
						}) }
					</div>
					<div>
						{ e.types.map((ec,i)=>{
							return (<p>{ec}</p>)
						}) }
					</div>
					<div>
						<Link to='proDetail'><p className="tab-edit" onClick={this.edit.bind(null,e._id)}>编辑</p></Link>
						<a href="javascript:;" className="tab-del" onClick={that.delData.bind(that,e._id)}>删除</a>
					</div>
				</li>
			)
		})

	
		return (
			<div className="ovh main">
				<div className="con-main">
					<div className="con-tit">
						<Link to="/admin">商城概况</Link>
						<span>商品列表</span>
						<div className="con-select">
							<p>请选择分类：</p>
							<h3 ref="ctype" onClick={this.ctype}>{this.state.type}<i></i></h3>
							<div className="con-slist" ref="cslist">
								{detype}
							</div>
						</div>
					</div>
					<Link to="proDetail"><p className="con-add" onClick={this.delSession}>添加商品</p></Link>
				</div>
				<div className="ovh">
					<ul className="ovh table list-type">
						<li>
							<div><p>序号</p></div>
							<div><p>商品名称</p></div>
							<div><p>价格</p></div>
							<div><p>运费</p></div>
							<div><p>颜色</p></div>
							<div><p>版本</p></div>
							<div><p>内存</p></div>
							<div><p>所属类型</p></div>
							<div><p>操作</p></div>
						</li>
						{list}
					</ul>
					<div className="list-none" ref="lnone">空空如也，点击右上方添加按钮，添加内容</div>
				</div>
				<div className="ptips" ref="ptips">{this.state.msg}</div>
			</div>
		)
	}
}

export default connect(
	(state)=>{ return {products:state.products,proTypes:state.proTypes}},
	(dispatch)=>bindActionCreators(actioncreators,dispatch)
)(SProduct);