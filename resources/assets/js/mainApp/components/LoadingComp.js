import React, { Component } from "react";

export default class LoadingComp extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false
    };
  }
  
  render() {
    return (
        <section id="loading-comp" className={(this.props.initialData == 'loading') ? 'active' : ''}>
          <div className="loading-icon">
            <div className="loadingio-spinner-spinner-gtpmo9et4hv"><div className="ldio-9vciq4zbfjf">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
          </div>
          <div className="loading-text">
            Loading!
          </div>
        </section>
    );
  }
}

