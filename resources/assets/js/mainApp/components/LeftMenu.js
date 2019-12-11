import React, { Component } from "react";

export default class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aslam"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name">John Doe</div>
            <div className="icon">
              <i className="fas fa-chevron-down" />
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

