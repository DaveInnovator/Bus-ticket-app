import React, { useState } from 'react';
import './SeatSelection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 5 }, (_, row) =>
    ['A', 'B', 'C', 'D'].map((col) => `${row + 1}${col}`)
  ).flat();

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="seat-selection-container">
      <div className="seat-header">
        <Link to ="/select-trip">
        <button className='back-btn'>
        <FontAwesomeIcon icon={faArrowLeft} /></button></Link>
        <h2>Select Seat</h2>
      </div>

      <div className="legend">
        <div className="legend-item available"></div><span>Available</span>
        <div className="legend-item selected"></div><span>Selected</span>
        <div className="legend-item booked"></div><span>Booked</span>
      </div>

      <div className="seats-grid">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${
              selectedSeats.includes(seat)
                ? 'selected'
                : seat.endsWith('C') || seat.endsWith('D')
                ? 'booked'
                : ''
            }`}
            onClick={() =>
              !(seat.endsWith('C') || seat.endsWith('D')) && toggleSeat(seat)
            }
          >
            {seat}
          </div>
        ))}
      </div>

      <div className="footer">
        <p>{selectedSeats.length} Seat(s): {selectedSeats.join(', ')}</p>
        <Link to="/payment" className="link">
          
        <button className="confirm-btn">
          <FontAwesomeIcon icon={faCheckCircle} />
          Confirm Booking
        </button></Link>
      </div>
    </div>
  );
};

export default SeatSelection;
