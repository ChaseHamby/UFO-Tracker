import React from 'react';
import './Navbar.css';

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
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        );
        }
    }

export default Navbar