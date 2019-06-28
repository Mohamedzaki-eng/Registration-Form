import React from 'react';
import './App.css';

function App() {

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Registration <img src="http://cdn.slidesharecdn.com/profile-photo-Availity_Careers-96x96.jpg?cb=1523501474" class="spacing"></img></h2>
        <form novalidate>
          <div className="firstName">
            <label htmlfor="firstName"></label>
              <input 
                type="text" 
                placeholder="First Name"
                name="firstName"
               />
          </div>
          <div className="lastName">
            <label htmlfor="lastName"></label>
              <input 
                type="text" 
                placeholder="Last Name"
               />
          </div>
          <div className="NPINumber">
            <label htmlfor="NPINumber"></label>
              <input 
                type="text"   
                placeholder="NPI Number" 
                class="padding"
               />
          </div>
          <div className="BusinessAddress">
            <label htmlfor="BusinessAddress"></label>
              <input 
                type="text" 
                placeholder="Business Address"
                class="padding"
               />
          </div>
          <div className="TelephoneNumber">
            <label htmlfor="TelephoneNumber"></label>
              <input 
                type="text" 
                placeholder="Telephone Number"
                class="padding" 
               /> 
            </div>
                <div className="EmailAddress">
            <label htmlfor="EmailAddress"></label>
              <input 
                type="email" 
                placeholder="Email Address"
                class="padding"
               />
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <a href="url"><small>Already Have an Account?</small></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
