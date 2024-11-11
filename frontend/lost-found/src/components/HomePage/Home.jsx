import React from 'react';
import CardList from './CardList';

const Home = () => {
  return (
    <>
      <div className="w-full h-1/2 ">
        <img
          src="./campusimage.png" // replace with your actual background image path
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 my-10 mx-5 ">
        {/* Lost Items Section */}
        <div className="flex-1 p-5 border border-gray-200 rounded-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="text-2xl font-bold text-purple-600 ml-3">LOST ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="m-2 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="overflow-y-auto max-h-[400px]">
            <CardList type="LostItems" />
          </div>
        </div>

        {/* Found Items Section */}
        <div className="flex-1 p-4 border border-gray-200 rounded-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="text-2xl font-bold text-purple-600 ml-3">FOUND ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="m-2 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="overflow-y-auto max-h-[400px]">
            <CardList type="FoundItems" />
          </div>
        </div>
      </div>






    </>
  )
}

export default Home;