import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-[20vh] bg-purple-100 px-8">
            {/* Left Side: Two buttons */}
            <div className="flex space-x-4">
                <Button buttonText="Home" />
                <Button buttonText="Lost" />
            </div>

            {/* Center Image */}
            <div className="flex justify-center flex-1">
                <img src="/logo.png" alt="Description of the image" className="h-16" />
            </div>

            {/* Right Side: Two buttons */}
            <div className="flex space-x-4">
                <Button buttonText="Found" />
                <Button buttonText="Profile" />
            </div>
        </div>
    );
}

export default Navbar;
