import React, { useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';

export default function CreateComment({validation, value, onChange}) {
    const { loggedIn } = useContext(AuthContext)

    if(loggedIn) {
        return (
            <React.Fragment>
                <div className="relative mt-6">
                    <input
                        type="text"
                        placeholder='إضافة تعليق'
                        className="w-full outline-[#ef4444] outline-2 outline p-4 pr-7 text-sm h-40 rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button type="submit"
                        onClick={() => validation()}
                        className="inline-block hover:bg-[#f8931f] px-5 py-3 ml-3 text-sm font-medium text-white bg-[#ef4444] rounded-lg outline-none border-0">
                        إضافة تعليق
                    </button>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}