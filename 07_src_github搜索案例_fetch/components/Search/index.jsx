import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

	search = async()=>{
		
		const {keyWordElement:{value:keyWord}} = this
		//发送请求前通知List更新状态
		PubSub.publish('atguigu',{isFirst:false,isLoading:true})
		//#region 发送网络请求---使用axios发送
		/* axios.get(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				//请求成功后通知List更新状态
				PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
			},
			error => {
				//请求失败后通知App更新状态
				PubSub.publish('atguigu',{isLoading:false,err:error.message})
			}
		) */
		//#endregion
			
		//发送网络请求---使用fetch发送（未优化）
		// 聯繫服務器成功(fetch的功能，axios沒有)，跟是否執行成功的狀態碼毫無相關，聯繫 就是指能不能和服務器建立對話
		/* fetch(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				console.log('联系服务器成功了');
				// 記住這邊的response.json()是一個Promise實例對象
				return response.json()
			},
			error => {
				console.log('联系服务器失败了',error);
				return new Promise(()=>{})   // promise狀態為錯誤，因此不會往下個then執行

				!!!另外舉個例子，如果進入這個失敗的程式區塊，且又是非promise值，如下:
				error => {console.log('联系服务器失败了',error)  }
				這樣會發生這個then內所返回的promise狀態會是成功的!!!，此時會發現會往下執行console.log('获取数据成功了',response)
			}
		).then(
			response => {console.log('获取数据成功了',response);},
			error => {console.log('获取数据失败了',error);}
		) */

		//发送网络请求---使用fetch发送（优化）
		try {
			const response= await fetch(`/api1/search/users2?q=${keyWord}`)
			const data = await response.json()
			console.log(data);
			PubSub.publish('atguigu',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error);
			PubSub.publish('atguigu',{isLoading:false,err:error.message})
		}
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}

