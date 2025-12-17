'use client'

import Link from 'next/link'
import Image from 'next/image';
import { MdClose, MdMenu, MdPerson} from "react-icons/md"
import React, { useState } from 'react'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 flex items-center justify-between px-3  shadow-md bg-darkgreen/95 backdrop-blur-sm text-cream  z-50'>
      <Link href='/' className='flex items-center'>
        <Image src='/images/boLogo.png' alt='logo' width={76} height={29} />
        <div className=' text-2xl md:text-3xl font-black'>Belleza de oro</div>
      </Link>
      <ul className={`flex flex-col text-center md:flex-row md:static absolute top-full right-0 left-0 bg-darkgreen md:bg-transparent gap-6 p-6 transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 md:translate-y-0 md:opacity-100'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>
              <span className='text-sm'>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className={`text-3xl flex items-center md:hidden cursor-pointer transition-transform duration-500 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
        {/* <MdMenu /> */}
      </button>
      {/* <div className='hidden lg:flex items-center'>
        <Button 
        type='button'
        title='Login'
        icon={MdPerson}
        variant='btn_cream'
        />
      </div> */}
    </nav>
  )
}

export default Navbar