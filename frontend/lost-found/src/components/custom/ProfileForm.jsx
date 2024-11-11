// Profile.js
import React, { useState } from 'react';
import Header from './Header';
import ProfileDetails from './ProfileDetails';
import ProfileStats from './ProfileStats';
import ItemCards from './ItemCards';
import { Button } from '../ui/button';

function Profile() {
  const [variant, setVariant] = useState("outline")
  const [dvariant, setDVariant] = useState("default")

  const show = () => {
    if(variant === "ouline"){
      setVariant("default");
      setDVariant("outline");
    }
    else{
      setDVariant("default");
      setVariant("outline");
    }
  }
  return (
    //bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200
    <div className="flex justify-center bg-gray-50 p-6">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <Header />
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 mt-2 w-full">
          <ProfileDetails />
          <ProfileStats />
        </div>
        <div className='flex justify-center items-center gap-5 my-5 mt-10'>
        <Button variant={variant} onClick={show} className="w-64">Lost</Button>
        <Button variant={dvariant} onClick={show} className="w-64">Found</Button>
        </div>
        <ItemCards />
      </div>
    </div>
  );
}

export default Profile;
//bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200