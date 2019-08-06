import React from 'react';
import PropTypes from 'prop-types';
import favoriteSightingRequests from '../../helpers/data/favoriteSightingRequests';
import './LikeButton.css';
import Swal from 'sweetalert2';

class LikeButton extends React.Component {
  state =
  {
    currentFavoriteSighting: [],
    favoriteSightings: [],
  }

    static propTypes = {
      addFavoriteSightings: PropTypes.func,
      sightingId: PropTypes.number,
    }

    getAllFavoriteSightings = () => {
      favoriteSightingRequests.getAllFavoriteSightings()
        .then((favoriteSightings) => {
          this.setState({ favoriteSightings });
        });
    }

    componentDidMount() {
      this.getAllFavoriteSightings();
    }
      
    addFavoriteSightings = () => {
        const { sightingId } = this.props;
        const myFavoriteSighting = {
          sightingId
        };
          favoriteSightingRequests.createFavoriteSighting(myFavoriteSighting)
          Swal.fire({
            title: 'Added to your list of favorites!',
            width: 400,
            padding: '3em',
            background: '#fff url(https://singularityhub.com/wp-content/uploads/2017/12/alien-evolution-NASA-cauldron-of-stars-galaxy-center-PIA03654-1068x601.jpg)',
            backdrop: `
              rgba(11,0,12,0.4)
              center left
              no-repeat
            `
          })
          .then((favoriteSighting) => {
            this.setState({ currentFavoriteSighting: favoriteSighting.data });
            });

      }

      render() {
        
          return (
            <button className="rocket btn float-right mb-3" onClick={this.addFavoriteSightings}><i className="fa fa-rocket fa-2x"/></button>
        );
      }
}

export default LikeButton;