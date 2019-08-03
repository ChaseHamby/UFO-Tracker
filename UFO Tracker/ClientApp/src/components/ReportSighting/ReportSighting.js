import React from 'react'
import './ReportSighting.css';
import sightingRequests from '../../helpers/data/sightingRequests';
import locationRequests from '../../helpers/data/locationRequests';
import userRequests from '../../helpers/data/userRequests';

    
    const defaultLocation = {
        city: '',
        state: '',
        streetAddress: '',
        zipcode: '',
        dateOfEvent: ''
    }

    const defaultSighting = {
        witness: '',
        description: '',
        dateOfEvent: '',
        duration: '',
        shape: '',
        cityLatitude: '',
        cityLongitude: '',
        image: ''
    }

    const defaultUser = {
        anonymous: '',
        firstName: '',
        lastName: '',
        email: '',
        cell: '',
        witness: ''
    }

class ReportSighting extends React.Component {

    state = {
        newLocation: defaultLocation,
        newSighting: defaultSighting,
        newUser: defaultUser
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

    formFieldStringStateUser = (name, e) => {
        e.preventDefault();
        const tempUser = {...this.state.newUser}
        tempUser[name] = e.target.value;
        this.setState({ newUser: tempUser });
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

    formFieldNumberStateUser = (name, e) => {
        const tempUser = {...this.state.newUser};
        tempUser[name] = e.target.value * 1;
        this.setState({ newUser: tempUser});
    }

    descriptionChange = e => this.formFieldStringStateSighting('description', e);

    dateOfEventChange = e => this.formFieldStringStateSighting('dateOfEvent', e);

    dateOfEventChange2 = e => this.formFieldStringStateLocation ('dateOfEvent', e);

    durationChange = e => this.formFieldStringStateSighting('duration', e);

    shapeChange = e => this.formFieldStringStateSighting('shape', e);

    cityChange = e => this.formFieldStringStateLocation('city', e);

    stateChange = e => this.formFieldStringStateLocation('state', e);

    streetAddressChange = e => this.formFieldStringStateLocation('streetAddress', e);

    zipcodeChange = e => this.formFieldNumberStateLocation('zipcode', e);

    cityLatitudeChange = e => this.formFieldNumberStateSighting('cityLatitude', e);

    cityLongitudeChange = e => this.formFieldNumberStateSighting('cityLongitude', e);

    imageChange = e => this.formFieldStringStateSighting('image', e);

    firstNameChange = e => this.formFieldStringStateUser('firstName', e);

    lastNameChange = e => this.formFieldStringStateUser('lastName', e);

    emailChange = e => this.formFieldStringStateUser('email', e);

    cellChange = e => this.formFieldNumberStateUser('cell', e);



    onSubmit = () => {
        const {newLocation, newSighting, newUser} = this.state;
        locationRequests.addLocation(newLocation)
            .then((data) => {
                sightingRequests.addSighting(newSighting)
                    .then((data) => {
                        userRequests.addUser(newUser)
                            .then((data) => {
                                this.setState({
                                    newSighting: defaultSighting,
                                    newLocation: defaultLocation,
                                    newUser: defaultUser
                                });
                            })
        }).catch(err => console.error(err));
    }
)}

    formSubmit = (e) => {
        e.preventDefault();
        const myLocation = {...this.state.newLocation };
        const mySighting = {...this.state.newSighting };
        const myUser = {...this.state.newUser };
        this.onSubmit(myLocation, mySighting, myUser);
        this.setState({
            newLocation: defaultLocation,
            newSighting: defaultSighting,
            newUser: defaultUser
        });
      };

    render(){
        const { newSighting, newLocation, newUser } = this.state;

        return(
            <div className="all">
            <div className= "container">

            <div class="sighting-container">

            <form class="well form-horizontal" action=" " method="post"  id="contact_form">
            <fieldset>

            <legend><center><h2><b>Report A Sighting</b></h2></center></legend>

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
                onChange={(e) => {this.dateOfEventChange(e); this.dateOfEventChange2(e);}}
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
            <label class="col-md-4 control-label">ImageURL</label>  
            <div class="col-md-8 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            <input  name="image" placeholder="Image URL" class="form-control"  type="text"
                id='image'
                value={newSighting.image}
                onChange={this.imageChange}
                />
                </div>
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
                <label class="col-md-4 control-label">First Name</label>  
                <div class="col-md-8 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="first_name" placeholder="First Name" class="form-control"  type="text" 
                    id='firstName'
                    value={newUser.firstName}
                    onChange={this.firstNameChange}
                />
                    </div>
                </div>
                </div>

                {/* <!-- Text input--> */}

                <div class="form-group">
                <label class="col-md-4 control-label" >Last Name</label> 
                    <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="last_name" placeholder="Last Name" class="form-control"  type="text" 
                    id='lastName'
                    value={newUser.lastName}
                    onChange={this.lastNameChange}
                />
                    </div>
                </div>
                </div>    

                    <div class="form-group">
                <label class="col-md-4 control-label">E-Mail</label>  
                    <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                <input name="email" placeholder="E-Mail Address" class="form-control"  type="text" 
                     id='email'
                     value={newUser.email}
                     onChange={this.emailChange}                 
                />
                    </div>
                </div>
                </div>


                    
                <div class="form-group">
                <label class="col-md-4 control-label">Cell Phone No.</label>  
                    <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                <input name="contact_no" placeholder="(555)555-5555" class="form-control" type="text" 
                     id='cell'
                     value={newUser.cell}
                     onChange={this.cellChange}                 
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
        </div>
        </div>
    )
 }
}

export default ReportSighting