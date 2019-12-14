import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios';
import ComposeSection from "./ComposeSection";
import Posts from "./Posts";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aslam"
    };
  }

  componentDidMount(){
    const { match, location, history } = this.props.routeProps
    const self = this

    const getUser = async function(){
      try{
        const userProfile = await axios.get(`/api/user/${match.params.id}`)

        self.setState({
          initialData: self.props.initialData,
          userProfile: userProfile.data[0]
        }, () => {
          console.log(self.state)
        })
      } catch(error){
        console.log(error)
      }
    }
    getUser()
  }

  render() {
    

    if(this.state.userProfile !== undefined){
      const { first_name, last_name } = this.state.userProfile
      return (
        <div className="content-area profile-page">
          <div className="user-img"><img src="" /></div>
          <div className="info">
            <h1>{`${first_name} ${last_name}`}</h1>
            <div className="follow-btn">Follow</div>
          </div>
        </div>
      );
    } else{
      return (
        <div className="content-area profile-page">
          Loading
        </div>
      );
    }
  }
}
