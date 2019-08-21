import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Landing extends React.Component {

  render() {
    return (
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">

          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <div className="right item">
                <a className="ui inverted button" href="http://localhost:3001/login">Log in</a>
                <a className="ui inverted button" href="http://localhost:3001/signup">Sign Up</a>
              </div>
            </div>
          </div>

          <div className="ui text container">
            <h1 className="ui inverted header">
              BORED NO MORE
            </h1>
            <a className="ui huge primary button" href="http://localhost:3001/login">Get Started<i className="right arrow icon"></i></a>
          </div>
        </div>
      </div>
    )
  }
}