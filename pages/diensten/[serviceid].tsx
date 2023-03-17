import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { services } from '../../objects';
import Navbar_Projects from '../../components/Navbar_Projects';
import Head from 'next/head';

const ServicePage = () => {
    const router = useRouter();
    const { serviceid } = router.query;
    const currentService = services.find(x => x.title === serviceid);
    console.log(currentService)

    useEffect(() => {
        if(currentService === undefined){
            router.push("/#diensten");
        }
    });
    return (
        <>
            <Head>
                <title>Onze dienst: {currentService?.title}</title>
                <meta name="description" content={currentService?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar_Projects />
            <section className='bg-white px-4 pb-12 lg:flex lg:flex-row-reverse lg:justify-center lg:gap-10'>
                <div>
                    <Image className='object-cover border-4 rounded-lg border-black w-full lg:w-[450px] lg:h-[600px] block' src={currentService!?.url} alt={currentService!?.title} width={450} height={600} loading="eager"/>
                </div>
                <div>
                    <header className='mt-8 mb-4 lg:mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-6xl drop-shadow-2xl text-[#0D857B] uppercase tracking-wider font-semibold'>{currentService?.title}</h2>
                    </header>
                    <p className='text-gray-500 mb-8 w-full lg:w-[600px]'>{currentService?.fullDescription}</p>
                    <div className='flex gap-4 flex-wrap'>
                        <Link href="/#contact" className='block bg-[#0D857B] text-white text-center px-4 py-3 max-w-[300px] h-[50px] hover:bg-teal-700'>Vraag nu vrijblijvend uw offerte aan</Link>
                        <Link href="/projecten" className='block bg-white border border-[#0D857B] text-[#0D857B] text-center px-4 py-3 max-w-[300px] h-[50px] hover:bg-[#0D857B] hover:text-white'>Klik hier voor meer foto&#39;s</Link>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ServicePage;