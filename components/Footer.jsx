import React from 'react'

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-8 flex justify-center w-full">
      <div className="flex items-center gap-16 flex-col md:flex-row">
          <img src="/assets/latestFace.svg" alt="Logo" className="w-44 h-44 object-fit rounded-3xl" />
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl">© 2026 Muhammad Affan. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
