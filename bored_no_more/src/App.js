import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './LoginForm'

class App extends React.Component {
  render(){
  return (
    
    <div className="App">
      <LoginForm/>
    </div>
  );
}
}

export default App;
