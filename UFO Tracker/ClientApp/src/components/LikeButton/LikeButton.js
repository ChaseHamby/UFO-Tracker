import React from 'react';
import PropTypes from 'prop-types';
import favoriteSightingRequests from '../../helpers/data/favoriteSightingRequests';
import './LikeButton.css';

class LikeButton extends React.Component {
  state =
  {
    currentFavoriteSighting: [],
    favoriteSightings: [],
    isLiked: false,
  }

    static propTypes = {
      isLiked: PropTypes.bool,
      addFavoriteSightings: PropTypes.func,
      changeIsLikedState: PropTypes.func,
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

    changeIsLikedState = () => {
        this.setState({ isLiked: true });
      }

    changeIsLikedStateEvent = () => {
      const { changeIsLikedState } = this.props;
      this.addFavoriteSightings();
      changeIsLikedState();
    };

    addFavoriteSightings = () => {
        const { sightingId, isLiked } = this.props;
        const myFavoriteSighting = {
          sightingId
        };
        if (!isLiked) {
            favoriteSightingRequests.createFavoriteSighting(myFavoriteSighting)
            .then((favoriteSighting) => {
              this.setState({ currentFavoriteSighting: favoriteSighting.data });
            });
        } else {
        //   this.deleteFavoriteSightings();
        }
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
        const { isLiked } = this.props;
        const makeLikedFavoriteButton = () => {
          if (isLiked === false) {
            return (
                <button className="btn" onClick={this.addFavoriteSightings}><i id="!isLiked" className="far fa-heart fa-2x"/></button>
            );
          }
          return (
                <button className="btn float-right" onClick={this.changeIsLikedStateEvent}><i id="isLiked" className="fas fa-heart fa-2x"/></button>
          );
        };
        return (
            <div className="float-right">{makeLikedFavoriteButton()}</div>
        );
      }
}

export default LikeButton;