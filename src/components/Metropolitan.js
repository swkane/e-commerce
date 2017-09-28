import React from 'react';
import '../styles/App.css';
import { metropolitan } from '../data/data';
import { Button, Card, Image, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Metropolitan extends React.Component {
  render() {
    return (
      <div className="App">
        <Header as='h3' block>Metropolitan</Header>
        <Grid columns={3} centered>
          {metropolitan.map((spot, i) => {
            return <Grid.Column key={i}>
            <Card>
              <Image src={spot.img} alt={spot.title} />
              <Card.Content>
                <Card.Header>Title: {spot.title}</Card.Header>
                <Card.Description>Description: {spot.description}</Card.Description>
                <Card.Description>Price: {spot.price}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        })}
        </Grid>
        <Link to='/beach'><Button className='check-out'>Check Out the Beach</Button></Link>
      </div>
    )
  }
}
