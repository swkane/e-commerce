import React from 'react';
import '../styles/App.css';
import { mountains } from '../data/data';
import { Button, Grid, Card, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Mountains extends React.Component {
  render() {
    return (
      <div className="App">
        <Header as='h3' block>Mountains</Header>
          <Grid columns={3} centered>
            {mountains.map((spot, i) => {
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
        <Link to='/metropolitan'><Button className='check-out'>Check Out Metropolitan Areas</Button></Link>
      </div>
    )
  }
}
