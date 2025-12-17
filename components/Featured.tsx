import { FEATURED } from '@/constants'
import Button from './Button'
import React from 'react'


const Featured = () => {
  return (
    <section className='relative flex flex-col w-full md:h-screen'  id='featured'>
      {FEATURED.map((item, index) => (
        <div 
          key={item.id} 
          className={`relative flex pt-10 p-5 items-center justify-around   ${index % 2 === 0 ? 'flex-col-reverse md:flex-row-reverse bg-white' : 'flex-col md:flex-row bg-cream'} `}
        >
          <div></div>
          {/* Contenido de la imagen */}
          <div className={`w-full md:w-1/2 h-64 md:max-h-[270px] md:max-w-[270px] border-12 rounded-3xl ${index % 2 === 0 ? 'border-brown' : 'border-darkgreen'}`}>
            <img 
              src={item.image} 
              alt={item.title}
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
          {/* Contenido del texto */}
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16  text-darkgreen'>
            <div className='max-w-lg flex flex-col text-center'>
              <h2 className='text-4xl md:text-4xl lg:text-5xl font-black mb-6'>
                {item.title}
              </h2>
              <p className='text-lg md:text-xl mb-8 font-semibold'>
                {item.paraph}
              </p>
              <Button type='button' title={item.cta.text} variant='btn_darkGreen' />
            </div>
          </div>

        </div>
      ))}
    </section>
  )
}

export default Featured