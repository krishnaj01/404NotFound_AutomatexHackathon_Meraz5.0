import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from './Footer';
import LandingHeader from './LandingHeader';

const About = () => {
    return (
        <div className="bg-gray-50 text-indigo-900 p-8">

            {/* Introduction Section */}
            <section className="flex flex-col items-center justify-center mb-12 space-x-4 md:flex-row">
                <img src="/glass.png" alt="Magnifying Glass Icon" className="w-40 h-40 rounded-full" />
                <p className="text-center max-w-3xl text-gray-700">
                    Welcome to Lost and Found – your campus companion for lost and found items. We understand how frustrating it can be to misplace something important, and we’re here to help you reconnect with what’s yours. Our platform is designed to simplify the search and recovery process, allowing students and staff at IIT Bhilai to report, track, and claim lost items quickly and easily.
                </p>
            </section>

            {/* Features Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-purple-800 text-center mb-6">Features</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200  transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-300">
                        <img src="/report.png" alt="Report Lost Items Icon" className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Report Lost Items</h3>
                        <p className="text-sm text-gray-600">Register lost belongings with a detailed description and image to improve recovery chances.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-300">
                        <img src="/browse.png" alt="Browse Found Items Icon" className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Browse Found Items</h3>
                        <p className="text-sm text-gray-600">Search through found items on campus to see if someone has already located your missing belongings.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-300">
                        <img src="/claim.png" alt="Claim Items Securely Icon" className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Claim Items Securely</h3>
                        <p className="text-sm text-gray-600">If you find something that belongs to you, submit a claim to verify ownership.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-300">
                        <img src="/dashboard.png" alt="User Dashboard Icon" className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">User Dashboard</h3>
                        <p className="text-sm text-gray-600">View your reported and found items, along with stats and graphs of your item history.</p>
                    </div>
                </div>
            </section>



            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-purple-800 text-center mb-6">Developers</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-purple-200 rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-700">
                        <img src="/slok.jpg" alt="Report Lost Items Icon" className="w-28 h-28 mx-auto mb-4 border-4 border-purple-900 rounded-full" />
                        <h3 className="text-xl font-semibold text-purple-900 mb-2">Slok Tulsyan</h3>
                        <p className="text-sm text-black">Register lost belongings with a detailed description and image to improve recovery chances.</p>
                        <div className="flex justify-center gap-3 text-xl my-3">
                            <a href="mailto:slokt@iitbhilai.ac.in"><SiGmail className='hover:text-red-500' /></a>
                            <a href="https://www.instagram.com/tulsyanslok?igsh=OXoxYW5ua2ZrZHVw"><FaInstagram className='hover:text-purple-500' /></a>
                            <a href="https://www.linkedin.com/in/slok-tulsyan-003786293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className='hover:text-blue-600' /></a>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-700">
                        <img src="/sid.jpeg" alt="Browse Found Items Icon" className="w-28 h-28 mx-auto mb-4 border-4 border-purple-900 rounded-full" />
                        <h3 className="text-xl font-semibold text-purple-900 mb-2">Siddharth Rai</h3>
                        <p className="text-sm text-black">Search through found items on campus to see if someone has already located your missing belongings.</p>
                        <div className="flex justify-center gap-3 text-xl my-3">
                            <a href="mailto:siddharthp@iitbhilai.ac.in"><SiGmail className='hover:text-red-500' /></a>
                            <a href="https://www.instagram.com/siddharthrai8568/profilecard/?igsh=NXd4ajVybnoxdXVh"><FaInstagram className='hover:text-purple-500' /></a>
                            <a href="https://www.linkedin.com/in/siddharth-rai-453865298/"><FaLinkedinIn className='hover:text-blue-600' /></a>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-700">
                        <img src="/Dhruv.jpg" alt="Claim Items Securely Icon" className="w-28 h-28 mx-auto mb-4 border-4 border-purple-900 rounded-full" />
                        <h3 className="text-xl font-semibold text-purple-900 mb-2">Dhruv Chouksey</h3>
                        <p className="text-sm text-black">If you find something that belongs to you, submit a claim to verify ownership.</p>
                        <div className="flex justify-center gap-3 text-xl my-3">
                            <a href="mailto:dhruvc@iitbhilai.ac.in"><SiGmail className='hover:text-red-500' /></a>
                            <a href="https://www.instagram.com/dhruv.chouksey14/profilecard/?igsh=dXp0NWU3YmluaWp4"><FaInstagram className='hover:text-purple-500' /></a>
                            <a href="https://www.linkedin.com/in/dhruv-chouksey-211b4b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className='hover:text-blue-600' /></a>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-700">
                        <img src="/krishna.jpg" alt="User Dashboard Icon" className="w-28 h-28 mx-auto mb-4 border-4 border-purple-900 rounded-full" />
                        <h3 className="text-xl font-semibold text-purple-900 mb-2">Krishna Jhanwar</h3>
                        <p className="text-sm text-black">View your reported and found items, along with stats and graphs of your item history.</p>
                        <div className="flex justify-center gap-3 text-xl my-3">
                            <a href="mailto:krishnaj@iitbhilai.ac.in"><SiGmail className='hover:text-red-500' /></a>
                            <a href="https://www.instagram.com/krishna_jhanwar01/"><FaInstagram className='hover:text-purple-500' /></a>
                            <a href="https://www.linkedin.com/in/krishna-jhanwar-498022290/"><FaLinkedinIn className='hover:text-blue-600' /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-semibold text-purple-800 text-center mb-6">Contact Us</h2>
            </section>


        </div>
    );
};

export default About;
