import React from 'react';
import './Navbar.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import SearchField from "react-search-field";
import locationSightingsRequests from '../../helpers/data/locationSightingsRequests';

class Navbar extends React.Component {

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
                <a class="btn" href="/favorites"><i class="fa fa-heart fa-2x" href="/favorites"></i></a>
            </div>
        </nav>
        );
        }
    }

export default Navbar