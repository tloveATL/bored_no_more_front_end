import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './App.css';
import NewUserForm from './NewUserForm'
import image from './what.jpg'

class UserProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      "user": {
        "user_name": "",
        "password": ""
      }
    }
  }
debugger;
  componentWillMount = (e) => {
    const jwt = localStorage.jwt
    fetch('http://localhost:3000/profile', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + `${jwt}`
      },
    })
.then(response => response.json())
.then(data => console.log(data))
}

render() {
    return (
<div className="ui centered card">
  <div className="image">
    <img src={image} />
  </div>
  <div className="content">
    <a className="header">Username</a>
    <div className="meta">
      <span className="date">Completed x Activities</span>
    </div>
    <div className="description">
    Find Something to Do!
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
      22 Completed Activities
    </a>
  </div>
</div>
  )
  }
}



export default UserProfile