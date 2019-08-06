import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import PropTypes from 'prop-types';
import propertiesShape from '../../helpers/propz/propertiesShape';
import SearchField from "react-search-field";
import locationSightingsRequests from '../../helpers/data/locationSightingsRequests'
import LikeButton from '../LikeButton/LikeButton';
import L from 'leaflet'

class Map extends React.Component {
  state = {
    locations: [],
    sightings: [],
    filteredSightings: [],
  }

static propTypes = {
  favoriteSighting: propertiesShape,
  addFavoriteSightings: PropTypes.func,
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
    
    const icon =  L.icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/animals-wildlife-color-1/128/alien-face-green-2-512.png',
        iconSize: [15, 20],
        iconAnchor: [3, 6],
        popupAnchor: [0, -16],
    }); 
    const alienLanding = filteredSightings.map(filteredSighting => (
      <Marker
      key={filteredSighting.id}
      icon={icon}      
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
        <div>
        <LikeButton
        sightingId = { filteredSighting.id }
        onChange = {this.addFavoriteSightings}
        />
        <img className='popImage' src={filteredSighting.image}></img>
        <div><b>What happened?</b> {filteredSighting.description}</div>
        <div><b>Date</b>: {filteredSighting.dateOfEvent}</div>
        <div><b>Location</b>: {filteredSighting.city}, {filteredSighting.state}</div>
        <div><b>Duration</b>: {filteredSighting.duration}</div>
        <div><b>Shape</b>: {filteredSighting.shape}</div>
        </div>
        
      </Popup>
      </Marker>
      ));
      return alienLanding;
  }

  render() {

    return (
      <div>
      <div className="map-container"> 
      <form class="form-inline my-lg-0 d-flex justify-content-center">
      <SearchField
      placeholder="Search by City or State"
      onChange={ this.onSearchChange }
      searchText=""
      classNames="test-class w-40 mt-3"
        />
      </form>
      <LeafletMap
        center={[35, -100]}
        zoom={3}
        maxZoom={8}
        setZoom={16}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
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
      <div className="emptyDiv"> . </div>
      </div>
    );
  }
}

export default Map