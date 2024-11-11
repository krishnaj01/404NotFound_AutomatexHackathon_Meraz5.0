// components/Header.js
import React from 'react';

function Header() {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-200 mb-4 rounded-xl shadow-lg">
      <img
        src="./Campus.jpg" // replace with your actual background image path
        alt="Building"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute left-[15%] transform -translate-x-1/2 sm:bottom-[-80px] md:bottom-[-100px] bottom-[-60px] bg-white rounded-full p-2 shadow-lg">
        <img
          src="/Dhruv.jpg" // replace with profile icon path
          alt="Profile Icon"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
