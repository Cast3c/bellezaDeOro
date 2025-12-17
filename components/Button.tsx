import React from 'react'
import { IconType } from 'react-icons'

type Buttonprops = {
    type: 'button' | 'submit'
    title: string
    icon?: IconType
    variant: 'btn_cream' | 'btn_darkGreen' | 'btn_ligthGreen' | 'btn_dark'
}

const Button = ({ type, title, icon: Icon, variant }: Buttonprops) => {
  return (
    <button type={type} className={`w-full flex items-center justify-center gap-2
    rounded-lg px-2 py-1 font-extrabold cursor-pointer drop-shadow-lg ${variant}`}>
        {Icon && <Icon className='text-2xl'/>}
        <label className='bold-16 '>{title}</label>
    </button>
  )
}

export default Button