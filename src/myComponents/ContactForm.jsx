import React, { useRef, useState } from 'react';
import "./ContactForm.css";
import emailjs from '@emailjs/browser';
import FrameModal from './FrameModal';

function ContactForm() {
  const form = useRef();
  const [openModal, setOpenModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_87256ib', 'template_iy0fd3j', form.current, {
        publicKey: 'tlSjZDUPHCdCM4slC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setOpenModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <div className="contactform-container">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name="user_name" placeholder='Full Name'/>
            </div>
            <input type="text" name="user_email" placeholder='Email'/>
            <textarea name="message" type="text" placeholder='Message'></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
    <FrameModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default ContactForm
