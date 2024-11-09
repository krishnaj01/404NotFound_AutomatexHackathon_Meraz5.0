import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-16 sm:h-[10vh] px-4 sm:px-8 shadow-sm">
            {/* Left Side: Two buttons */}
            <div className="flex space-x-40 w-full sm:w-[40%] justify-center">
                <Button buttonText="Home" />
                <Button buttonText="Lost" />
            </div>

            {/* Center Image */}
            <div className="flex justify-center w-[15%] sm:w-[10%]">
                <img src="/logo.png" alt="Description of the image" className="h-10 sm:h-10" />
            </div>

            {/* Right Side: Two buttons */}
            <div className="flex space-x-40 w-full sm:w-[40%] justify-center">
                <Button buttonText="Found" />
                <Button buttonText="Profile" />
            </div>
        </div> 
        // B542D8
    );
}

export default Navbar;
