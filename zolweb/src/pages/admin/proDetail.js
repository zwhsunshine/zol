import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect, bindActionCreators, actioncreators } from '../../store/reduxInfo';

import '../../static/admin/css/detail.less';

class ProDetail extends Component{
	constructor(){
		super();
		this.state = {
			msg:'',
			// id:null,
			number:null,
			titv:'',	//标题
            priv:null,		//价格
            frev:null,		//运费
            color:[
            	{title:'黑色',checked:false},
				{title:'白色',checked:false},
				{title:'灰色',checked:false},
				{title:'红色',checked:false},
				{title:'橙色',checked:false},
				{title:'黄色',checked:false},
				{title:'绿色',checked:false},
				{title:'蓝色',checked:false},
				{title:'紫色',checked:false},
				{title:'粉色',checked:false},
				{title:'金色',checked:false}
			],
			pcolor:[],
			edition:[
				{title:'全网通',checked:false},
				{title:'移动版',checked:false},
				{title:'联通版',checked:false},
			],
			pedition:[],
			memory:[
				{title:'16GB',checked:false},
				{title:'32GB',checked:false},
				{title:'64GB',checked:false},
				{title:'128GB',checked:false},
				{title:'256GB',checked:false}
			],
			pmemory:[],
			types:[
				{title:'身边好物',checked:false},
				{title:'推荐',checked:false},
				{title:'同城购',checked:false},
				{title:'品牌精选',checked:false},
				{title:'电竞DIY',checked:false},
				{title:'家电优选',checked:false}
			],
			ptypes:[],
			profile:[],
			parameter:{
				list:'',
				number:null,
				brand:'',
				model:'',
				width:null,
				height:null,
				thick:null
			},
			service:'',
			// edit:null,
			onOff:true,
			type:'手机通讯',
		};
		this.arrc = this.arre = this.arrm = this.arrt = null;
	}


	componentWillMount(){
		// let {id,edit} = window.sessionStorage;
		// this.setState({id,edit});
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
	clist = (ev) => {
		this.setState({type:ev.target.innerHTML});
		this.refs.cslist.style.height = 0;
		this.setState({onOff:true});
	}


	//获取数据
	getData = async () => {
		
		//判断为编辑功能时，获取初始数据
		let id = window.sessionStorage.getItem('id');
		if(id){
			let {title, price, freight, color, edition, memory, types, parameter, service } = this.props.products.filter(e=>e._id == id)[0];
			this.setState({
				titv: title,
				priv: price,
				frev: freight,
				pcolor: color,
				pedition: edition,
				pmemory: memory,
				ptypes: types,
				parameter: parameter,
				service: service
			},()=>{
				let { color:col2, pcolor, edition:edi2, pedition, memory:mem2, pmemory, types:typ2, ptypes } = this.state;
				col2.forEach((e,i)=>{
					pcolor.forEach((el,index)=>{
						if(e.title == el){
							e.checked = true;
						}
					})
				});
				edi2.forEach((e,i)=>{
					pedition.forEach((el,index)=>{
						if(e.title == el){
							e.checked = true;
						}
					})
				});
				mem2.forEach((e,i)=>{
					pmemory.forEach((el,index)=>{
						if(e.title == el){
							e.checked = true;
						}
					})
				});
				typ2.forEach((e,i)=>{
					ptypes.forEach((el,index)=>{
						if(e.title == el){
							e.checked = true;
						}
					})
				});
				this.setState({ color:col2, edition:edi2, memory:mem2, types:typ2 })
			});
		}

		//设置state中number的初始值，为商品分类编号，供提交使用
		let num = this.props.proTypes[0].number;
		this.setState({number:num})
	}


	//添加数据
	addData = async (type,id) => {

		let title = this.refs.title.value;
		let price = this.refs.price.value;
		let freight = this.refs.freight.value;
		let picture = [];
		let number = this.state.number;
		let color = JSON.stringify(this.state.pcolor);
		let edition = JSON.stringify(this.state.pedition);
		let memory = JSON.stringify(this.state.pmemory);
		// let evaluate = [];
		let types = JSON.stringify(this.state.ptypes);
		let recommend = [];
		let profile = [];
		let parameter = JSON.stringify({
			list:this.refs.plist.value,
			number:this.refs.pnumber.value,
			brand:this.refs.pbrand.value,
			model:this.refs.pmodel.value,
			width:this.refs.pwidth.value,
			height:this.refs.pheight.value,
			thick:this.refs.pthick.value
		});
		let service = this.refs.service.value;
		let str = new URLSearchParams({ title, price, freight, picture, number, color, edition, memory, types, recommend, profile, parameter, service, id }).toString();
		let data = await fetch('http://localhost/api/products?act='+ type +'&' + str);
		let d = await data.json();
		
		if( d.code === 0 ){

			let timer = setTimeout(()=>{
				this.props.history.push( '/admin/product');
				clearTimeout(timer);
			},500);
			
			//更新redux数据
			let {getpro} = this.props;
			getpro([],null);

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


	//提交
	submit = async () => {

		//当sessionStorage中有数据时，说明是 编辑修改数据
		let {edit,id} = window.sessionStorage;
		if(edit){
			this.addData.call(this,'update',id);
		}
		//当sessionStorage中没有数据时，说明是 添加数据
		else{
			this.addData.call(this,'add');
		}
	}


	//内容改变
	changeVal = () => {
		this.setState({
			titv:this.refs.title.value,
			priv:this.refs.price.value,
			frev:this.refs.freight.value,
			parameter:{
				list:this.refs.plist.value,
				number:this.refs.pnumber.value,
				brand:this.refs.pbrand.value,
				model:this.refs.pmodel.value,
				width:this.refs.pwidth.value,
				height:this.refs.pheight.value,
				thick:this.refs.pthick.value
			},
			service:this.refs.service.value
		},()=>{
			this.setState({
				parameter:this.state.parameter,
			})
		})
		
	}


	//复选框
	checked = (index,ev) => {
		if( ev.target.nodeName == 'INPUT' ){
			let idval = ev.target.parentNode.parentNode.getAttribute('id');
			let {color,pcolor,edition,pedition,memory,pmemory,types,ptypes} = this.state;
			let arr = null;
			switch(idval){
				case 'color':
					arr = color;
					break;
				case 'edition':
					arr = edition;
					break;
				case 'memory':
					arr = memory;
					break;
				case 'types':
					arr = types;
					break;
			}
			arr.forEach((e,i)=>{
				if(i === index){
					e.checked = !e.checked;
				}
			})
			this.setState({color,edition,memory,types},()=>{
				pcolor = color.filter((e,i)=>{
					return e.checked == true;
				}).map((e,i)=>{
					return e.title
				})

				pedition = edition.filter((e,i)=>{
					return e.checked == true
				}).map((e,i)=>{
					return e.title
				})

				pmemory = memory.filter((e,i)=>{
					return e.checked == true
				}).map((e,i)=>{
					return e.title
				})

				ptypes = types.filter((e,i)=>{
					return e.checked == true
				}).map((e,i)=>{
					return e.title
				})

				this.setState({pcolor,pedition,pmemory,ptypes});
			})
		}
	}


	render(){
		let {id, number, titv, priv, frev, color, edition, memory, types, parameter, service } = this.state;
		this.arrc = color.map((e,i)=>{
			return (
				<label onClick={this.checked.bind(null,i)} key={i} ><input type="checkbox" checked={e.checked} />{e.title}</label>
			)
		})
		this.arre = edition.map((e,i)=>{
			return (
				<label onClick={this.checked.bind(null,i)} key={i} ><input type="checkbox" checked={e.checked} />{e.title}</label>
			)
		});

		this.arrm = memory.map((e,i)=>{
			return (
				<label onClick={this.checked.bind(null,i)} key={i} ><input type="checkbox" checked={e.checked} />{e.title}</label>
			)
		});

		this.arrt = types.map((e,i)=>{
			return (
				<label onClick={this.checked.bind(null,i)} key={i} ><input type="checkbox" checked={e.checked} />{e.title}</label>
			)
		});

		let {proTypes} = this.props;
		let detypes = proTypes.map((e,i)=>{
			return <a className={ e.number==this.state.number ? 'con-active' : '' } key={i} onClick={()=>{this.setState({number:e.number})}}>{e.title}</a>
		})
		
		return (
			<div className="ovh main">
				<div className="ovh con-main">
					<div className="ovh con-tit">
						<Link to="/admin">首页</Link>
						<Link to="product">商品列表</Link>
						<span>添加商品</span>
					</div>
				</div>
				<div className="ovh">
					<ul className="ovh list-con">
						<li>
							<p>名称：</p>
							<div>
								<input type="text" ref="title" value={titv} onChange={this.changeVal} />
							</div>
						</li>
						<li>
							<p>价格：</p>
							<div>
								<input type="text" ref="price" value={priv} onChange={this.changeVal} />元
							</div>
						</li>
						<li>
							<p>运费：</p>
							<div>
								<input type="text" ref="freight" value={frev} onChange={this.changeVal} />元
							</div>
						</li>
						<li>
							<p>轮播图片：</p>
							<div>
								<input type="file" name="file" className="upinput" accept="image/png, image/jpeg, image/gif, image/jpg" />
								<label for="file" class="upbtn">上传图片</label>
							</div>
						</li>
						<li className="con-smain">
							<p>商品类型</p>
							<div>
								<div className="con-select">
									<h3 ref="ctype" onClick={this.ctype}>{this.state.type}<i></i></h3>
									<div className="con-slist" ref="cslist" onClick={this.clist}>
										{detypes}
									</div>
								</div>							
							</div>
						</li>
						<li>
							<p>颜色：</p>
							<div id="color">
								{this.arrc}
							</div>
						</li>
						<li>
							<p>版本：</p>
							<div id="edition">
								{this.arre}
							</div>
						</li>
						<li>
							<p>内存：</p>
							<div id="memory">
								{this.arrm}
							</div>
						</li>
						<li>
							<p>首页类别：</p>
							<div id="types">
								{this.arrt}
							</div>
						</li>
						<li style={{
							borderBottom:"1px solid #e7e7e7",
							marginTop:30,
							paddingBottom:5,
							marginBottom:15
						}}>
							<p>商品详情&nbsp;&nbsp;</p>
							<div></div>
						</li>
						<li>
							<p>上传图片：</p>
							<div>
								<p>待完善</p>
							</div>
						</li>
						<li style={{
							borderBottom:"1px solid #e7e7e7",
							marginTop:30,
							paddingBottom:5,
							marginBottom:15
						}}>
							<p>规格参数&nbsp;&nbsp;</p>
							<div></div>
						</li>
						<li>
							<p>包装清单：</p>
							<div>
								<textarea type="text" ref="plist" value={parameter.list} onChange={this.changeVal} ></textarea>
							</div>
						</li>
						<li>
							<p>商品编号：</p>
							<div>
								<input type="text" ref="pnumber" value={parameter.number} onChange={this.changeVal} />
							</div>
						</li>
						<li>
							<p>主体&nbsp;&nbsp;</p>
							<div></div>
						</li>
						<li>
							<p>品牌：</p>
							<div>
								<input type="text" ref="pbrand" value={parameter.brand} onChange={this.changeVal} />
							</div>
						</li>
						<li>
							<p>型号：</p>
							<div>
								<input type="text" ref="pmodel" value={parameter.model} onChange={this.changeVal} />
							</div>
						</li>
						<li>
							<p>基本信息&nbsp;&nbsp;</p>
							<div></div>
						</li>
						<li>
							<p>机身宽度：</p>
							<div>
								<input type="text" ref="pwidth" value={parameter.width} onChange={this.changeVal} />mm
							</div>
						</li>
						<li>
							<p>机身高度：</p>
							<div>
								<input type="text" ref="pheight" value={parameter.height} onChange={this.changeVal} />mm
							</div>
						</li>
						<li>
							<p>机身厚度：</p>
							<div>
								<input type="text" ref="pthick" value={parameter.thick} onChange={this.changeVal} />mm
							</div>
						</li>
						<li style={{
							borderBottom:"1px solid #e7e7e7",
							marginTop:30,
							paddingBottom:5,
							marginBottom:15
						}}>
							<p>售后保障&nbsp;&nbsp;</p>
							<div></div>
						</li>
						<li>
							<p>服务承诺：</p>
							<div>
								<textarea ref="service" value={service} onChange={this.changeVal} />
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
	(state)=>{ return { products:state.products, proTypes:state.proTypes } },
	(dispatch)=>bindActionCreators(actioncreators,dispatch)
)(ProDetail);