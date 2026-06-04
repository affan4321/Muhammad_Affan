import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FrameModal from './FrameModal';

function ContactForm() {
  const form = useRef();
  const [openModal, setOpenModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lh1i6dd', 'template_iy0fd3j', form.current, {
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
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Send me a message</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" name="user_name" placeholder='Your name' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="text" name="user_email" placeholder='your.email@example.com' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" type="text" placeholder='Your message...' className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32 resize-none"></textarea>
            </div>
            <input type="submit" value="Send Message" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer" />
        </form>
    </div>
    <FrameModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default ContactForm
