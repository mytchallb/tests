import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../objects';

const Services = () => {

  return (
    <section className='bg-white py-12 px-4 m-auto' id='diensten'>
        <header className='md:w-[600px] m-auto border-b-2 mb-4'>
            <h2 className='font-bold text-3xl md:text-4xl drop-shadow-2xl text-center text-[#0D857B]'>Wat doen wij?</h2>
            <h3 className='text-center text-lg mt-4 text-gray-500 leading-8 pb-4'>Alles om jouw woning terug nieuw leven in te blazen.</h3>
        </header>
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          {
            services.map((img, i) => {
              return <ServiceCard key={i} image={img.url} title={img.title} description={img.description}/>
            })
          }
        </div>
    </section>
  )
}

export default Services