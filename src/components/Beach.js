import React from 'react';
import '../styles/App.css';
import { beach } from '../data/data';
import { Button, Card, Image, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Beach extends React.Component {
  render() {
    return (
      <div className="App">
        <Header as='h3' block>Beach</Header>
        <Grid columns={3} centered>
            {beach.map((spot, i) => {
              return <Grid.Column key={i}>
                <Card className="result">
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
        <Link to='/mountains'><Button className="check-out">Check Out the Mountains</Button></Link>
      </div>
    )
  }
}
