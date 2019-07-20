import React from 'react';
import './ReportSighting.css';

class ReportSighting extends React.Component {

    render(){
        return(
            <div class="container">

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
                <input name="contact_no" placeholder="(639)" class="form-control" type="text" />
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