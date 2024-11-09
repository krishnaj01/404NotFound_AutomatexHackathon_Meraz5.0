import React from 'react';

const Button = ({ buttonText }) => {
    return (
        <div className="group inline-block relative cursor-pointer text-black text-xl">
            {buttonText}
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full group-hover:text-white"></div>
        </div>
    )
}

export default Button;