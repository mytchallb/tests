import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { projects } from '../objects';

const ProjectOverview = () => {
  const [modalImgUrl, setModalImgUrl] = useState("/flooring.webp");
  const [modalActive, setModalActive] = useState(false);
  
  const modalHandler = () => {
    setModalActive(!modalActive);
    if(modalActive){
      document.body.style.overflowY = 'scroll';
    }else{
      document.body.style.overflowY = 'hidden';
    }
  }

  const showImgModal = (e: any) => {
    setModalImgUrl((e.currentTarget.parentNode.parentNode.querySelector('img').src).replace('https://www.soswoning.com', '')); //TODO: temporary for localhost! replace('http://localhost:3000', '')
    modalHandler();
}
  
  return (
    <section>
      <header className='md:w-[600px] m-auto border-b-2 mb-8'>
            <h2 className='font-bold text-3xl md:text-4xl drop-shadow-2xl text-center text-[#0D857B]'>Alle Projecten</h2>
            <h3 className='text-center text-lg mt-4 text-gray-500 leading-8 pb-4'>Omdat een foto meer zegt dan woorden.</h3>
      </header>
      <div className='container grid place-items-center mx-auto grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 px-2 mb-32'>
        {
          projects.map((image: any, i: number) => {
            return (
              <div className="group relative overflow-hidden" key={i}>
                <Image className='h-[300px] object-cover duration-500 group-hover:scale-125' src={image.url} alt={image.title} width={400} height={200}/>
                <div className="absolute p-4 top-0 left-0 w-full h-0 flex flex-col justify-center items-start bg-teal-700/90 text-white opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <h1 className="text-2xl">{image.title}</h1>
                    <p className="mt-2 text-[0.925rem] self-start">{image.description}</p>
                    <button className='mt-4 bg-white text-teal-800 text-md py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center justify-center' onClick={showImgModal}><AiOutlineSearch className='text-xl mr-2'/>Bekijk foto</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={modalActive ? 'fixed h-screen w-screen bg-black/80 top-0 left-0 z-[80] px-2' : 'hidden'} onClick={modalHandler} >
        <div className='h-full flex justify-center items-center'>
          <Image className='object-cover w-[800px]' src={modalImgUrl} alt="modal image" width={800} height={800} quality={100} priority={true}/>
        </div>
      </div>
    </section>
  )
}

export default ProjectOverview