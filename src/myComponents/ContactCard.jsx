import React from 'react';
import "./ContactCard.css";

function ContactCard({ iconURL, text}) {
  return (
    <div className="contactcard-container">
        <a href={text} target="_blank"><img src={iconURL} alt="contact icon" className="contactcard-icon" /></a>
        <p><a href={text} target="_blank">{text}</a></p>
    </div>
  )
};

export default ContactCard
