import React from 'react';

export default function Lists(props) {
    const {title, content, number, icon, key} = props;
    return (
        <React.Fragment>
            <div key={key} className="flex relative sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#45b97c] text-white relative z-10 title-font font-medium text-sm">{number}</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mt-4">
                <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-[#45b97c] rounded-full inline-flex items-center justify-center mr-2">
                    {icon}
                </div>
                <div className="flex-grow sm:mt-0 mr-2 text-right">
                    <p className="text-gray-900 text-xl m-0 font-semibold mt-4 sm:mt-0">{title}</p>
                    <p className="m-0 text-justify">{content}</p>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
