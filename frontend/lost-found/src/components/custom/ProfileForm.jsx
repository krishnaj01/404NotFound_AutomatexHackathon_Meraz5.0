// Profile.js
import React from 'react';
import Header from './Header';
import ProfileDetails from './ProfileDetails';
import ProfileStats from './ProfileStats';
import ActionButtons from './ActionButtons';
import ItemCards from './ItemCards';

function Profile() {
  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <Header />
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 mt-2 w-full">
          <ProfileDetails />
          <ProfileStats />
        </div>
        <ActionButtons />
        <ItemCards />
      </div>
    </div>
  );
}

export default Profile;
