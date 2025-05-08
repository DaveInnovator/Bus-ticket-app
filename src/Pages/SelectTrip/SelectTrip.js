import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './SelectTrip.css';

const SelectTrip = () => {
  return (
    <div className="select-trip-container">
      <header className="trip-header">
        <div className="location-header">
          <span className="location-code">CDG</span>
          <FontAwesomeIcon icon={faBus} className="bus-icon" />
          <span className="location-code">FLR</span>
        </div>
        <p className="route-names">Paris → Florence</p>
      </header>

      <div className="filters">
        <button className="filter-btn">
          <FontAwesomeIcon icon={faCalendarAlt} /> Filter
        </button>
        <button className="sort-btn">Sort by: Quickest</button>
      </div>

      <div className="trip-card">
        <div className="trip-times">
          <div className="departure">
            <p className="time">09:30 AM</p>
            <p className="date">Sun, 24 Jan</p>
          </div>
          <FontAwesomeIcon icon={faBus} className="trip-bus-icon" />
          <div className="arrival">
            <p className="time">11:45 AM</p>
            <p className="date">Sun, 24 Jan</p>
          </div>
        </div>
        <div className="trip-price">
          <p>$1,181</p>
        </div>
      </div>

      <div className="trip-card">
        <div className="trip-times">
          <div className="departure">
            <p className="time">09:30 AM</p>
            <p className="date">Sun, 24 Jan</p>
          </div>
          <FontAwesomeIcon icon={faBus} className="trip-bus-icon" />
          <div className="arrival">
            <p className="time">11:45 AM</p>
            <p className="date">Sun, 24 Jan</p>
          </div>
        </div>
        <div className="trip-price">
          <p>$696</p>
        </div>
      </div>
    </div>
  );
};

export default SelectTrip;
