import React,{Component} from 'react';

class SeaHeader extends Component{
	render(){
		return (
			<header class="per-head">
				<a href="personal.html" class="ovh return"></a>
				<div class="ovh head-con"><input type="text" placeholder="华为 nova" /></div>
				<a href="javascript:;" class="ovh head-more">···</a>
			</header>
		)
	}
}


export default SeaHeader;