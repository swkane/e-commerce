import React, { Component } from 'react';
import '../styles/App.css';
import { Message, Button, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Message floating className="App">
        <Header>Welcome</Header>
        <p>Lets make a memory together</p>
        <NavLink to='/beach'><Button primary>Explore!</Button></NavLink>
      </Message>
    );
  }
}

export default App;
