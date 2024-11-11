// src/About.js

import React from 'react';
import magnifyingGlassIcon from './assets/magnifying-glass.svg';
import { TbReportSearch } from "react-icons/tb";
import browseIcon from './assets/browse.svg';
import claimIcon from './assets/claim.svg';
import dashboardIcon from './assets/dashboard.svg';
import Footer from './Footer';
import LandingHeader from './LandingHeader';

const About = () => {
    return (
        <div className="bg-gray-50 text-indigo-900 p-8">
            {/* Header Section */}
            <LandingHeader/>

            {/* Introduction Section */}
            <section className="flex items-center justify-center mb-12 space-x-4">
                <img src={magnifyingGlassIcon} alt="Magnifying Glass Icon" className="w-12 h-12" />
                <p className="text-center max-w-3xl text-gray-700">
                    Welcome to Lost and Found – your campus companion for lost and found items. We understand how frustrating it can be to misplace something important, and we’re here to help you reconnect with what’s yours. Our platform is designed to simplify the search and recovery process, allowing students and staff at IIT Bhilai to report, track, and claim lost items quickly and easily.
                </p>
            </section>

            {/* Features Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-purple-800 text-center mb-6">Features</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200">
                        <img src={<TbReportSearch />} alt="Report Lost Items Icon" className="w-10 h-10 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Report Lost Items</h3>
                        <p className="text-sm text-gray-600">Register lost belongings with a detailed description and image to improve recovery chances.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200">
                        <img src={browseIcon} alt="Browse Found Items Icon" className="w-10 h-10 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Browse Found Items</h3>
                        <p className="text-sm text-gray-600">Search through found items on campus to see if someone has already located your missing belongings.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200">
                        <img src={claimIcon} alt="Claim Items Securely Icon" className="w-10 h-10 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Claim Items Securely</h3>
                        <p className="text-sm text-gray-600">If you find something that belongs to you, submit a claim to verify ownership.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-60 text-center border border-purple-200">
                        <img src={dashboardIcon} alt="User Dashboard Icon" className="w-10 h-10 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">User Dashboard</h3>
                        <p className="text-sm text-gray-600">View your reported and found items, along with stats and graphs of your item history.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
    );
};

export default About;
