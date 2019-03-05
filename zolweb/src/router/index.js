import React from 'react';
import {Route} from 'react-router-dom';

//前端组件
import Home from '../pages/web/home';
import Category from '../pages/web/category';
import Cart from '../pages/web/cart';
import Personal from '../pages/web/personal';
import Manage from '../pages/web/manage';
import Password from '../pages/web/password';
import Address from '../pages/web/address';
import AddressDetail from '../pages/web/addressDetail';
import OrderList from '../pages/web/orderList';
import Order from '../pages/web/order';
import Pay from '../pages/web/pay';
import PaySuccess from '../pages/web/paySuccess';
import Collection from '../pages/web/collection';
import Login from '../pages/web/login';
import Register from '../pages/web/register';
import Product from '../pages/web/product';
import ProDetail from '../pages/web/proDetail';

//后台组件
import Admin from '../pages/admin/home';
import Types from '../pages/admin/type';
import TypeDetail from '../pages/admin/typeDetail';
import SNav from '../pages/admin/nav';
import NavDetail from '../pages/admin/navDetail';
import SProduct from '../pages/admin/product';
import SProDetail from '../pages/admin/proDetail';
import User from '../pages/admin/user';


//路由表
let routes = [
	{
		path:'/',
		component:Home,
		id:1,
		children:[
			{
				path:'/category',
				component:Category,
				id:101
			},
			{
				path:'/cart',
				component:Cart,
				id:102
			},
			{
				path:'/personal',
				component:Personal,
				id:103,
				children:[
					{
						path:'/manage',
						component:Manage,
						id:10301
					},
					{
						path:'/password',
						component:Password,
						id:10302
					},
					{
						path:'/address',
						component:Address,
						id:10303
					},
					{
						path:'/addressDetail',
						component:AddressDetail,
						id:10304
					},
				]
			},
			{
				path:'/orderList',
				component:OrderList,
				id:104,
				children:[
					{
						path:'/order',
						component:Order,
						id:10401,
					},
					{
						path:'/pay',
						component:Pay,
						id:10402,
					},
					{
						path:'/paySuccess',
						component:PaySuccess,
						id:10403,
					},
					{
						path:'/collection',
						component:Collection,
						id:10404,
					},
					{
						path:'/login',
						component:Login,
						id:10405,
					},
					{
						path:'/register',
						component:Register,
						id:10406,
					},
					{
						path:'/product',
						component:Product,
						id:10407,
					},
					{
						path:'/proDetail',
						component:ProDetail,
						id:10408,
					}
				]
			}
		]
	},
	{
		path:'/admin',
		component:Admin,
		id:2,
		children:[
			{
				path:'/admin/types',
				component:Types,
				id:201,
			},
			{
				path:'/admin/typesDetail',
				component:TypeDetail,
				id:2011,
			},
			{
				path:'/admin/product',
				component:SProduct,
				id:202,
			},
			{
				path:'/admin/proDetail',
				component:SProDetail,
				id:203,
			},
			{
				path:'/admin/nav',
				component:SNav,
				id:204,
			},
			{
				path:'/admin/navDetail',
				component:NavDetail,
				id:205,
			},
			{
				path:'/admin/user',
				component:User,
				id:209,
			}
		]
	}	
];


//生成Route
let arr = [];
function render(routers){
	routers.forEach((e,i)=>{
		arr.push(<Route path={e.path} component={e.component} key={e.id} exact />);
		if(e.children){
			render(e.children);
		}
	})
	return arr;
}

export default render(routes);

