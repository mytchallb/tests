import React from 'react';
import Link from 'next/link';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { images } from './ImageByIndex';

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps',
}
const SLIDE_COUNT = images.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Team = () => {
  return (
    <section className='bg-white pb-12 px-4 m-auto text-center' id='projecten'>
        <header className='md:w-[600px] m-auto border-b-2 mb-8'>
            <h2 className='font-bold text-3xl md:text-4xl drop-shadow-2xl text-center text-[#0D857B]'>Projecten</h2>
            <h3 className='text-center text-lg mt-4 text-gray-500 leading-8 pb-4'>Omdat een foto meer zegt dan woorden.</h3>
        </header>
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        <Link href="/projecten" className='bg-[#0D857B] px-4 py-3 hover:bg-teal-600 text-white font-bold'>Meer zien?</Link>
    </section>
  )
}

export default Team