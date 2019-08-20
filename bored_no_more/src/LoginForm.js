import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import NewUserForm from './NewUserForm'
import {Link} from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(){
    super()
    this.state = {
      "user": {
        "user_name": "",
        "password": "",
        "jwt": ""
      }
    }
  }

  userLogin = (e) => {
    fetch('http://localhost:3000/login', {
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
  const jwt = data.jwt
  localStorage.setItem("jwt", jwt)
})
}

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              <Image src='/logo.png' /> Log in to your account
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
      
                <Button onClick={this.userLogin}color='blue' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Link to='/signup'>
            <button 
              type="button"
              className="link-button" 
              >Click here to sign up
            </button>
            </Link>
          </Grid.Column>
        </Grid>
    );
  }
}



export default LoginForm