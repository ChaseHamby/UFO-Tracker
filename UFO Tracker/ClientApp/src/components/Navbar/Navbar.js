import React from 'react';
import './Navbar.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import SearchField from "react-search-field";
import locationSightingsRequests from '../../helpers/data/locationSightingsRequests';

class Navbar extends React.Component {
    state = {
        sightings: [],
        filteredSightings: []
    }

    getLocationsWithSightings = () => {
        locationSightingsRequests.getLocationsWithSightings()
            .then((data) => {
                this.setState({ sightings: data})
            })
    }

    onSearchChange = (value, event) => {
    const { sightings } = this.state;
    const filteredSightings = [];
    console.log(sightings);
    event.preventDefault();
    if (!value) {
        this.setState({ filteredSightings: sightings });
    } else {
        sightings.forEach((sighting) => {
        if (sighting.city.toLowerCase().includes(value.toLowerCase()) || (sighting.state.toLowerCase().includes(value.toLowerCase()) || 
        (sighting.zipcode.toLowerCase().includes(value.toLowerCase())))) {
            filteredSightings.push(sighting);
        }
        this.setState({ filteredSightings });
        });
        }
    }

    componentDidMount() {
        this.getLocationsWithSightings();
    }

    filteredSightingsBuilder = () => {
        const { filteredSightings } = this.state;
        const alienLanding = filteredSightings.map(filteredSighting => (
          <Marker
          key={filteredSighting.id}
          position={[filteredSighting.cityLatitude, filteredSighting.cityLongitude]}
          >
          <Popup className='custom-popup'
          id={filteredSighting.id}
          city={filteredSighting.city}
          state={filteredSighting.state}
          description={filteredSighting.description}
          dateOfEvent={filteredSighting.dateOfEvent}
          duration={filteredSighting.duration}
          shape={filteredSighting.shape}
          >
            <div>{filteredSighting.description}</div>
            <div>Date: {filteredSighting.dateOfEvent}</div>
            <div>Duration: {filteredSighting.duration}</div>
            <div>Shape: {filteredSighting.shape}</div>
    
          </Popup>
          </Marker>
          ));
          return alienLanding;
      }

    render() {
        return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">UFO Tracker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item mr-5">
                    <a class="nav-linkRed" href="/report">Report A Sighting</a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <SearchField
                placeholder="Search By city, state, or zip"
                onChange={ this.onSearchChange }
                searchText=""
                classNames="test-class w-50"
                 />
                </form>
                <a class="btn" href="/favorites"><i class="fa fa-heart fa-2x" href="/favorites"></i></a>
            </div>
        </nav>
        );
        }
    }

export default Navbar