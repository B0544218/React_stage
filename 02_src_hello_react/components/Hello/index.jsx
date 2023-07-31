import React,{Component} from 'react'
import hello from './index.module.css'

export default class Hello extends Component{
	render(){
		// 由於Hello和Welcome之後都會被引入到App.jsx，這可能會發生衝突
		// 這樣寫hello.title的方式相比於只寫title，可以解決和Welcome相同css名稱的衝突
		return <h2 className={hello.title}>Hello,React!</h2>
	}
}
