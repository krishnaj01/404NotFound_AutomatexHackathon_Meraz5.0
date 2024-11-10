// components/ItemCard.js
import React from 'react';

function ItemCard() {
  return (
    <div className="max-w-sm border border-purple-300 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="flex items-start p-4 space-x-4">
        <img
          src="wallet-image-url" // Replace with the actual image URL
          alt="Wallet"
          className="w-16 h-16 object-cover rounded-md border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900">Wallet</h3>
          <p className="text-gray-600">User name</p>
          <p className="text-gray-600">Contact no.</p>
          <p className="text-gray-400 text-sm">DD/MM/YYYY</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-4 bg-purple-50 border-t border-b border-purple-300 text-sm text-gray-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>

      {/* Footer Section */}
      <div className="p-4 flex items-center justify-between">
        <p className="text-purple-600 font-semibold">
          <i className="fas fa-map-marker-alt"></i> Suspected place
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
