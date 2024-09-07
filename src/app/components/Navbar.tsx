'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from '@/assets/cleologo.png'

const Navbar = () => {
  // State to toggle shrink class on navbar when scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll event
  useEffect(() => {
    const handleScroll = () => {
      // When scrolling more than 50px, add the shrink class
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`fixed z-30  top-0 w-full bg-white text-sm py-3 transition-all duration-300 ${isScrolled ? 'py-1 shadow-md' : 'py-3'}`}>
        <nav className="max-w-[70rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            {/* Logo that shrinks when scrolled */}
            <Image 
              src={logo} 
              alt={'logo'} 
              width={isScrolled ? 50 : 80}  // Shrink the logo when scrolled
              height={isScrolled ? 50 : 80} 
              className="transition-all duration-300"
            />
            <div className="sm:hidden">
              <button 
                type="button" 
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" 
                id="hs-navbar-example-collapse" 
                aria-expanded="false" 
                aria-controls="hs-navbar-example" 
                aria-label="Toggle navigation" 
                data-hs-collapse="#hs-navbar-example"
              >
                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6"/>
                  <line x1="3" x2="21" y1="12" y2="12"/>
                  <line x1="3" x2="21" y1="18" y2="18"/>
                </svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {/* Navigation Links */}
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Tentang</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Brand</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Produk</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Event</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Cleo Untuk Indonesia</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">News</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Blog</a>
              <a className="font-medium uppercase text-gray-600 hover:text-gray-400 relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-orange-500 before:transition before:duration-300 hover:before:scale-x-100 transition duration-300" href="#">Kontak</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
