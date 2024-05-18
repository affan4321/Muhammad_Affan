import React from 'react';
import "./Contact.css";
import ContactCard from './ContactCard';
import whatsapp from "..//assets/Contact/whatsapp.png";
import github from "..//assets/Contact/github.png";
import email from "..//assets/Contact/email.png";
import linkedin from "..//assets/Contact/linkedin.png";
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact-container">
        <h5>Contact</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactCard 
                    iconURL={email}
                    text="affan4321@gmail.com"
                />
                <ContactCard 
                    iconURL={linkedin}
                    text="www.linkedin.com/in/sheikhmuhammadaffan"
                />
                <ContactCard 
                    iconURL={github}
                    text="https://github.com/affan4321"
                />
                <ContactCard 
                    iconURL={whatsapp}
                    text="+92-314-4320292"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default Contact
