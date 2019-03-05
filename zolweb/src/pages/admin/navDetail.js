import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NavDetial extends Component{
	constructor(){
		super();
		this.state = {
			msg:'',
			name:'',
			img:'',
		}
	}

	//添加数据
	addData = async () => {

		let {msg,name,img} = this.state;
		let str = new URLSearchParams({name,img}).toString();
		let data = await fetch('http://localhost/api/home/nav?act=add&' + str );
		let d = await data.json();
		this.setState({msg:d.msg});

		if( d.code === 0 ){
			let timer = setTimeout(()=>{
				this.props.history.push( '/admin/nav',null);
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
		let {msg,name,img} = this.state;
		let pv = this.refs.proname.value;
		let tv = this.refs.text.value;
		
		this.setState({msg,name:pv,img:tv},()=>{
			this.addData()
		})
	}

	changeVal = (ev) => {

		let {name,img} = this.state;
		let {location:{query}} = this.props;
		
		if(query){
			query.nv = this.refs.proname.value;
			query.iv = this.refs.text.value;
		}

		this.setState({name:this.refs.proname.value,img:this.refs.text.value})
		
	}

	//渲染
	render(){

		let {name,img} = this.state;
		let {location:{query}} = this.props;
		return (
			<div className="ovh main">
				<div className="ovh con-main">
					<div className="ovh con-tit">
						<Link to="/admin">商城概况</Link>
						<Link to="nav">导航列表</Link>
						<span>添加导航</span>
					</div>
				</div>
				<div className="ovh">
					<ul className="ovh list-con">
						<li>
							<p>名称：</p>
							<div>
								<input type="text" ref="proname" value={query?query.nv:name} onChange={this.changeVal} />
							</div>
						</li>
						<li>
							<p>上传图片：</p>
							<div>
								<input type="text" ref="text" value={query?query.iv:img} onChange={this.changeVal} />
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

export default NavDetial;