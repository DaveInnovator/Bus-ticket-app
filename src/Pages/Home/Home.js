import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import bus_icon from "../../Assets/bus-icon.png";
import './Home.css';

const HomePage = () => {
    const [tripType, setTripType] = useState('round');
  
    return (
      <div className="home-container">
        <div className="home-card">
          <div className="home-header">
        <img src={bus_icon} alt="Travel" className="home-image" />    
            <h2>Book Your Trip</h2>
          </div>
  
          <div className="trip-type-toggle">
            <button
              className={tripType === 'round' ? 'active' : ''}
              onClick={() => setTripType('round')}
            >
              Round Trip
            </button>
            <button
              className={tripType === 'oneway' ? 'active' : ''}
              onClick={() => setTripType('oneway')}
            >
              Oneway
            </button>
          </div>
  
          <div className="home-form">
            <div className="form-group">
              <label>From</label>
           
  
              
      
              <div className="input-field">  
  <FontAwesomeIcon icon={faBus}  />
              
      <input type="text" placeholder="Paris" />      
    

  

</div>

    

            </div>
  
            <div className="form-group">
              <label>To</label>
              <div className="input-field">  
  <FontAwesomeIcon icon={faBus}  />
              
      <input type="text" placeholder="Florence" />      
    

  

</div>

            </div>
  
            <div className="form-group inline">
              <div>
                <label>Depart</label>
                <input type="date" />
              </div>
              <div
                className={`return-field ${
                  tripType === 'round' ? 'visible' : 'hidden'
                }`}
              >
                <label>Return</label>
                <input type="date" />
              </div>
            </div>
  
            <div className="form-group inline">
              <div>
                <label>Passengers</label>
                <input type="number" min="1" defaultValue={2} />
              </div>
              <div className="select">
                <label>Class</label>
                <select>
                  <option>First</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
  
            <Link to="/select-trip" > <button className="search-button">Select Trip</button></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  