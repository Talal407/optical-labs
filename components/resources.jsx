'use client';

import React from 'react';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

const resourcesData = [
    {
        title: 'HALLIE STERN: MCCAIN INSTITUTE',
        subtitle: 'AI & Democracy: Bridging Policy and Technology',
        image: '/images/img1.jpeg',
        link: 'https://www.mccaininstitute.org/resources/press-releases/mccain-institute-announces-new-american-democracy-technology-policy-translation-fellow/'
    },
    {
        title: 'THE FUTURE OF AI',
        subtitle: 'Exploring the Next Generation of Artificial Intelligence',
        image: '/images/img2.jpeg',
        link: '#'
    },
    {
        title: 'ETHICAL AI DEVELOPMENT',
        subtitle: 'Ensuring Fair and Responsible AI Implementation',
        image: '/images/img3.jpeg',
        link: '#'
    },
];

const Resources = () => {
    return (
        <div className="flex flex-col items-center justify-evenly h-screen bg-black text-white z-10 px-6 py-12 relative">
            
            <h1 className={`text-5xl mb-8 text-[#E8DFE7] ${scriptFont.className} z-10`}>Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center gap-8 w-2/3 z-10">
                {resourcesData.map((resource, index) => (
                    <div key={index} className="bg-[#313030] p-2 rounded-lg shadow-lg flex flex-col items-center w-[20rem] overflow-hidden">
                        <Image
                            src={resource.image}
                            alt={resource.title}
                            width={400}
                            height={300}
                            className="rounded-lg mb-4 h-1/2"
                        />
                        <div className='w-full h-[40%] flex flex-col gap-3'>

                          <h2 className="text-xl font-bold text-[#52CBBE] text-center">{resource.title}</h2>
                          <p className="text-gray-400 text-center my-2">{resource.subtitle}</p>
                        </div>
                        <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full"
                        >
                            <button className="w-full text-[#E8DFE7] bg-[#52CBBE] py-3 rounded-full hover:bg-opacity-80 hover:cursor-pointer transition-all duration-300">
                                Learn More
                            </button>
                        </a>
                    </div>
                ))}
            </div>
            <div className='w-screen h-screen top-0 left-0 absolute'>

            <BackgroundGradientAnimation/>
            </div>
        </div>
    );
};

export default Resources;
