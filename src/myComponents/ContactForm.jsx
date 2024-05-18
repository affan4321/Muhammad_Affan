import React from 'react';
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contactform-container">
        <form>
            <div className="name-container">
                <input type="text" name="firstname" placeholder='First Name'/>
                <input type="text" name="lastname" placeholder='Last Name'/>
            </div>

            <input type="text" name="email" placeholder='Email'/>
            <textarea name="message" type="text" placeholder='Message'></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm
