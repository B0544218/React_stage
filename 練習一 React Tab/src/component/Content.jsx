import React, { Component } from 'react'

export default class Content extends Component {
    render() {
      const { activeTab } = this.props;
      return (
        <div>
          {activeTab.name === 'Tab 1' ? (
            <section className="panel panel-success">
              <h2 className="panel-heading">Content 1</h2>
              <p className="panel-body">Bacon.</p>
              <p className="panel-body">Shoulder.</p>
            </section>
          ) : null}
          {activeTab.name === 'Tab 2' ? (
            <section className="panel panel-warning">
              <h2 className="panel-heading">Content 2</h2>
              <p className="panel-body">Atlantic.</p>
              <p className="panel-body">Pike.</p>
            </section>
          ) : null}
          {activeTab.name === 'Tab 3' ? (
            <section className="panel panel-danger">
              <h2 className="panel-heading">Content 3</h2>
              <p className="panel-body">Turnip .</p>
              <p className="panel-body">Beetroot.</p>
            </section>
          ) : null}
        </div>
      );
    }
  }