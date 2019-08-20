import React from 'react';

// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import UserProfile from './UserProfile'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
    
      <div className="App">
      <Switch>
        <Route exact path='/signup' render={() =>  <NewUserForm />} />
        <Route exact path='/login' render={() => <LoginForm/>} />
        <Route exact path='/profile' render={() => <UserProfile/>} />
      </Switch>
       
      </div>
  );
}
}

export default App;
