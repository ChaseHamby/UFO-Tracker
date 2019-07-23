import React from 'react'
import './ReportSighting.css';
import sightingRequests from '../../helpers/data/sightingRequests';
import locationRequests from '../../helpers/data/locationRequests';

    
    const defaultLocation = {
        city: '',
        state: '',
        streetAddress: '',
        zipcode: ''
    }

    const defaultSighting = {
        witness: '',
        description: '',
        dateOfEvent: '',
        duration: '',
        shape: '',
        cityLatitude: '',
        cityLongitude: ''
    }

class ReportSighting extends React.Component {

    state = {
        newLocation: defaultLocation,
        newSighting: defaultSighting
    }

    formFieldStringStateSighting = (name, e) => {
        e.preventDefault();
        const tempSighting = {...this.state.newSighting}
        tempSighting[name] = e.target.value;
        this.setState({ newSighting: tempSighting });
      }

    formFieldStringStateLocation = (name, e) => {
    e.preventDefault();
    const tempLocation = {...this.state.newLocation};
    tempLocation[name] = e.target.value;
    this.setState({ newLocation: tempLocation});
    }

    formFieldNumberStateSighting = (name, e) => {
        const tempSighting = { ...this.state.newSighting };
        tempSighting[name] = e.target.value * 1;
        this.setState({ newSighting: tempSighting });
        }

    formFieldNumberStateLocation = (name, e) => {
        const tempLocation = {...this.state.newLocation};
        tempLocation[name] = e.target.value * 1;
        this.setState({ newLocation: tempLocation});
        }

    descriptionChange = e => this.formFieldStringStateSighting('description', e);

    dateOfEventChange = e => this.formFieldStringStateSighting('dateOfEvent', e);

    durationChange = e => this.formFieldStringStateSighting('duration', e);

    shapeChange = e => this.formFieldStringStateSighting('shape', e);

    cityChange = e => this.formFieldStringStateLocation('city', e);

    stateChange = e => this.formFieldStringStateLocation('state', e);

    streetAddressChange = e => this.formFieldStringStateLocation('streetAddress', e);

    zipcodeChange = e => this.formFieldNumberStateLocation('zipcode', e);

    cityLatitudeChange = e => this.formFieldNumberStateSighting('cityLatitude', e);

    cityLongitudeChange = e => this.formFieldNumberStateSighting('cityLongitude', e);

    onSubmit = () => {
        locationRequests.addLocation()
            .then((data) => {
            locationRequests.getSingleLocation(data.id)
                .then((data) => {
                    console.log(data)
                })
        }).catch(err => console.error(err));
    }

                    // sightingRequests.addSighting()
                //     .then((data) => {
                //         console.log(data)
                //     this.setState({
                //         newSighting: data,
                //         newSighting: defaultSighting,
                //         newLocation: defaultLocation
                //     });

    formSubmit = (e) => {
        e.preventDefault();
        const myLocation = {...this.state.newLocation };
        console.log(myLocation);
        const mySighting = {...this.state.newSighting };
        console.log(mySighting)
        this.onSubmit(myLocation);
        this.onSubmit(mySighting);
        this.setState({
            newLocation: defaultLocation,
            newSighting: defaultSighting,
        });
      };
    


    render(){
        const { newSighting, newLocation } = this.state;

        return(
            <div>

            <div class="sighting-container">

            <form class="well form-horizontal" action=" " method="post"  id="contact_form">
            <fieldset>

            <legend><center><h2><b>Report A Sighting</b></h2></center></legend>

            <div class="form-group"> 
            <label class="col-md-4 control-label">Witness</label>
                <div class="col-md-8 selectContainer">
                <div class="input-group">
                    <span class="anon input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                <select name="department" class="form-control selectpicker">
                <option value="">Were you a witness?</option>
                <option>Yes</option>
                <option>No</option>
                </select>
            </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">Description</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            <input  name="dateOfEvent" placeholder="Description" class="form-control"  type="text"
                id='description'
                value={newSighting.description}
                onChange={this.descriptionChange}
                />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">Date of Event</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            <input  name="dateOfEvent" placeholder="Date of Event" class="form-control"  type="text"
                id='dateOfEvent'
                value={newSighting.dateOfEvent}
                onChange={this.dateOfEventChange}
                />
                </div>
            </div>
            </div>

            {/* <!-- Text input--> */}

            <div class="form-group">
            <label class="col-md-4 control-label" >Duration</label> 
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            <input name="last_name" placeholder="Duration" class="form-control"  type="text" 
                id='duration'
                value={newSighting.duration}
                onChange={this.durationChange}
                />
                </div>
            </div>
            </div>    

            <div class="form-group">
            <label class="col-md-4 control-label">Shape</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-screenshot"></i></span>
            <input name="email" placeholder="Shape of Object" class="form-control"  type="text" 
                id='shape'
                value={newSighting.shape}
                onChange={this.shapeChange}
            />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">City</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
            <input  name="user_name" placeholder="City" class="form-control"  type="text"
                id='city'
                value={newLocation.city}
                onChange={this.cityChange}  
            />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">State</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
            <input  name="user_name" placeholder="State" class="form-control"  type="text" 
                id='state'
                value={newLocation.state}
                onChange={this.stateChange}
            />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">Street Address</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
            <input  name="user_name" placeholder="Street Address" class="form-control"  type="text" 
                id='streetAddress'
                value={newLocation.streetAddress}
                onChange={this.streetAddressChange}
            />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">Zipcode</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
            <input  name="user_name" placeholder="Zipcode" class="form-control"  type="text" 
                id='zipcode'
                value={newLocation.zipcode}
                onChange={this.zipcodeChange}
            />
                </div>
            </div>
            </div>
                
            <div class="form-group">
            <label class="col-md-4 control-label">City Latitude</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
            <input name="contact_no" placeholder="City Latitude" class="form-control" type="text" 
                id='cityLatitude'
                value={newSighting.cityLatitude}
                onChange={this.cityLatitudeChange}
            />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label">City Longitude</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
            <input name="contact_no" placeholder="City Longtude" class="form-control" type="text" 
                id='cityLongitude'
                value={newSighting.cityLongitude}
                onChange={this.cityLongitudeChange}
            />
                </div>
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-5 control-label"></label>
            <div class="col-md-4"><button class="btn btn-warning" type="submit" onClick={this.formSubmit} >Submit</button>
            </div>
            </div>
            </fieldset>
            </form>
            </div>

            <div class="contact-container">

                <form class="well form-horizontal" action=" " method="post"  id="contact_form">
                <fieldset>

                <legend><center><h2><b>Contact Information</b></h2></center></legend>

                <div class="form-group"> 
                <label class="col-md-4 control-label">Anonymity</label>
                    <div class="col-md-8 selectContainer">
                    <div class="input-group">
                        <span class="anon input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                    <select name="department" class="form-control selectpicker">
                    <option value="">Submit as anonymous?</option>
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">First Name</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="first_name" placeholder="First Name" class="form-control"  type="text" />
                    </div>
                </div>
                </div>

                {/* <!-- Text input--> */}

                <div class="form-group">
                <label class="col-md-4 control-label" >Last Name</label> 
                    <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="last_name" placeholder="Last Name" class="form-control"  type="text" />
                    </div>
                </div>
                </div>    

                <div class="form-group">
                <label class="col-md-4 control-label">City</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="user_name" placeholder="City" class="form-control"  type="text" />
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">State</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="user_name" placeholder="State" class="form-control"  type="text" />
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">Street Address</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="user_name" placeholder="Street Address" class="form-control"  type="text" />
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">Zipcode</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="user_name" placeholder="Zipcode" class="form-control"  type="text" />
                    </div>
                </div>
                </div>

                    <div class="form-group">
                <label class="col-md-4 control-label">E-Mail</label>  
                    <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                <input name="email" placeholder="E-Mail Address" class="form-control"  type="text" />
                    </div>
                </div>
                </div>


                    
                <div class="form-group">
                <label class="col-md-4 control-label">Cell Phone No.</label>  
                    <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                <input name="contact_no" placeholder="(555)555-5555" class="form-control" type="text" />
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-5 control-label"></label>
                <div class="col-md-4"><button type="submit" class="btn btn-warning" >Submit</button>
                </div>
                </div>
                </fieldset>
                </form>
                </div>

            </div>



            /* <div class="contact-form" id="contactForm">
            <form class="needs-validation" novalidate>
            <div class="form-row">
                <div class="col-md-4 mb-3">
                <label for="validationTooltip01">First name</label>
                <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" required />
                <div class="invalid-tooltip">
                    Please provide a first name.
                </div>
                </div>
                <div class="col-md-4 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" required />
                <div class="invalid-tooltip">
                    Please provide a last name.
                </div>
                </div>
                <div class="col-md-4 mb-3">
                <label for="validationTooltipUsername">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
                    <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                    </div>
                </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label for="validationTooltip03">City</label>
                <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required />
                <div class="invalid-tooltip">
                    Please provide a valid city.
                </div>
                </div>
                <div class="col-md-3 mb-3">
                <label for="validationTooltip04">State</label>
                <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required />
                <div class="invalid-tooltip">
                    Please provide a valid state.
                </div>
                </div>
                <div class="col-md-3 mb-3">
                <label for="validationTooltip05">Zip</label>
                <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required />
                <div class="invalid-tooltip">
                    Please provide a valid zip.
                </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
            </div> */
        )
    }
}

export default ReportSighting