import React from 'react';
import '../styles/App.css';
import { mountains } from '../data/data';
import rocky from '../images/rocky.jpg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Mountains extends React.Component {
  render() {
    return (
      <div className="App">
        Mountains
        {mountains.map((spot, i) => {
          return <div key={i}>
            <p>Title: {spot.title}</p>
            <img width="200px" src={rocky} alt={spot.title} />
            <p>Description: {spot.description}</p>
            <p>Price: {spot.price}</p>
          </div>
        })}
        <Link to='/metropolitan'><Button>Check Out Metropolitan Areas</Button></Link>
      </div>
    )
  }
}
