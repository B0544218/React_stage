//创建“外壳”组件App
import React,{Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 為了方便管理，我們可以將.js改成.jsx代表這是組件(當然也可以不改，反正我們可以光看字母大小寫來判斷)
// 引入組件的時候.js和.jsx都可以省略

//令物，'./components/Hello'由於裡面檔案是index.jsx，因此引入的時候可以省略


//创建并暴露App组件
export default class App extends Component{
	render(){
		return (
			<div>
				<Hello/>
				<Welcome/>
			</div>
		)
	}
}
