import React from 'react';

function ContactCard({ iconURL, text, url}) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={iconURL} alt="contact icon" className="w-7 h-7" /></a>
        </div>
        <p className="flex-1"><a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-semibold group-hover:text-blue-700">{text}</a></p>
    </div>
  )
};

export default ContactCard
