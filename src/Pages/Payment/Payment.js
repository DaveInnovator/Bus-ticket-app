import React from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
  return (
    <div className="payment-page">
      <div className="header">
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        <h2>Reservation Details</h2>
        <FontAwesomeIcon icon={faShareAlt} className="share-icon" />
      </div>

      <div className="route-info">
        <div className="route">Lagos - Abuja</div>
        <div className="date">11 May 2025, Sunday</div>
      </div>

      <div className="ticket-details">
        <div className="row">
          <span>Bus Name</span>
          <span>Peace Mass Transit</span>
        </div>
        <div className="row">
          <span>Seat Number</span>
          <span>12, 13</span>
        </div>
        <div className="row">
          <span>Ticket ID</span>
          <span>PMT123456</span>
        </div>
        <div className="row">
          <span>Bus Number</span>
          <span>PMT 345 AB</span>
        </div>
        <div className="row">
          <span>Departure</span>
          <span>08:00 AM</span>
        </div>
        <div className="row">
          <span>Arrival</span>
          <span>03:30 PM</span>
        </div>
        <div className="row total">
          <span>Total:</span>
          <span className="amount">₦12,000</span>
        </div>
      </div>

      <div className="qr-section">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=TicketID-PMT123456&size=150x150"
          alt="QR Code"
        />
      </div>

      <p className="note">
        <span>Note:</span> Just show your QR code while boarding the bus.
      </p>

      <div className="actions">
        <button className="cancel-btn">Cancel</button>
        <button className="download-btn">Download</button>
      </div>
    </div>
  );
};

export default Payment;
