// components/ItemCards.js
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function ItemCards({data}) {
  return (
    <div>
      <ItemCard data={data} />
    </div>
  );
}

function ItemCard({data}) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition-all h-80 duration-300 ease-in-out hover:scale-105 hover:shadow-xl border hover:border-purple-900">
    <div className="flex space-x-6 mb-6">
      <img
        src="./Campus.jpg"
        alt="Item"
        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
      />
      <div className="flex flex-col text-left">
        <h3 className="font-bold text-lg text-black">{data?.userSelection.item}</h3>
        <p className='text-sm text-gray-500 mb-2'>{data?.userSelection?.date}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{data?.userSelection.name}</p>
        <div className='flex items-center gap-1 text-gray-500'>
        <FaPhoneAlt />
        <p className='text-xs sm:text-sm'>{data?.userSelection?.contact.substring(2)}</p>
        </div>
      </div>
    </div>
    <p className="text-gray-500 text-sm my-2 h-28 overflow-y-auto">
      {data?.userSelection?.description}
    </p>
    <div className='w-full bg-gray-500 h-[0.25px]'></div>
    <div className='flex items-center gap-3 mt-2 text-xl text-purple-900'>
    <MdLocationPin />
    <p className="font-semibold">{data?.userSelection?.place}</p>
    </div>
  </div>
  
  );
}

export default ItemCards;
