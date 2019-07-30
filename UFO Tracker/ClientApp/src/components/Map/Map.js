import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import PropTypes from 'prop-types';
import propertiesShape from '../../helpers/propz/propertiesShape';
import SearchField from "react-search-field";
import locationSightingsRequests from '../../helpers/data/locationSightingsRequests'
import LikeButton from '../LikeButton/LikeButton';

class Map extends React.Component {
  state = {
    locations: [],
    sightings: [],
    filteredSightings: [],
    isLiked: false
  }

static propTypes = {
  favoriteSighting: propertiesShape,
  addFavoriteSightings: PropTypes.func,
  changeIsLikedState: PropTypes.func,
}

  getLocationsWithSightings = () => {
    locationSightingsRequests.getLocationsWithSightings()
        .then((data) => {
            this.setState({ sightings: data})
            this.setState({ filteredSightings: data})
        }) 
  }

  onSearchChange = (value, event) => {
    const { sightings } = this.state;
    const filteredSightings = [];
    event.preventDefault();
    if (!value) {
        this.setState({ filteredSightings: sightings });
    } else {
        sightings.forEach((sighting) => {
        if (sighting.city.toLowerCase().includes(value.toLowerCase()) || (sighting.state.toLowerCase().includes(value.toLowerCase()))) {
            filteredSightings.push(sighting);
        }
        this.setState({ filteredSightings });
        });
        }
    }

  componentDidMount(){
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
        <div>
        <LikeButton
        isLiked={ this.isLiked }
        changeIsLikedState= { this.changeIsLikedState }
        sightingId = { filteredSighting.id }
        onChange = {this.addFavoriteSightings}
        />
        </div>
      </Popup>
      </Marker>
      ));
      return alienLanding;
  }

  render() {
    return (
      <div className="map-container"> 
      <form class="form-inline my-lg-0 d-flex justify-content-center">
      <SearchField
      placeholder="Search by City or State"
      onChange={ this.onSearchChange }
      searchText=""
      classNames="test-class w-50"
        />
      </form>
      <LeafletMap
        center={[35, -90]}
        zoom={4}
        maxZoom={15}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        className='custom-popup'
      >
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        />
        {this.filteredSightingsBuilder()}
      </LeafletMap>
      </div>
    );
  }
}

export default Map