import React from 'react';
import PropTypes from 'prop-types';
import propertiesShape from '../../helpers/propz/propertiesShape';
import './SingleSighting.css';
import LikeButton from '../LikeButton/LikeButton';
import favoriteSightingRequests from '../../helpers/data/favoriteSightingRequests'

class SingleSighting extends React.Component {

  render() {

    return (
      <tr>
        <td>{this.props.dateOfEvent}</td>
        <td>
            <div>
                <div>{this.props.city}, {this.props.state}</div>
                <div>{this.props.streetAddress}</div>
                <div>{this.props.zipcode}</div>
            </div>
        </td>
        <td>{this.props.description}</td>
        <td> <button id={this.props.sightingId} className="btn-primary" onClick={this.props.deleteFavoriteSighting}>Remove</button></td>
      </tr>
    );
  }
}

export default SingleSighting;