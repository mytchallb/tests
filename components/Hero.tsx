import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../public/background.webp';

const Hero = () => {
  return (
    <section className='w-full h-screen'>
      <Image
        className='top-0 left-0 w-full h-screen object-cover -z-50'
        src={BackgroundImage}
        alt='renovatiewerken'
        fill
      />
      <div className='bg-black/50 absolute top-0 left-0 w-full h-screen -z-50'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Algemene verbouwingen en <span className='text-teal-400'>renovatie</span>
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <Link href="#contact" className='bg-white text-[#0D857B] py-3 px-6 mt-4 rounded border-2 border-b-4 inline-block border-[#0D857B] hover:bg-[#c3ebf2]'>Contacteer ons</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;