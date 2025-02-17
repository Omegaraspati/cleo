'use client'

import Image from 'next/image'
import React from 'react'
import cas1 from '@/assets/cas1.jpeg'
import cas2 from '@/assets/cas2.jpeg'
import cas3 from '@/assets/cas3.jpg'
import cas4 from '@/assets/cas4.jpg'

const Carousel = () => {
  return (
    <div>
        {/* <!-- Slider --> */}
<div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative pt-20">
  <div className="hs-carousel relative overflow-hidden sm:w-screen  min-h-[200px] sm:min-h-screen bg-white rounded-lg">
    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full w-full bg-white">
          <Image src={cas1} alt={'cas1'} />
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full w-full bg-white">
          <Image src={cas2} alt={'cas2'} />
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full w-full bg-white">
          <Image src={cas3} alt={'cas3'} />
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full w-full bg-white">
          <Image src={cas4} alt={'cas4'} />
        </div>
      </div>
    </div>
  </div>

  <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>
</div>
{/* <!-- End Slider --> */}
    </div>
  )
}

export default Carousel