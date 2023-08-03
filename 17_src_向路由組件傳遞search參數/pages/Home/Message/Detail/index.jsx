import React, { Component } from 'react'
import {useSearchParams} from 'react-router-dom'
const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]

function Det () {
	// 接收params参数，useSearchParams()不能寫在class compnent中
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id")
	const title = searchParams.get("title")
	console.log('id: ', id)
	const findDetailsData = DetailData.find((detailObj)=>{
		return detailObj.id === id
	})
	return (
		<ul>
			<li>ID: {id}</li>
			<li>Title: {title}</li>
			<li>Content: {findDetailsData.content}</li>
		</ul>
	)
}

export default class Detail extends Component {
	render() {
		return (
			<ul>
				<Det />
			</ul>
		)
	}
}
