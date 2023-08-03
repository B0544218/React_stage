import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Routes,Navigate} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
	render() {
		return (
				<div>
					<h3>我是Home的内容</h3>
					<div>
						<ul className="nav nav-tabs">
							<li>
								{/* 注意這邊新版React是要這樣寫 */}
								<MyNavLink to="news">News</MyNavLink>
							</li>
							<li>
								<MyNavLink to="message">Message</MyNavLink>
							</li>
						</ul>
						{/* 注册路由 */}
						
						<Routes>
							{/* 注意，這邊的路徑已經來到http://localhost:3000/home/ 了 */}
							<Route path="news" element={<News />}/>
							<Route path="message" element={<Message />}/>
							<Route path="/" element={<Navigate to ="news" />}/>
						</Routes>
					</div>
				</div>
			)
	}
}
