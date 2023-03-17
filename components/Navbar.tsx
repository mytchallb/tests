import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
      if(!nav) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflowY = 'scroll';
      }
    };

    return (
      <header className='absolute w-full flex justify-between p-4 items-center'>
        <Link href="/" className='text-white font-bold text-2xl z-20'>SOS Woning - Renovatiewerken</Link>
        <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
        <div
          className={
            nav
              ? 'ease-in duration-300 fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 flex-col z-10'
              : 'absolute top-0 h-screen right-[-100%] z-10'
          }
        >
          <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li className='font-bold text-3xl p-8'><Link href="/" onClick={handleNav}>Welkom</Link></li>
            <li className='font-bold text-3xl p-8'><Link href="#diensten" onClick={handleNav}>Diensten</Link></li>
            <li className='font-bold text-3xl p-8'><Link href="#projecten" onClick={handleNav}>Projecten</Link></li>
            <li className='font-bold text-3xl p-8'><Link href="#contact" onClick={handleNav}>Contact</Link></li>
          </ul>
        </div>
      </header>
    );
  };
  
  export default Navbar;