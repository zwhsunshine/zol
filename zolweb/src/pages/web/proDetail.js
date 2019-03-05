import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/web/css/proDetail.less';
import Popup from '../../pages/web/proPopup';

class ProDetail extends Component{
	render(){
		return (
			<div>
				<div className="ovh banner pro-banner">
					<div className="ovh banner-main">
						<img src="https://mercrt-fd.zol-img.com.cn/t_s600x600/g5/M00/07/09/ChMkJ1wPHaKITm99AAD_PlTfE_AAAtsdwIvUqQAAP9W853.jpg" />
					</div>
					<ul className="ovh dots">
						<li></li>
						<li className="active"></li>
						<li></li>
					</ul>
				</div>

				<section className="ovh pro-title">
					<div className="ovh">
						<p>华为 Mate 20 Pro（6GB RAM/全网通）全网通全网通全网通全网通全网通全网通全网通全网通</p>
						<i>mate20 pro稀缺货源</i>
						<b>¥<span>1299.00</span></b>
					</div>
					<div className="ovh pro-add">
						<p>运费 0元</p>
						<p>销量1件</p>
						<p>发货地 : 上海</p>
					</div>
				</section>

				<section className="ovh pro-ins">
					<ul className="ovh">
						<li><i className="xian"></i>先行赔付</li>
						<li><i className="hang"></i>行货保证</li>
						<li><i className="wu"></i>无忧退换</li>
						<li><i className="fa"></i>发票保障</li>
						<li><i className="kuai"></i>快递包邮</li>
						<li><i className="tong"></i>同城三小时送达</li>
					</ul>
				</section>

				<section className="ovh pro-conf point">
					<p className="ovh">已选择：宝石蓝，行货128G，非合约机，官方标配</p>
				</section>

				{/*
					<section>
						<div className="ovh pro-shop point">
							<div className="ovh pro-simg">
								<img src="" />
							</div>
							<h5>迪信通上海官方旗舰店</h5>
						</div>
						<ul className="ovh pro-score">
							<li><p>描述相符<span>—</span></p></li>
							<li><p>发货速度<span>4.8分</span></p></li>
							<li><p>服务态度<span>—</span></p></li>
						</ul>
					</section>
				*/}

				<section className="ovh praise">
					<div className="ovh sec-title">
						<h4>评价<span>好评 98%</span></h4>
					</div>
					<ul className="ovh pra-list">
						<li>
							<div className="ovh pra-tit">
								<p>j***2</p>
								<i>2018-01-31</i>
							</div>
							<div className="ovh pra-con">系统不错，从p9过来的，操作顺滑。缺点是重，厚，续航没在意，都说续航好，感觉和8P差不多。黑边可以无视，透明的壳看上去还行，就是厚。最纠结的就是分辨率，当然没有网上说的那么不堪，但是很多软件没有适配，看字是有种模糊的感觉，屏幕的细腻程度比不上8P。其他也没啥了！争取都用几年！</div>
							<div className="ovh pra-img">
								<div className="ovh pra-pic">
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
								</div>
							</div>
						</li>
						<li>
							<div className="ovh pra-tit">
								<p>j***2</p>
								<i>2018-01-31</i>
							</div>
							<div className="ovh pra-con">系统不错，从p9过来的，操作顺滑。缺点是重，厚，续航没在意，都说续航好，感觉和8P差不多。黑边可以无视，透明的壳看上去还行，就是厚。最纠结的就是分辨率，当然没有网上说的那么不堪，但是很多软件没有适配，看字是有种模糊的感觉，屏幕的细腻程度比不上8P。其他也没啥了！争取都用几年！</div>
							<div className="ovh pra-img">
								<div className="ovh pra-pic">
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
									<span><img src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t28633/212/270471734/60340/9c7ecc9e/5bed72c7Ne39df99e.jpg!cc_100x100!q70.dpg" /></span>
								</div>
							</div>
						</li>
					</ul>
					<a className="ovh pra-more">查看更多评价</a>
				</section>

				<section className="ovh pro-hot">
					<div className="ovh sec-title">
						<h4>为你推荐</h4>
					</div>
					<ul className="ovh product">
						<li>
							<a href="product-view.html" className="ovh">
								<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
								<div className="ovh pro-con">
									<p>华为 nova 2全场手机支持分期可送货上门</p>
									<b>¥1299.00</b>
								</div>
							</a>
						</li>
						<li>
							<a href="product-view.html" className="ovh">
								<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
								<div className="ovh pro-con">
									<p>华为 nova 2全场手机支持</p>
									<b>¥1299.00</b>
								</div>
							</a>
						</li>
						<li>
							<a href="product-view.html" className="ovh">
								<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
								<div className="ovh pro-con">
									<p>华为 nova 2全场手机支持分期可送货上门</p>
									<b>¥1299.00</b>
								</div>
							</a>
						</li>
						<li>
							<a href="product-view.html" className="ovh">
								<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
								<div className="ovh pro-con">
									<p>华为 nova 2全场手机支持分期可送货上门</p>
									<b>¥1299.00</b>
								</div>
							</a>
						</li>
						<li>
							<a href="product-view.html" className="ovh">
								<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
								<div className="ovh pro-con">
									<p>华为 nova 2全场手机支持分期可送货上门</p>
									<b>¥1299.00</b>
								</div>
							</a>
						</li>
						<li>
							<a href="product-view.html" className="ovh">
								<img src="https://mercrt-fd.zol-img.com.cn/t_s200x200/g5/M00/00/05/ChMkJ1vGlZiIcwR2AAHKCnxiVUUAAsiIwLPvooAAcoi715.jpg" />
								<div className="ovh pro-con">
									<p>华为 nova 2全场手机支持分期可送货上门</p>
									<b>¥1299.00</b>
								</div>
							</a>
						</li>
					</ul>
				</section>

				<section className="ovh pro-profile">
					<ul className="ovh pro-pmenu">
						<li className="pro-pactive"><a className="ovh">商品介绍</a></li>
						<li><a className="ovh">规格参数</a></li>
						<li><a className="ovh">售后保障</a></li>
					</ul>
					<div className="ovh pro-pamain">

						{/*
							//商品介绍
							<div className="ovh">
								<img src="http://img20.360buyimg.com/cms/jfs/t1/5140/22/3378/131837/5b997dfcE3dfa188c/9aa35c01da39737a.jpg!q70.dpg" />
							</div>*/}

						{/*
							//规格参数*/}
							<div className="ovh pro-parameter">
							<ul className="ovh pro-pacon">
								<li>
									<h4><p>包装清单</p></h4>
									<div className="ovh pro-painfo">
										<p>装有 iOS 12 的 iPhone、采用闪电接头的 EarPods、闪电转 USB 连接线、USB 电源适配器、资料。</p>
									</div>
								</li>
								<li>
									<h4><p>商品参数</p></h4>
									<div className="ovh">
										<ul className="ovh pro-palist">
											<li>
												<ul className="ovh pro-msg">
													<li>
														<h6>商品编号</h6>
														<p>5089267</p>
													</li>
												</ul>
											</li>
											<li>
												<h5>主体</h5>
												<ul className="ovh pro-msg">
													<li>
														<h6>品牌</h6>
														<p>Apple</p>
													</li>
													<li>
														<h6>型号</h6>
														<p>iPhone 8</p>
													</li>
													<li>
														<h6>品牌</h6>
														<p>Apple</p>
													</li>
													<li>
														<h6>型号</h6>
														<p>iPhone 8</p>
													</li>
												</ul>
											</li>
											<li>
												<h5>主体</h5>
												<ul className="ovh pro-msg">
													<li>
														<h6>品牌</h6>
														<p>Apple</p>
													</li>
													<li>
														<h6>品牌</h6>
														<p>Apple</p>
													</li>
													<li>
														<h6>品牌</h6>
														<p>Apple</p>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						
						

						{/*售后保障*/}
						<div className="ovh pro-parameter">
							<ul className="ovh pro-pacon">
								<li>
									<div className="ovh pro-painfo">
										<p>
				                        京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。凭质保证书及京东商城发票，可享</p>
									</div>
								</li>
								<li>
									<h4><p>服务承诺</p></h4>
									<div className="ovh pro-painfo">
										<p>
				                        京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和<a href="javascript:;">运费政策</a>，请您放心购买！</p>
									</div>
								</li>
								<li>
									<h4><p>服务承诺</p></h4>
									<div className="ovh pro-painfo">
										<p>
				                        京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和<a href="javascript:;">运费政策</a>，请您放心购买！</p>
									</div>
								</li>
							</ul>
						</div>
						
					</div>
				</section>

				{/*<section className="ovh pro-sinfo point">
					<a href="javascript:;" className="ovh">查看图文详情</a>
				</section>*/}

				{/*<Popup />*/}

			</div>
		)
	}
}


export default ProDetail;