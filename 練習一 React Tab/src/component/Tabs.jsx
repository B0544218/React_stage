import React, { Component } from 'react'
import Tab from './Tab.jsx'
const tabData = [
    { name: 'Tab 1', isActive: true },
    { name: 'Tab 2', isActive: false },
    { name: 'Tab 3', isActive: false }
  ];
  
  
  export default class Tabs extends Component {
    render() {
      return (
        <ul className="nav nav-tabs">
          {tabData.map((tab) => (
            <Tab
              key={tab.name}
              data={tab}
              isActive={this.props.activeTab === tab}
              handleClick={() => this.props.changeTab(tab)}
            />
          ))}
        </ul>
      );
    }
  }
