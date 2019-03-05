import React,{Component} from 'react';
import '../../static/admin/css/header.less';

class MyHeader extends Component{
	render(){
		return (
			<div className="ovh sys-header">
				<a className="ovh logo"><img src={require('../../static/admin/images/logo.png')} /></a>
				<div>
					<a href="javascript:;">您好，mysunshine</a>
					<a href="javascript:;">退出</a>
				</div>
			</div>
		)
	}
}

export default MyHeader;