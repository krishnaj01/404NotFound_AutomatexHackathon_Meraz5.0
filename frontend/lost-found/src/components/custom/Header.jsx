import React from 'react';

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <header className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-200 mb-4 rounded-xl shadow-lg flex items-center justify-center md:justify-start">
      <img
        src="./campusimage.png" 
        alt="Building"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute flex items-center mx-5 mb-3 justify-center sm:bottom-[-80px] md:bottom-[-100px] bottom-[-60px] bg-white rounded-full p-2 shadow-lg">
        <img
          src={user.picture} 
          alt="Profile Icon"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
