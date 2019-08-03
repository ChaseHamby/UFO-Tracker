import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Map from '../components/Map/Map';
import './App.css';
import ReportSighting from '../components/ReportSighting/ReportSighting';
import FavoriteSightings from '../components/FavoriteSightings/FavoriteSightings';

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

  //     const imageBuilder = () => filteredSightings.map(filteredSighting => {
//       if (filteredSighting.image.length > 0) {
//         return <img className='popImage' src={filteredSighting.image}></img>;
//     } else {
//       return null;
//   }
// });

  render() {

    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
        <Navbar />
          <Switch>
            {/* <Map /> */}
           <Route exact path='/' component={Map} />
           <Route exact path='/report' component={ReportSighting} />
           <Route exact path='/favorites' component={props => <FavoriteSightings {...props}/>}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
    );
  }
}
