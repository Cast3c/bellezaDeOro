import { HERO } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row  md:justify-between min-h-screen px-6 md:px-12 pt-20 gap-8 bg-ligthgreen" id='home'>
      <div className='flex max-w-7xl mx-auto px-6 flex-col md:flex-row items-center justify-between gap-5 '>
        <div className="relative flex h-auto w-full md:w-1/2 aspect-square">
          <Image
            src="/images/necklaceStand1.png"
            alt="cadena"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center drop-shadow-2xl"
            priority
          />
        </div>
        <div className="flex flex-col text-center justify-arround md:text-start w-full md:w-1/2 space-y-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            {HERO.title}
          </h1>
          <p className="max-md:1/2 text-md md:text-xl text-white/80 font-bold">
            {HERO.description}
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-2 pt-4">
            <Button
              type="button"
              title={HERO.primaryCTA.text}
              variant="btn_darkGreen"
              href='https://api.whatsapp.com/send?phone=573018507938&text=Hola!%20Lindo%20d%C3%ADa%20quiero%20tener%20m%C3%A1s%20informaci%C3%B3n%F0%9F%92%8E'
            />
            <div className="price_brown flex w-full justify-center items-center px-2 py-1 rounded-lg font-extrabold cursor-pointer drop-shadow-lg bold-16">
              ${HERO.badge}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero