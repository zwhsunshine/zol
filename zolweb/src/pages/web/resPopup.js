import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ResPopup extends Component{
	close = () =>{
		this.props.closePop();
	}
	success = () => {
		this.props.successReg();
	}
	render(){
		return (
			<div className="ovh popup">

				{/*弹窗选择*/}
				<div className="ovh pop-con">
					
					{/*服务说明*/}
					<div className="ovh pop-ser pop-reg">
						<div className="ovh pop-main">
							<h5 className="ovh pop-stitle">注册协议及隐私政策</h5>
							<div className="ovh pop-center">
								<ul className="ovh pop-service">
									<li>
										<p>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，<a href="#">条款</a>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议</p>
										<p>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，<a href="#">条款</a>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="ovh pop-btn">
							<a onClick={this.close}>不同意</a>
							<a className="pop-buy" onClick={this.success}>同意 ( 立即登录 ) </a>
						</div>
					</div>

					<a href="javascript:;" className="ovh pop-close">×</a>
				</div>

			</div>
		)
	}
}


export default ResPopup;





