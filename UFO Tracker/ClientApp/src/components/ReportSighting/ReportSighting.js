import React from 'react';
import './ReportSighting.css';

    const defaultSighting = {
        witness: '',
        dateOfEvent: '',
        duration: '',
        shape: '',
        city: '',
        state: '',
        streetAddress: '',
        zipcode: '',
        cityLatitude: '',
        cityLongitude: ''
    }

class ReportSighting extends React.Component {

    state = {
        newSighting: defaultSighting
    }

    formFieldStringState = (name, e) => {
        e.preventDefault();
        const tempSighting = {...this.state.newSighting};
        tempSighting[name] = e.target.value;
        this.setState({ newSighting: tempSighting });
      }

    formFieldNumberState = (name, e) => {
        const tempSighting = { ...this.state.newSighting };
        tempSighting[name] = e.target.value * 1;
        this.setState({ newSighting: tempSighting });
        }

    // formFieldDateState = (name, e) => {
    //     const tempSighting = { ...this.state.newSighting };
    //     tempSighting[name] = e.target.value;
    //     this.setState({ newSighting: tempSighting });
    //     }

    dateOfEventChange = e => this.formFieldStringState('dateOfEvent', e);

    durationChange = e => this.formFieldStringState('duration', e);

    shapeChange = e => this.formFieldStringState('shape', e);

    cityChange = e => this.formFieldStringState('city', e);

    stateChange = e => this.formFieldStringState('state', e);

    streetAddressChange = e => this.formFieldStringState('streetAddress', e);

    zipcodeChange = e => this.formFieldNumberState('zipcode', e);

    cityLatitudeChange = e => this.formFieldNumberState('cityLatitude', e);

    cityLongitudeChange = e => this.formFieldNumberState('cityLongitude', e);



    formSubmit = (e) => {
        e.preventDefault();
        const mySighting = {...this.state.newSighting };
        console.log(mySighting)
        this.setState({
          newSighting: defaultSighting,
        });
      };
    


    render(){
        const { newSighting } = this.state;

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
                value={newSighting.city}
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
                value={newSighting.state}
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
                value={newSighting.streetAddress}
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
                value={newSighting.zipcode}
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