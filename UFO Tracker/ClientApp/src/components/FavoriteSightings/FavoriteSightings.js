import React from 'react'
import './FavoriteSightings.css';
import sightingRequests from '../../helpers/data/sightingRequests';
import userRequests from '../../helpers/data/userRequests';
import locationSightingsRequests from '../../helpers/data/locationSightingsRequests';
import SingleSighting from '../SingleSighting/SingleSighting';

    
class FavoriteSightings extends React.Component {

    state = {
        locationSightings: []
    }

    getLocationsWithSightings = () => {
        locationSightingsRequests.getLocationsWithSightings()
            .then((data) => {
                this.setState({ locationSightings: data})
            })
    }

    componentDidMount() {
        this.getLocationsWithSightings();
    }

    render(){

        const { locationSightings } = this.state;

        const sightingBuilder = locationSightings.map((locationSighting) => {
            return (
              <SingleSighting
                dateOfEvent = {locationSighting.dateOfEvent}
                description = {locationSighting.description}
                city={locationSighting.city}
                state={locationSighting.state}
                streetAddress={locationSighting.streetAddress}
                zipcode={locationSighting.zipcode}
                getLocationsWithSightings={this.getLocationsWithSightings}
              />);
          });
        return(
            <div>
            <table className="table table-striped table-hover table-light mt-5">
              <thead>
                <tr>
                  <th>Date of Event</th>
                  <th>Location</th>
                  <th>Description</th>
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