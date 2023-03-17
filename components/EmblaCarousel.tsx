import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import imageByIndex from '../components/ImageByIndex';
import Image from 'next/image';

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="text-center mb-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row h-auto ml-[calc(1rem * -1)]">
          {slides.map((index) => (
            <div className="flex-[0_0_300px] md:flex-[0_0_500px] min-w-0 pl-[1rem] relative group" key={index}>
              <Image width={300} height={250} quality={80} className="block h-[250px] md:h-[350px] w-full object-cover" src={imageByIndex(index)} alt="project picture"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
