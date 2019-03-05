import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect, bindActionCreators, actioncreators } from '../../store/reduxInfo';

class TypeDetial extends Component{
	constructor(){
		super();
		this.state = {
			msg:'',
			id:null,
			edit:null,
			title:''
		}
	}

	componentDidMount(){
		this.getData();
	}

	//获取数据
	getData = async () => {
		
		let { id, edit } = window.sessionStorage;
		if(id){
			let { title } = this.props.proTypes.filter(e=>e._id == id)[0];
			this.setState({title,edit});
		}
	}

	//添加数据
	addData = async (type,id) => {

		let {msg,title} = this.state;
		let str = new URLSearchParams({title,id}).toString();
		let data = await fetch('http://localhost/api/types?act='+ type +'&' + str );
		let d = await data.json();
		this.setState({msg:d.msg});

		if( d.code === 0 ){

			//更新redux数据
			let {gettypes} = this.props;
			gettypes([],null);

			//跳转至列表页
			let timer = setTimeout(()=>{
				this.props.history.push( '/admin/types');
				clearTimeout(timer);
			},500);

		}

		this.refs.ptips.style.opacity = 1;
		this.refs.ptips.style.visibility = 'visible';
		
		if( d.code === 1 ){
			let ptimer = setTimeout(()=>{
				this.refs.ptips.style.opacity = 0;
				this.refs.ptips.style.visibility = 'hidden';
				clearTimeout(ptimer);
			},1000);
		}
	}

	//提交并更新数据
	submit = () => {
		//当sessionStorage中有数据时，说明是 编辑修改数据
		let {edit,id} = window.sessionStorage;
		if(edit){
			this.addData.call(this,'update',id);
		}
		//当sessionStorage中没有数据时，说明是 添加数据
		else{
			console.log('add');
			this.addData.call(this,'add');
		}
	}

	changeVal = (ev) => {

		this.setState({
			title:this.refs.title.value
		})
		
	}

	//渲染
	render(){
		let {title,number} = this.state;
		return (
			<div className="ovh main">
				<div className="ovh con-main">
					<div className="ovh con-tit">
						<Link to="/admin">商城概况</Link>
						<Link to="types">商品分类</Link>
						<span>添加商品</span>
					</div>
				</div>
				<div className="ovh">
					<ul className="ovh list-con">
						<li>
							<p>分类名称：</p>
							<div>
								<input type="text" ref="title" value={title} onChange={this.changeVal} />
							</div>
						</li>
						<li>
							<p></p>
							<div><a className="submit" onClick={this.submit}>提 交</a></div>
						</li>
					</ul>
				</div>
				<div className="ptips" ref="ptips">{this.state.msg}</div>
			</div>
		)
	}
}

export default connect(
	(state)=>{ return {proTypes:state.proTypes}},
	(dispatch)=>bindActionCreators(actioncreators,dispatch)
)(TypeDetial);
