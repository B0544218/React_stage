import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
	render() {
		console.log(this.props);
		return (
			<NavLink style={({ isActive }) => {	return {
					fontWeight: isActive ? "bold" : "",
					color: isActive ? "white" : "black",
				};
			}} className="list-group-item" {...this.props}>
				{this.props.children}
			</NavLink>
		)
	}
}
