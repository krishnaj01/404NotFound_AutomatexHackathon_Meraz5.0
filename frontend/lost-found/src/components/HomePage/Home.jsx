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

      <div className="w-full p-4 mb-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex-shrink-0 w-full md:w-1/2 overflow-x-auto p-3">
            <div className="text-lg font-semibold text-purple-600 p-3">LOST ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-3/4 p-3 mb-4 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 mx-auto"
            />
            <div className="overflow-y-auto max-h-[400px]"> {/* Apply vertical scrolling to CardList container */}
              <CardList />
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 overflow-x-auto p-3">
            <div className="text-lg font-semibold text-purple-600 p-3">FOUND ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-3/4 p-3 mb-4 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 mx-auto"
            />
            <div className="overflow-y-auto max-h-[400px]"> {/* Apply vertical scrolling to CardList container */}
              <CardList />
            </div>
          </div>
        </div>
      </div>




      {/* <div>
        <div className='p-4 mb-8'>
          <div className="flex justify-center space-x-[50vw] items-center w-full p-4 mb-8">
            <div className="text-lg font-semibold text-purple-600">LOST ITEMS</div>
            <input
              type="text"
              placeholder="Search..."
              className="w-1/3 p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <CardList />
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
          <CardList />
        </div>
      </div> */}





    </>
  )
}

export default Home;