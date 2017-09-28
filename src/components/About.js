import React from 'react';
import '../styles/App.css';
import { Message, Header } from 'semantic-ui-react';

export default class About extends React.Component {
  render() {
    return (
      <Message floating className="App">
        <Header>About</Header>
        <p>Want to see the world? We can help with that.</p>
        <p>Life is too busy to waste time on planes, trains, and automobiles. Travel in an instant with Memory Makers.</p>
      </Message>
    )
  }
}
