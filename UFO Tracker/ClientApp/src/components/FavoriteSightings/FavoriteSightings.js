import React from 'react'
import './FavoriteSightings.css';
import SingleSighting from '../SingleSighting/SingleSighting';
import favoriteSightingRequests from '../../helpers/data/favoriteSightingRequests'

    
class FavoriteSightings extends React.Component {

    state = {
        favoriteSightings: []
    }

    getAllFavoriteSightings = () => {
      favoriteSightingRequests.getAllFavoriteSightings()
        .then((favoriteSightings) => {
          console.log(favoriteSightings)
          this.setState({ favoriteSightings });
        });
    }

    componentDidMount() {
        this.getAllFavoriteSightings();
    }

    deleteFavoriteSighting = (e) => {
      favoriteSightingRequests.deleteFavoriteSighting(e.currentTarget.id)
      .then(() => {
        this.getAllFavoriteSightings()
      });
    }

    render(){

        const { favoriteSightings } = this.state;

        const sightingBuilder = favoriteSightings.map((favoriteSighting) => {
            return (
              <SingleSighting
                sightingId = {favoriteSighting.sightingId}
                dateOfEvent = {favoriteSighting.dateOfEvent}
                description = {favoriteSighting.description}
                city={favoriteSighting.city}
                state={favoriteSighting.state}
                streetAddress={favoriteSighting.streetAddress}
                zipcode={favoriteSighting.zipcode}
                deleteFavoriteSighting={this.deleteFavoriteSighting}
              />);
          });
        return(
            <div className="sightingContainer">
            <table className="table table-striped table-hover table-light mt-5">
              <thead>
                <tr>
                  <th>Date of Event</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  {sightingBuilder}
              </tbody>
            </table>
          </div>
        )
    }
}


export default FavoriteSightings