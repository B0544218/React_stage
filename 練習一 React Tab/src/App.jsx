import React, { Component } from 'react'
import Content from './component/Content.jsx'
import Tabs from './component/Tabs.jsx'
import './App.css'


const tabData = [
	{ name: 'Tab 1', isActive: true },
	{ name: 'Tab 2', isActive: false },
	{ name: 'Tab 3', isActive: false }
  ];
export default class App extends Component {
	constructor() {
		super();
		this.state = {
		  activeTab: tabData[0]
		};
	  }
	  handleClick = (tab) => {
		this.setState({ activeTab: tab });
	  };
	
	  render() {
		return (
		  <div id="root">
			<Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
			<Content activeTab={this.state.activeTab} />
		  </div>
		);
	  }
}
