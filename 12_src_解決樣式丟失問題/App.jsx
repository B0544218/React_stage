import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/atguigu/about">About</MyNavLink>
							<MyNavLink to="/atguigu/home">Home</MyNavLink>
							{/* 如果請求一個不存在的資源，react會回傳public的index.html(根部，但是這時
									其他index.html使用的路徑(ex. css)會亂掉，可以看boostrap.css的路徑)給我們 */}
							{/* 當路由結構，多層的結構，再重新整理的時候，就會抓不到public裡的bootstrap.css 
							其原因以當前路徑去找 : ./css/boostrap.css ，要改成css/boostrap.css */}
							{/* 另一種解決方法是將BrowserRouter使用HashRouter */}
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								
								<Routes>
									<Route path="/atguigu/about" element={<About />}/>
									<Route path="/atguigu/home" element={<Home />}/>
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
