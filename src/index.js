import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BaseLayout from './components/Layout';
import Contact from './components/Contact';
import About from './components/About';
import Beach from './components/Beach';
import Mountains from './components/Mountains';
import Metropolitan from './components/Metropolitan';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/beach' component={Beach} />
        <Route path='/mountains' component={Mountains} />
        <Route path='/metropolitan' component={Metropolitan} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
