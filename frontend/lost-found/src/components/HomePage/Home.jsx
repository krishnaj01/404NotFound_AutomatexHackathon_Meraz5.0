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

      




      <div>
        <div className='p-4 mb-8'>
          <div className="flex justify-center space-x-[50vw] items-center w-full p-4 mb-8">
            <div className="text-lg font-semibold text-purple-600">LOST ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="w-1/3 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <CardList/>
          </div>
          
        </div>

        <div className='p-4 mb-8'>
          <div className="flex justify-center space-x-[50vw] items-center w-full p-4 mb-8">
            <div className="text-lg font-semibold text-purple-600">FOUND ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="w-1/3 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <CardList/>
          </div>
        </div>
      </div>





    </>
  )
}

export default Home;