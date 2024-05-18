import React from 'react';
import "./ContactCard.css";

function ContactCard({ iconURL, text}) {
  return (
    <div className="contactcard-container">
        <img src={iconURL} alt="contact icon" className="contactcard-icon" />

        <p>{text}</p>
    </div>
  )
};

export default ContactCard
