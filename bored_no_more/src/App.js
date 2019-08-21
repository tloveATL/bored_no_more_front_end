import React from 'react';

// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Landing from './Landing'
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import UserProfile from './UserProfile'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class App extends React.Component {

  logout = (event) => {
    localStorage.setItem("jwt", null)
    window.location.href = "/"
  }

  render(){
    return (
      <div>
        <div class="ui inverted vertical masthead center aligned segment">
          <div class="ui container">
            <div class="ui large secondary inverted pointing menu">
              {localStorage.jwt !== "null" ?
              <button type="button" class="item" onClick={this.logout}>Logout</button>
              : null}
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path='/' render={() =>  <Landing />} />
          <Route exact path='/signup' render={() => localStorage.jwt !== "null" ? <Redirect to='/profile' /> : <NewUserForm />} />
          <Route exact path='/login' render={() => localStorage.jwt !== "null" ? <Redirect to='/profile' /> : <LoginForm />} />
          <Route exact path='/profile' render={() => <UserProfile/>} />
        </Switch>
      </div>
    );
  } 
}

export default App;
