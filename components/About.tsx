import { ABOUT } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full bg-ligthgreen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          {ABOUT.badge && (
            <span className="inline-block px-4 text-cream rounded-full text-xl font-extrabold mb-4">
              {ABOUT.badge}
            </span>
          )}

          {/* Titulo */}
          <h2 className="text-4xl md:text-5xl font-black text-cream/90">
            {ABOUT.title}
          </h2>

          {/* Subtitulo */}
          {ABOUT.subtitle && (
            <p className="text-xl md:text-2xl text-cream/90">
              {ABOUT.subtitle}
            </p>
          )}
        </div>
        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 text-center mb-16">
          {/* Descripción */}
          <div className="space-y-6">
            <p className="text-lg text-cream/90 text-justify leading-relaxed">
              {ABOUT.description}
            </p>

            {/* Stats */}
            {ABOUT.stats && (
              <div className="grid grid-cols-3 gap-4 pt-6">
                {ABOUT.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-cream mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-cream/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Imagen opcional */}
          {ABOUT.image && (
            <div className="relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={ABOUT.image}
              alt="Belleza de oro"
              fill
              className="object-cover drop-shadow-xl"
            />
          </div>
          )}

        </div>
        
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
          {ABOUT.features.map((feature) =>{
            const Icon = feature.icon

            return(
              <div key={feature.id} className="bg-cream rounded-xl p-6 text-center hover:shadow-xl transition-all">
                
                {/* Icono  */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ligthgreen rounded-full mb-4">
                  <Icon className='text-3xl text-cream'/>
                </div>

                {/* Titulo */}
                <h3 className="text-sm md:text-xl font-bold text-darkgreen mb-2">
                  {feature.title}
                </h3>

                {/* Descripcion */}
                <p className="text-sm text-darkgreen/70">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
