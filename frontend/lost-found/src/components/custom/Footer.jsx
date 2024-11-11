import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from '../ui/button';

const Footer = () => {
    const user = localStorage.getItem("user");
  return (
    <footer className='bg-gray-900 text-white py-10 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
      
      {/* Div 1: Visible on all screen sizes */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-6xl font-serif'>Lost-Found</h1>
        <h5 className='text-xl text-gray-400 mb-8'>Lost something? We are here to bring it back</h5>
        <div>
          <h2 className='text-2xl mb-5'>Contact Us</h2>
          <div className='flex gap-3 text-4xl'>
            <SiGmail className='hover:text-red-500' />
            <FaInstagram className='hover:text-purple-500' />
            <FaLinkedinIn className='hover:text-blue-600' />
          </div>
        </div>
      </div>

      {/* Div 2: Visible only on large screens (lg:grid-cols-3) */}
      <div className='hidden lg:flex items-center justify-center'>
        <img src="./lost-found-invert.jpg" alt="logo" className="rounded-full h-52" />
      </div>

      {/* Div 3: Visible on medium and larger screens (md:grid-cols-2 and lg:grid-cols-3) */}
      <div className='hidden md:flex flex-col gap-2'>
        {user ? (
            <>
                <a href="/home">
          <Button variant="link" className="text-white text-lg hover:text-purple-500">Home</Button>
        </a>
        <a href="/lost">
          <Button variant="link" className="text-white text-lg hover:text-purple-500">Lost</Button>
        </a>
        <a href="/found">
          <Button variant="link" className="text-white text-lg hover:text-purple-500">Found</Button>
        </a>
        <a href="/about">
          <Button variant="link" className="text-white text-lg hover:text-purple-500">About</Button>
        </a>
        <a href="/faq">
          <Button variant="link" className="text-white text-lg hover:text-purple-500">FAQs</Button>
        </a>
            </>
        ) : (
            <>
                <a href="/" onClick={() => alert('You have to sign in first.')}>
          <Button variant="link" className="text-white text-lg hover:text-purple-500">Home</Button>
        </a>
        <a href="/" onClick={() => alert('You have to sign in first.')}>
          <Button variant="link" className="text-white text-lg hover:text-purple-500">Lost</Button>
        </a>
        <a href="/" onClick={() => alert('You have to sign in first.')}>
          <Button variant="link" className="text-white text-lg hover:text-purple-500">Found</Button>
        </a>
        <a href="/" onClick={() => alert('You have to sign in first.')}>
          <Button variant="link" className="text-white text-lg hover:text-purple-500">About</Button>
        </a>
        <a href="/" onClick={() => alert('You have to sign in first.')}>
          <Button variant="link" className="text-white text-lg hover:text-purple-500">FAQs</Button>
        </a>
            </>
        )}
      </div>
    </footer>
  )
}

export default Footer
