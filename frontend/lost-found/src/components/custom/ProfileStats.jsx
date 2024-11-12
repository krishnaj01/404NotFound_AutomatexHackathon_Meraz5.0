// components/ProfileStats.js
import React from 'react';

function ProfileStats({lost, found}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm lg:w-[350px] space-y-6">
      <h3 className="text-xl font-semibold text-black">Profile Stats</h3>
      <div className='flex justify-start gap-5'>
      <Stat label="Found" value={found} />
      <Stat label="Lost" value={lost} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div className="flex justify-between text-gray-600">
      <p className="font-semibold">{label}:&nbsp;</p>
      <p className="font-semibold">{value}</p>
    </div>
    </div>
  );
}

export default ProfileStats;
