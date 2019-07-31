import React from 'react';
import PropTypes from 'prop-types';
import propertiesShape from '../../helpers/propz/propertiesShape';
import './SingleSighting.css';
import LikeButton from '../LikeButton/LikeButton';

class SingleSighting extends React.Component {

  render() {


    const { favoriteSighting } = this.props;

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
        <div className=" button">
        </div>    
      </tr>
    );
  }
}

export default SingleSighting;