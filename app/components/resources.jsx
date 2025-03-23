'use client';

import React from 'react';
import { Dancing_Script } from 'next/font/google';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

const Resources = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className={`text-5xl mb-8 text-[#E8DFE7] ${scriptFont.className}`}>Resources</h1>
            <div className="w-full  max-w-md space-y-4">
                <div>
                    <a
                        href="https://www.mccaininstitute.org/resources/press-releases/mccain-institute-announces-new-american-democracy-technology-policy-translation-fellow/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-full border-1 border-[#52CBBE] bg-gradient-to-r  from-gray-900 via-black to-gray-900 text-[#52CBBE] py-4 rounded-full hover:bg-opacity-80 hover:cursor-pointer transition-all duration-300">
                            HALLIE STERN: MCCAIN INSTITUTE
                        </button>
                    </a>
                </div>
                <button className="w-full border-1 border-[#52CBBE] bg-gradient-to-r from-gray-900 via-black to-gray-900 text-[#52CBBE] py-4 rounded-full hover:bg-opacity-80 hover:cursor-pointer transition-all duration-300">
                    WHAT’S NEXT?
                </button>
                <button className="w-full border-1 border-[#52CBBE] bg-gradient-to-r from-gray-900 via-black to-gray-900 text-[#52CBBE] py-4 rounded-full hover:bg-opacity-80 hover:cursor-pointer transition-all duration-300">
                    WHAT’S NEXT?
                </button>
                <button className="w-full border-1 border-[#52CBBE] bg-gradient-to-r from-gray-900 via-black to-gray-900 text-[#52CBBE] py-4 rounded-full hover:bg-opacity-80 hover:cursor-pointer transition-all duration-300">
                    WHAT’S NEXT?
                </button>
            </div>

        </div>
    );
};

export default Resources;
