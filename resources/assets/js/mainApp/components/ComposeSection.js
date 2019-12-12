import React, { Component } from "react";
import axios from 'axios';

export default class ComposeSection extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aslam"
    };
  }
  
  submitForm = async () => {
    try{
      const post = await axios.post('/api/post', {
        content: 'Hey i just went to tim hortons',
        user_id: 1,
        type: 'text',

      })
      console.log(post)
    } catch(error){
      console.log(error)
    }
  }

  render(){
    return (
      <section className="compose-section">
        <textarea name="name" rows={8} cols={80} defaultValue={""} />
        <div className="user-img" />
        <div className="buttons">
          <div className="button photo-btn">
            <i className="fas fa-camera-retro" />
          </div>
          <div className="button video-btn">
            <i className="fas fa-video" />
          </div>
          <div className="button send-btn" onClick={this.submitForm}>
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </section>
    );
  }
}
