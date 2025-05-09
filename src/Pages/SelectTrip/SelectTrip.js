import React from "react";
import "./SelectTrip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faSliders, faSortAmountDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SelectTrip = () => {
  return (
    <div className="select-trip-page">
      <div className="top-section"><Link to="/home"><button>
        <FontAwesomeIcon icon={faArrowLeft} /></button></Link>
        <div className="map-background">
          <div className="trip-info">
          
            <span className="terminal">LAG</span>
            <FontAwesomeIcon icon={faBus} className="bus-arc" />
            <span className="terminal">ABJ</span>
          </div>
          <div className="select-title">Select Trip</div>
        </div>
      </div>

      <div className="controls">
        <button className="filter-btn">
          <FontAwesomeIcon icon={faSliders} className="control-icon" /> Filter
        </button>
        <button className="sort-btn">
          <FontAwesomeIcon icon={faSortAmountDown} className="control-icon" /> Sort by: Quickest
        </button>
      </div>

      <div className="available-count">10 Buses Available</div>

      <div className="trip-card">
        <div className="card-top">
          <div className="location">
            <div className="code">LAG</div>
            <div className="time">08:00AM</div>
          </div>
          <div className="bus-line">
            <FontAwesomeIcon icon={faBus} className="bus-icon" />
          </div>
          <div className="location">
            <div className="code">ABJ</div>
            <div className="time">03:30PM</div>
          </div>
        </div>
        <div className="operator">Peace Mass Transit</div>
        <div className="price">₦12,000 <span>Per Adult</span></div>
        <Link to="/seat-selection">
          <button className="select-seat-btn">Select Seat</button>
        </Link>
      </div>

      <div className="trip-card">
        <div className="card-top">
          <div className="location">
           
            <div className="code">LAG</div>
            <div className="time">09:00AM</div>
          </div>
          <div className="bus-line">
            <FontAwesomeIcon icon={faBus} className="bus-icon" />
          </div>
          <div className="location">
            <div className="code">ABJ</div>
            <div className="time">05:00PM</div>
          </div>
        </div>
        <div className="operator">God Is Good Motors</div>
        <div className="price">₦10,500 <span>Per Adult</span></div>
        <Link to="/seat-selection">
          <button className="select-seat-btn">Select Seat</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectTrip;