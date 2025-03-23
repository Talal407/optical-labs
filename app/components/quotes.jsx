import React from 'react'
import Image from 'next/image'

const Quotes = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black">
        <Image
          src="/images/quote.jpg"
          alt="Quote "
          layout="fill"
          objectFit="cover"
        />
        <p className="absolute text-[#CBC7C6] text-4xl  font-bold text-center px-6">
          “The future of AI belongs to those who build it right.”
        </p>
      </div>
    )
}

export default Quotes
