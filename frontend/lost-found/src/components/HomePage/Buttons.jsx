import React from 'react';

const Buttons = ({ buttonText }) => {
    return (
        <div className="group inline-block relative cursor-pointer text-black text-xl font-bold hover:text-[#B542D8]">
            <a href={`/${buttonText.toLowerCase() === 'faqs' ? 'faq' : buttonText.toLowerCase()}`}>
                {buttonText}
            </a>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-[#B542D8] transition-all duration-300 group-hover:w-full group-hover:text-[#B542D8]"></div>
        </div>
    )
}

export default Buttons;