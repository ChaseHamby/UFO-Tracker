import React from 'react';
import './SingleSighting.css';

class SingleSighting extends React.Component {

  render() {

    const { locatingSighting } = this.props;

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
      </tr>
    );
  }
}

export default SingleSighting;