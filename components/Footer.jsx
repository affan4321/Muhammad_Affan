import React from 'react'

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-16 flex justify-center w-full">
      <div className="flex items-center gap-6">
          <img src="/assets/latestFace.svg" alt="Logo" className="w-20 h-20 object-fit rounded-xl" />
          <p className="text-[#2671b3] text-xs md:text-base lg:text-xl">© 2025 Muhammad Affan. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
