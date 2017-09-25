import React from 'react';
import '../styles/App.css';
import { beach } from '../data/data';
import florida from '../images/florida.jpeg';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Beach extends React.Component {
  render() {
    return (
      <div className="App">
        Beach
        {beach.map((spot, i) => {
          return <div key={i}>
            <p>Title: {spot.title}</p>
            <img src={florida} alt={spot.title} />
            <p>Description: {spot.description}</p>
            <p>Price: {spot.price}</p>
          </div>
        })}
        <Link to='/mountains'><Button>Check Out the Mountains</Button></Link>
      </div>
    )
  }
}
