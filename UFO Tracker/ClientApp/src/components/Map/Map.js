import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import sightingRequests from '../../helpers/data/sightingRequests'

class Map extends React.Component {
  state = {
    locations: [],
    sightings: []
  }

  displaySightings = () => {
    sightingRequests.getAllSightings()
      .then((data) => {
        this.setState({ sightings : data });
      }).catch(err => console.error('error getting products', err));
  }

  componentDidMount(){
    this.displaySightings();
  }

  sightingsBuilder = () => {
    const { sightings } = this.state;
    const alienLanding = sightings.map(sighting => (
      <Marker
      key={sighting.id}
      position={[sighting.cityLatitude, sighting.cityLongitude]}
      >
      <Popup className='custom-popup'
      id={sighting.id}
      city={sighting.city}
      state={sighting.state}
      description={sighting.description}
      dateOfEvent={sighting.dateOfEvent}
      duration={sighting.duration}
      shape={sighting.shape}
      >
        <div>{sighting.description}</div>
        <div>Date: {sighting.dateOfEvent}</div>
        <div>Duration: {sighting.duration}</div>
        <div>Shape: {sighting.shape}</div>

      </Popup>
      </Marker>
      ));
      return alienLanding;
  }

  render() {
    return (
      <div className="map-container"> 
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
        {this.sightingsBuilder()}
      </LeafletMap>
      </div>
    );
  }
}

export default Map