import React,{Component} from 'react';

class PerHeader extends Component{
	goback = () => {
		this.props.history.go(-1);
	}
	render(){
		return (
			<header className="per-head">
				<a className="ovh return" onClick={this.goback}></a>
				<div className="ovh head-con">{this.props.title}</div>
				{/*<a href="javascript:;" className="ovh por head-more exit">退出</a>*/}
			</header>
		)
	}
}


export default PerHeader;