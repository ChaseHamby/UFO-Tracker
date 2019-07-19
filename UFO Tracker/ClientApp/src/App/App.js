import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Map from '../components/Map/Map';
import './App.scss';

// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   let routeChecker = props => (authed === false
//     ? (<Component {...props} {...rest} />)
//     : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   let routeChecker = props => (authed === true
//     ? (<Component {...props} {...rest} />)
//     : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };

export default class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            {/* <Map /> */}
           <Route exact path='/' component={Map} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
    );
  }
}
