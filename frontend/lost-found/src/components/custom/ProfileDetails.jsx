// components/ProfileDetails.js
import React from 'react';

function ProfileDetails() {
  return (
    <div className="bg-white p-6 pt-20 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm lg:w-[450px] space-y-6">
      {/* Full Name Card */}
      <DetailCard icon="user" label="Full Name" value="John Doe" />
      {/* Username Card */}
      <DetailCard icon="user-tag" label="Username" value="johndoe123" />
      {/* Email Card */}
      <DetailCard icon="paper-plane" label="Email" value="johndoe123@example.com" />
      {/* Contact Card */}
      <DetailCard icon="phone-alt" label="Contact" value="+1234567890" />
    </div>
  );
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="text-purple-600 text-xl">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="flex-1">
        <label className="block text-purple-800 font-semibold text-left">{label}</label>
        <p className="text-gray-600 text-left">{value}</p>
      </div>
    </div>
  );
}

export default ProfileDetails;
