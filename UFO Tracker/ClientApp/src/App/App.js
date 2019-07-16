import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Map from '../components/Map/Map';
import './App.scss';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Map />
           <Route exact path='/' component={Map} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
    );
  }
}
