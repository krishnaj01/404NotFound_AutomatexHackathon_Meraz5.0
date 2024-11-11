// components/ItemCards.js
import React from 'react';

function ItemCards({data}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-screen-lg px-4">
      <ItemCard data={data} />
    </div>
  );
}

function ItemCard({data}) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
<<<<<<< HEAD
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-400">
=======
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-800 w-[20vw]">
>>>>>>> 37e65ab14b8c307b26b46e68f3ac4a9f512318b6
    {/* Flex container for image and info */}
    <div className="flex items-center space-x-6 mb-6">
      {/* Image with adjusted width */}
      <img
        src="./Campus.jpg"
        alt="Item"
        className="w-1/2 h-32 object-cover rounded-md"
      />
      {/* Info section */}
      <div className="flex flex-col text-left">
        <h3 className="font-semibold text-black">{data?.userSelection.item}</h3>
        <p className="text-gray-600">{user.name}<br />{data?.userSelection?.contact}</p>
      </div>
    </div>
    
    {/* Description and suspected place */}
    <p className="text-gray-500 text-sm mt-2">
      {data?.userSelection?.description}
    </p>
    <p className="text-purple-900 font-semibold mt-4">{data?.userSelection?.place}</p>
  </div>
  
  );
}

export default ItemCards;
