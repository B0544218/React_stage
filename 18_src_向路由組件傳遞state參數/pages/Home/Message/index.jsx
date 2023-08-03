import React, { Component } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
	state = {
		messageArr:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'},
		]
	}
	render() {
		console.log('message')
		console.log(this.props)
		const {messageArr} = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									{/* 向路由组件传递params参数 */}
									{/* param */}
									{/* <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
									{/* search */}
									{/* <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
									{/* state */}
									{/* state是放在react前端路由裡面，跟component內的state不一樣 */}
									<Link to={`detail`} state={{id:msgObj.id, title:msgObj.title}}>{msgObj.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				<Routes>
					{/* <Route path="detail/:id/:title" element={<Detail />}/> */}
					<Route path="detail" element={<Detail />}/>
				</Routes>
			</div>
		)
	}
}
