import React, { Component } from "react";

export default class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false
    };
  }
  clickedDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  };
  render() {
    return (
        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name" onClick={this.clickedDropdown}>John Doe</div>
            <div className="icon" onClick={this.clickedDropdown}>
              <i className="fas fa-chevron-down" />
            </div>

            <div className={`dropdown ${this.state.dropdown ? 'active' : ''}`}>
              <nav>
                <a href="/account">account</a>
                <a href="/logout">logout</a>
              </nav>
            </div>
          </div>
          <div className="groups">
            <div className="group">
              <div className="title">Title</div>
              <ul>
                <li>
                  <a href="/logout">Logout</a>
                </li>
                <li>link</li>
                <li>link</li>
              </ul>
            </div>
          </div>
        </section>
    );
  }
}
