import React from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';


function Contact() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h5 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Me</h5>
                <p className="text-gray-600 max-w-2xl mx-auto">Feel free to reach out for collaborations or just a friendly hello</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <ContactCard 
                        iconURL="/assets/Contact/email.png"
                        text="affan4321@gmail.com"
                        url="mailto:affan4321@gmail.com"
                    />
                    <ContactCard 
                        iconURL="/assets/Contact/linkedIn.png"
                        text="sheikhmuhammadaffan"
                        url="https://www.linkedin.com/in/sheikhmuhammadaffan"
                    />
                    <ContactCard 
                        iconURL="/assets/Contact/github.png"
                        text="affan4321"
                        url="https://github.com/affan4321"
                    />
                    <ContactCard 
                        iconURL="/assets/Contact/whatsapp.png"
                        text="+92 3144320292"
                        url="https://wa.me/+923144320292"
                    />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
