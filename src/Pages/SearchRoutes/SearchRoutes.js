import React, { useState } from 'react';
import './SearchRoutes.css'; // You'll style the form here
import { useNavigate } from 'react-router-dom';

const SearchRoutes = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // For now, just log and navigate to select route
    console.log({ fromCity, toCity, travelDate });

    // You can pass data via state or query params here
    navigate('/select-route', {
      state: {
        from: fromCity,
        to: toCity,
        date: travelDate,
      },
    });
  };

  return (
    <div className="search-routes-container">
      <h2>Search Bus Routes</h2>
      <form onSubmit={handleSearch} className="search-form">
        <div className="form-group">
          <label>From:</label>
          <input
            type="text"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            required
            placeholder="Departure City"
          />
        </div>

        <div className="form-group">
          <label>To:</label>
          <input
            type="text"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            required
            placeholder="Destination City"
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchRoutes;
