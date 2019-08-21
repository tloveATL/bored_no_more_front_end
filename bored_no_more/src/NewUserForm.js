import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './App.css';
import UserProfile from './UserProfile'

class NewUserForm extends React.Component {
  constructor(){
    super()
    this.state = {
      "user": {
        "user_name": "",
        "password": ""
      }
    }
  }

  newUserLogin = (e) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "user": {
      "user_name": this.state.user.user_name,
      "password": this.state.user.password
    }
  })
})
.then(response => response.json())
.then(data => {
  if (data.jwt) {
    const jwt = data.jwt
    localStorage.setItem("jwt", jwt)
    window.location.href = "/profile"
  }
  else {
    alert(data.error)
    window.location.href = "/signup"
  }
})
}

render() {
    return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            <Image src='/logo.png' /> Create a new account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input onChange={(e) => {
                this.setState({user: {...this.state.user, user_name: e.target.value}})
              }} fluid icon='user' iconPosition='left' placeholder='Username' name='user_name' />
              <Form.Input onChange={(e) => {
                this.setState({user: {...this.state.user, password: e.target.value}})
              }} 
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                />
      
                <Button onClick={this.newUserLogin}color='blue' fluid size='large'>
                  Create Account
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
    );
  }
}



export default NewUserForm