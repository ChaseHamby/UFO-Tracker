import React from 'react';
import PropTypes from 'prop-types';
import favoriteSightingRequests from '../../helpers/data/favoriteSightingRequests';
import './LikeButton.css';

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
          .then((favoriteSighting) => {
            this.setState({ currentFavoriteSighting: favoriteSighting.data });
            });

      }

    //   deleteFavoriteSightings = () => {
    //     const { sightingId } = this.props;
    //     favoriteSightingRequests.getAllLikedPropertiesWithUser()
    //       .then((favoriteSightings) => {
    //         const filterMatchingProperty = likedProperties.filter(lp => lp.userId === userId && lp.propertyId === propertyId);
    //         const likedPropertyId = filterMatchingProperty[0].id;
    //         likedPropertyRequests.deleteLikedProperty(likedPropertyId)
    //           .then(() => {
    //           });
    //       });
    //   }

      render() {
          return (
            <button className="btn" onClick={this.addFavoriteSightings}><i className="far fa-heart fa-2x"/></button>
        );
      }
}

export default LikeButton;