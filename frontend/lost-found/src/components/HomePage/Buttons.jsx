import React, { useState, useEffect } from 'react';

const Buttons = ({ buttonText }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === `/${buttonText.toLowerCase() === 'faqs' ? 'faq' : buttonText.toLowerCase()}`) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [buttonText]); 

    return (
        <div
            className={`group inline-block relative cursor-pointer text-black text-xl font-bold ${isActive ? 'text-[#B542D8]' : 'hover:text-[#B542D8]'}`}
        >
            <a
                href={`/${buttonText.toLowerCase() === 'faqs' ? 'faq' : buttonText.toLowerCase()}`}
                className={`${isActive ? 'text-[#B542D8]' : ''}`}
            >
                {buttonText}
            </a>
            <div
                className={`absolute left-0 bottom-0 w-0 h-1 bg-[#B542D8] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}
            ></div>
        </div>
    );
};

export default Buttons;
