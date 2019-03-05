import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';	//Router：路由
import {Provider} from 'react-redux';	// Provider：简单说就是，App的所有子组件就默认都可以拿到state
import {store} from './store/index';	//Store：就是保存数据的地方，整个应用只能有一个 Store
import App from './app';	//app：主组件

//热更新（局部刷新，不刷新页面）
if(module.hot) module.hot.accept();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<App />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
)



