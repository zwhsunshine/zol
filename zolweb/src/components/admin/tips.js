import React,{Component} from 'react';

class Tips extends Component{
	render(){
		return (
			<div className="ptips">{this.props.txt}</div>
		)
	}
}

export default Tips;