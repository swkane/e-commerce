import React from 'react';
import '../styles/App.css';
import { Message, Header } from 'semantic-ui-react';


export default class Contact extends React.Component {
  render() {
    return (
      <Message floating className="App">
        <Header>Contact Us</Header>
        <p>In order to contact us, just a give a coin to the first Bravosi man you see and say 'Valar Morgulis'. He will know what to do.</p>
      </Message>
    )
  }
}
