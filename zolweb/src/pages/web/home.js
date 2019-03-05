import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';	//connect：数据store和操作事件action绑定到需要使用的组件上
import {bindActionCreators} from 'redux';	//bindActionCreators是redux的一个API，作用是将单个或多个ActionCreator转化为dispatch(action)的函数集合形式。开发者不用再手动dispatch(actionCreator(type))，而是可以直接调用方法。
import * as actioncreators from '../../actioncreators/index';

import MyHeader from '../../components/web/header';
import MyFooter from '../../components/web/footer';
import Banner from '../../components/web/banner';
import '../../static/web/css/home.less';

class Home extends Component{
	constructor(){
		super();
		this.state = {
			navArr:[],
			aroArr:[]
		}
	}

	//导航
	getNav = async () =>{
		let {navArr} = this.state;
		let data = await fetch('http://localhost/api/home/nav?act=get')
		let d = await data.json();
		this.setState({navArr:d.data});
	}

	//身边好物
	getAro = async () =>{
		let {aroArr} = this.state;
		let data = await fetch('http://localhost/api/products?act=get')
		let d = await data.json();
		this.setState({aroArr:d.data});
	}

	componentDidMount(){
	    this.getNav();
	    this.getAro();
	}

	render(){

		let {navArr,aroArr} = this.state;

		let navs = navArr.map((e,i)=>{
			return (
				<li key={i}>
					<a href="javascript:;" className="ovh">
						<i style={{backgroundPosition: '0 0'}}></i>
						<h3>{e.name}</h3>
					</a>
				</li>
			)
		})

		aroArr.length = 4;
		let around = aroArr.map((e,i)=>{
			return (
				<li key={i}>
					<a href="javascript:;" className="ovh">
						<img src={require('../../static/web/images/pro.jpg')} />
						<p>{e.name}</p>
						<i>正品行货，假一赔三！实力全面屏 莱卡双摄 麒麟8核处理器</i>
						<b>去看看</b>
					</a>
				</li>
			)
		})

		return (
			<div>

				{/* banner */}
				<Banner />

				{/* 导航 */}
				<nav>
					<ul className="ovh">
						{navs}
					</ul>
				</nav>

				{/*精选好店*/}
				{/*
				<section>
					<div className="ovh sec-title">
						<h4>精选好店<span>精选好店</span></h4>
						<a href="javascript:;" className="ovh more">更多<span>></span></a>
					</div>
					<ul className="ovh selected">
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/life.jpg')} />
								<div>
									<p>爱科生活</p>
									<i>查看地址 <span>></span></i>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/life.jpg')} />
								<div>
									<p>迪信通旗舰店</p>
									<i>查看地址 <span>></span></i>
								</div>
							</a>
						</li>
					</ul>
				</section>
				*/}

				{/*身边好物*/}
				<section>
					<div className="ovh sec-title">
						<h4>身边好物<span>身边好物就在这里</span></h4>
					</div>
					<ul className="ovh thing">
						{around}
						{/*
							<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>【包邮送壳膜】荣耀 畅玩7X（4GB RAM/全网通）移动联通电信4G</p>
								<i>正品行货，假一赔三！实力全面屏 莱卡双摄 麒麟8核处理器</i>
								<b>去看看</b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>【包邮送壳膜】荣耀 畅玩7X（4GB RAM/全网通）移动联通电信4G</p>
								<i>正品行货，假一赔三！实力全面屏 莱卡双摄 麒麟8核处理器</i>
								<b>去看看</b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>【包邮送壳膜】荣耀 畅玩7X（4GB RAM/全网通）移动联通电信4G</p>
								<i>正品行货，假一赔三！实力全面屏 莱卡双摄 麒麟8核处理器</i>
								<b>去看看</b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>【包邮送壳膜】荣耀 畅玩7X（4GB RAM/全网通）移动联通电信4G</p>
								<i>正品行货，假一赔三！实力全面屏 莱卡双摄 麒麟8核处理器</i>
								<b>去看看</b>
							</a>
						</li>
						*/}
					</ul>
				</section>


				{/*推荐*/}
				<section>
					<div className="ovh rec-img">
						<img src={require('../../static/web/images/ztj.png')} />
					</div>
					<div className="ovh rec-con">
						<div>
							<a href="javascript:;" className="ovh">
								<h5>全新亮相！戴尔全新G7系列高端游戏本官网首发！</h5>
								<p>还有什么能比中意的游戏本更新换代更令人兴奋的呢？随着第八代智能英特尔酷睿处理器（高性能移动版）的发布，各大厂商都在推陈出新，新一轮的战争即将上演。作为PC界的大佬级人物，戴尔近期就推出了游戏7000系列的全新高端产品—G7系列，全新的外观设计十分抢眼，内部也采用了最新的硬件，可谓是一款炫酷有动力的游戏本。</p>
							</a>
						</div>
						<ul className="ovh dots">
							<li></li>
							<li className="active"></li>
							<li></li>
						</ul>
					</div>
				</section>


				{/*团购*/}
				<section>
					<h4 className="title">
						<p>团购</p>
						<a href="javascript:;" className="ovh more">更多<span>></span></a>
					</h4>
					<div className="ovh gro-img">
						<img src={require('../../static/web/images/tj.jpg')} />
						<i>今日推荐</i>
					</div>
					<div className="ovh group">
						<ul className="ovh">
							<li>
								<a href="javascript:;" className="ovh">
									<img src={require('../../static/web/images/jr.jpg')} />
									<p>￥5199<del>￥5399</del></p>
								</a>
							</li>
							<li>
								<a href="javascript:;" className="ovh">
									<img src={require('../../static/web/images/jr.jpg')} />
									<p>￥5199<del>￥5399</del></p>
								</a>
							</li>
							<li>
								<a href="javascript:;" className="ovh">
									<img src={require('../../static/web/images/jr.jpg')} />
									<p>￥5199<del>￥5399</del></p>
								</a>
							</li>
							<li>
								<a href="javascript:;" className="ovh">
									<img src={require('../../static/web/images/jr.jpg')} />
									<p>￥5199<del>￥5399</del></p>
								</a>
							</li>
							<li>
								<a href="javascript:;" className="ovh">
									<img src={require('../../static/web/images/jr.jpg')} />
									<p>￥5199<del>￥5399</del></p>
								</a>
							</li>
						</ul>
					</div>
				</section>


				{/*同城购*/}
				<section>
					<h4 className="title">
						<p>同城购</p>
					</h4>
					<div className="ovh sec-title" style={{borderTop: '1px solid #efefef'}}>
						<h4>爱科生活官方旗舰店</h4>
						<a href="javascript:;" className="ovh more">进店<span>></span></a>
					</div>
					<div className="ovh city-rec">
						<a href="javascript:;"><img src={require('../../static/web/images/hw.jpg')} /></a>
						<a href="javascript:;"><img src={require('../../static/web/images/hw2.jpg')} /></a>
						<a href="javascript:;"><img src={require('../../static/web/images/hw3.jpg')} /></a>
					</div>
					<ul className="ovh thing city">
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
					</ul>
				</section>


				{/*品牌精选*/}
				<section>
					<h4 className="title">
						<p>品牌精选</p>
					</h4>
					<ul className="ovh brand">
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/ry.jpg')} />
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
					</ul>
				</section>


				{/*电竞DIY*/}
				<section>
					<h4 className="title">
						<p>电竞DIY</p>
					</h4>
					<div className="ovh city-rec">
						<a href="javascript:;"><img src={require('../../static/web/images/hw.jpg')} /></a>
						<a href="javascript:;"><img src={require('../../static/web/images/hw2.jpg')} /></a>
						<a href="javascript:;"><img src={require('../../static/web/images/hw3.jpg')} /></a>
					</div>
					<ul className="ovh thing city">
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<img src={require('../../static/web/images/pro.jpg')} />
								<p>荣耀 畅玩7X（4GB +64GB/128GB全网通）4G全面屏手机</p>
								<i>荣耀 畅玩7X（4GB RAM/全网通）32GB 64GB 128GB</i>
								<b>¥<span>1599</span></b>
							</a>
						</li>
					</ul>
				</section>


				{/*家电优选*/}
				<section>
					<h4 className="title">
						<p>家电优选</p>
					</h4>
					<ul className="ovh brand">
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/ry.jpg')} />
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" className="ovh">
								<div>
									<img src={require('../../static/web/images/pro.jpg')} />
								</div>
								<p>荣耀 V9全网通</p>
							</a>
						</li>
					</ul>
				</section>
			</div>
		)
	}
}

export default withRouter(connect((state)=>{
	return {webr:state.webr}
},(dispatch)=>bindActionCreators(actioncreators,dispatch)
	)(Home));