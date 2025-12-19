'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER, CONTACT } from '@/constants'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  // Mapeo de iconos
  const iconMap: { [key: string]: React.ElementType } = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
    tiktok: FaTiktok
  }

  return (
    <footer className="w-full bg-totaldark text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section - Logo y Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-cream/20">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              {FOOTER.company.logo && (
                <Image 
                  src={FOOTER.company.logo}
                  alt={FOOTER.company.name}
                  width={70}
                  height={70}
                />
              )}
              <h3 className="text-2xl font-bold">{FOOTER.company.name}</h3>
            </div>
            
            <p className="text-cream/70 leading-relaxed">
              {FOOTER.company.description}
            </p>

            {/* Redes Sociales */}
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                {CONTACT.socialMedia.map((social) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-lightgreen hover:scale-110 transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="text-xl" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {FOOTER.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-cream/70 hover:text-cream hover:underline transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm text-center md:text-left">
            {FOOTER.legal.copyright}
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link 
              href={FOOTER.legal.terms || '#'}
              className="text-cream/60 hover:text-cream transition-colors"
            >
              Términos
            </Link>
            <Link 
              href={FOOTER.legal.privacy || '#'}
              className="text-cream/60 hover:text-cream transition-colors"
            >
              Privacidad
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer