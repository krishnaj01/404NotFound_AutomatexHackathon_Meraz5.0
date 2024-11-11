// components/ActionButtons.js
import React from 'react';

function ActionButtons() {
  return (
    <div className="mt-6 flex space-x-4 justify-center items-center w-3/5 max-w-screen-lg">
      <ActionButton icon="search-location" label="Lost" />
      <ActionButton icon="hand-holding" label="Found" />
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (//bg-gradient-to-r from-purple-600 to-purple-800
    <button className="flex-1 w-full px-6 py-4 bg-black text-white text-xl font-semibold rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg shadow-purple-500 flex items-center justify-center space-x-3">
      <i className={`fas fa-${icon} text-xl`}></i>
      <span>{label}</span>
    </button>
  );
}

export default ActionButtons;
