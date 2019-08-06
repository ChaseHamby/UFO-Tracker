import React from 'react';
import './Navbar.css';
import cover from '../../images/cover.png'
import Countdown from '../Countdown/Countdown'

class Navbar extends React.Component {
    

    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-#1C2331">
            <a class="navbar-brand" href="/"><img src={cover} className="coverNav"></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h4 className="storm"><b>STORM AREA 51</b></h4>
            <Countdown date={`${year}-09-20T00:00:00`} />   
            <div class="navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item mr-5">
                    <a class="nav-linkRed" href="/report"><b>REPORT A SIGHTING</b></a>
                </li>
                </ul>
                <a class="btn" href="/favorites"><i class="fa fa-rocket fa-2x" href="/favorites"></i></a>
            </div>
        </nav>
        );
        }
    }

export default Navbar