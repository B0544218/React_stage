import React, { Component } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from "./Detail";

const messageArr = [
    {id:'01', title:'message001'},
    {id:'02', title:'message002'},
    {id:'03', title:'message003'}
  ]

export default class index extends Component {
	handlePushNavigate = (id, title) => {
		const navigate = useNavigate();

		navigate('detail', { state: { id: id, title: title } });
	}
	handleReplaceNavigate = (id, title) => {
		const navigate = useNavigate();

		navigate('detail', { state: { id: id, title: title }, replace: true });
	}
	render() {
		return (
			<div>
			  <ul>
				{
				  messageArr.map((msgObj)=>{
					return <li key={msgObj.id}>
					  &nbsp;<button type="button" className="btn btn-light" onClick={()=>this.handlePushNavigate(msgObj.id, msgObj.title)}>push查看</button>
					  &nbsp;<button type="button" className="btn btn-primary" onClick={()=>this.handleReplaceNavigate(msgObj.id, msgObj.title)}>replace查看</button>
					</li>
				  })
				}
			  </ul>
			  <hr/>
			  <Routes>
				<Route path="detail" element={<Detail/>} />
			  </Routes> 
			</div>
		  );
	}
}

