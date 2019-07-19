import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.scss';
import sightingRequests from '../../helpers/data/sightingRequests'

class Map extends React.Component {
  state = {
    locations: [],
    sightings: []
  }

  displaySightingsWithLatLong = () => {
    sightingRequests.getAllSightingsWithLatLong()
      .then((data) => {
        this.setState({ sightings : data });
      }).catch(err => console.error('error getting products', err));
  }

  componentDidMount(){
    this.displaySightingsWithLatLong();
  }

  sightingsBuilder = () => {
    const { sightings } = this.state;
    const alienLanding = sightings.map(sighting => (
      console.log(sighting)))
      return alienLanding;
  }

  render() {
    return (
      <div className="map-container"> {this.sightingsBuilder()}
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        />
        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
      </div>
    );
  }
}

export default Map