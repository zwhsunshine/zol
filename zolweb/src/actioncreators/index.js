import * as types from './actionTypes';

// action: 全局发布的动作指令，定义事件行为

//商品分类
export function gettypes(proTypes,lnone){
	if( !proTypes.length ){
		return (dispatch) => {
			fetch('http://localhost/api/types?act=get')
			.then(e=>e.json())
			.then(d=>{
				if( !(d.data.length) ){
					if( lnone ){
						lnone.style.display = 'block';
					}
				}else{
					if( lnone ){
						lnone.style.display = 'none';
					}
				}
				dispatch({
					type:types.GETTYPES,
					ptypes:d.data
				})
			})
		}
	}else{
		return (dispatch) => {
			if( lnone ){
				lnone.style.display = 'none';
			}
			dispatch({
				type:types.GETTYPES,
				ptypes:proTypes
			})	
		}
	}
}


//商品信息
export function getpro(products,lnone){
	if( !products.length ){
		return (dispatch) => {
			fetch('http://localhost/api/products?act=get')
			.then(e=>e.json())
			.then(d=>{
				if( !(d.data.length) ){
					if( lnone ){
						lnone.style.display = 'block';
					}
				}else{
					if( lnone ){
						lnone.style.display = 'none';
					}
				}
				dispatch({
					type:types.GETPRODUCT,
					data:d.data
				})
			})
		}
	}else{
		return (dispatch) => {
			if( lnone ){
				lnone.style.display = 'none';
			}
			dispatch({
				type:types.GETPRODUCT,
				data:products
			})	
		}
	}
}


//设置Cookie
export function setCookie(key,val,obj={}){
	return (dispatch) => {
		let d = new Date();
	    let {name,time} = obj;
	    switch(name){
	        case 'date' :
	            d.setDate(d.getDate() + time);
	        break;
	        case 'minu' :
	            d.setMinutes(d.getMinutes() + time);
	        break;
	        case 'hour' :
	            d.setHours(d.getHours() + time);
	        break;
	    }
	    document.cookie = key +'='+ val + (obj.time?'; expires='+ d:'');
	    dispatch({
	    	type:null
	    })
	}
}


//获取Cookie
export function getCookie(key){
	return (dispatch) => {
		let c = document.cookie.split('; ');
	    let on = false;
	    for(let i of c){
	        let arr = i.split('=');
	        if(arr[0] === key){
	            on = true;
	            dispatch({
	            	type:types.GETCOOKIE,
	            	username:arr[1]
	            });
	            return;
	        }
	    }
	    if(!on)return null;
	}
}


//移除Cookie
export function rmCookie(key,val){
    setCookie(key,val,{name:'date',time:-1});
}


