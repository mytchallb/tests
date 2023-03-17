import React from 'react';
import Image from 'next/image';
import Form from '../components/Form';

const Footer = () => {
  return (
    <footer className='bg-white pb-12 px-12' id='contact'>
        <header className='md:w-[600px] m-auto border-b-2 mb-8'>
            <h2 className='font-bold text-3xl md:text-4xl drop-shadow-2xl text-center text-[#0D857B]'>Contact</h2>
            <h3 className='text-center text-base md:text-lg mt-4 text-gray-500 leading-8 pb-4'>Heeft u verder nog vragen, dan kunt u steeds contact opnemen.</h3>
        </header>
        <div className='lg:flex gap-8 justify-center'>
          <Image src='/nature.webp' className='hidden lg:block object-cover w-auto max-w-[500px]' alt='nature' width={500} height={500}/>
          <Form />
        </div>
    </footer>
  )}
export default Footer