import React, { useState } from 'react';
import CardList from './CardList';

const Home = () => {
  const [lostSearch, setLostSearch] = useState('');
  const [foundSearch, setFoundSearch] = useState('');

  return (
    <>
      <div className="w-full h-1/2 relative">
        <img
          src="./campusimage.png"
          alt="Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p className="font-bold text-center text-2xl md:text-4xl lg:text-6xl text-white pb-5">
            Keep Your Belongings,<br /> Not the Hassle
          </p>
          <p className="italic text-center text-sm md:text-xl lg:text-2xl text-white">
            Effortlessly report lost items and find what's missing on campus.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 my-10 mx-5">
        {/* Lost Items Section */}
        <div className="flex-1 p-5 border border-gray-200 rounded-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="text-2xl font-bold text-purple-600 ml-3">LOST ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              value={lostSearch}
              onChange={(e) => setLostSearch(e.target.value)}
              className="m-2 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="overflow-y-auto max-h-[400px]">
            <CardList type="LostItems" searchTerm={lostSearch} />
          </div>
        </div>

        {/* Found Items Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="text-2xl font-bold text-purple-600 ml-3">FOUND ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              value={foundSearch}
              onChange={(e) => setFoundSearch(e.target.value)}
              className="m-2 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="overflow-y-auto max-h-[400px]">
            <CardList type="FoundItems" searchTerm={foundSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
