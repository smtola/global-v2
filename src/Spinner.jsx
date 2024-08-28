// Spinner.jsx
import React from 'react';

const Spinner = () => {
    return (
        // <div className="z-[999999] flex justify-center items-center bg-[#ffffff] fixed w-full top-0 bottom-0 left-0 right-0">
        //     <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        // </div>
        <div className="z-[999999] flex justify-center items-center bg-[#ffffff] fixed w-full top-0 bottom-0 left-0 right-0">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                <p className="mt-4 text-xl font-bold text-gray-700">Global Consultancy</p>
            </div>
        </div>
    );
};

export default Spinner;
