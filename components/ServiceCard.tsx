import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({image, title, description} : {image: string, title: String, description: String}) => {
  return (
    <article className='flex flex-col max-w-[500px] py-4'>
        <Image className='h-[200px] object-cover' src={image} alt="flooring" height={200} width={500}/>
        <div className='bg-[#0D857B] text-white px-[20%] py-4 flex-1 flex flex-col justify-between'>
            <h2 className='font-bold text-xl uppercase tracking-wider mb-4 after:block after:w-1/4 after:h-1 after:bg-white'>{title}</h2>
            <h3 className='mb-6'>{description}</h3>
            <Link href={title === '...en veel meer' ? '#contact' : `/diensten/${title}`} className='bg-[#0c5a53] px-4 py-2 hover:bg-teal-600 mt-auto text-center'>{title === '...en veel meer' ? 'NEEM CONTACT OP' : 'LEES MEER'}</Link>
        </div>
    </article>
  )
}

export default ServiceCard