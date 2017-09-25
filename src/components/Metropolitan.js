import React from 'react';
import '../styles/App.css';
import { metropolitan } from '../data/data';
import nyc from '../images/nyc.jpg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Metropolitan extends React.Component {
  render() {
    return (
      <div className="App">
        Metropolitan
        {metropolitan.map((spot, i) => {
          return <div key={i}>
            <p>Title: {spot.title}</p>
            <img width="200px" src={nyc} alt={spot.title} />
            <p>Description: {spot.description}</p>
            <p>Price: {spot.price}</p>
          </div>
        })}
        <Link to='/beach'><Button>Check Out the Beach</Button></Link>
      </div>
    )
  }
}
