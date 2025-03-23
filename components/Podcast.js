import React from 'react'
import Image from 'next/image'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { Dancing_Script } from 'next/font/google';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

function Podcast() {
    return (
        <div className='w-screen h-screen relative bg-[#001D1B]' id='podcast'>
            <div className='w-screen h-screen absolute top-0 right-0 flex justify-center items-center'>
                <div className='w-2/3 h-full flex flex-col items-center justify-evenly'>
                    <div className={`z-10 text-5xl text-[#CBC6C6] ${scriptFont.className}`}>Podcast</div>
                    <a target='_black' href='https://www.youtube.com/watch?si=QOweU39hywhqru_q&v=28vPzY1KwdE&feature=youtu.be' className=' relative w-2/3 h-auto border-[20px] border-[#2B2A2A] overflow-hidden rounded-3xl z-10'>
                        <Image src={"/images/podcast.jpg"} alt='podcast' width={1000} height={1000} className='w-full h-[30rem] object-cover  hover:scale-125 transition-all duration-500' />
                        <Image src={"/images/1.png"} alt='podcast' width={1000} height={1000} className='w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 object-cover  hover:scale-125 transition-all duration-500' />
                    </a>
                    <div className='w-full text-3xl text-[#52C5A2] text-center font-normal z-10'>TIARNE HAWKINS AND ADAM CHEYAR
                        <div className='w-full text-xl text-[#52C5A2] text-center font-light'>2025 AI PREDITIONS</div>
                    </div>
                    <div className='w-full font-semibold text-lg text-[#CBC6C6] text-center flex flex-col gap-2 z-10'>
                        Co-founder or founding member of multiple successful startups
                        <span className=' italic text-lg font-light'>
                            including Siri, Change.org, Viv Labs, Sentient, GamePlanner.AI
                        </span>
                        <span className='text-lg font-light'>
                            Take a dive into the world of AI and hear why Adam thinks the landscape will change completely 2 years from now
                        </span>
                    </div>

                </div>
            </div>
            {/* <BackgroundGradientAnimation/> */}
        </div>
    )
}

export default Podcast