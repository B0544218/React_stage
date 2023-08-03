import React, { Component } from 'react'
import Go from './go.jsx'

export default class News extends Component {
	render() {
		return (
			<ul>
				<Go></Go>
				<li>news001</li>
				<li>news002</li>
				<li>news003</li>
			</ul>
		)
	}
}
