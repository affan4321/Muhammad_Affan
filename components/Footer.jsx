import React from 'react'

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-16 flex justify-center w-full">
      <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
          </div>
          <p className="text-gray-300 text-xs md:text-base lg:text-xl">© 2025 Muhammad Affan. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
