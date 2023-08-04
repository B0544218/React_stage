import React, { Component } from 'react'

export default class Tab extends Component {
    render() {
      return (
        <li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
          <a href="#">{this.props.data.name}</a>
        </li>
      );
    }
  }

