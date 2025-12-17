import React from 'react'
import { Product } from '@/constants'
import Image from 'next/image'

type ProductCardProps = {
    product: Product
    onClick?: () => void
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {

  return (
    <div className='bg-ligthgreen rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group p-3' onClick={onClick}>
        <div className='relative aspect-square overflow-hidden'>
            <Image 
                src={product.image}
                alt={product.name}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover object-center drop-shadow-2xl rounded-xl'
            />
            <div className='absolute top-3 left-3 flex flex-col gap-2'>
                {product.isNew && (
                    <span className='px-3 py-1 bg-cream text-darkgreen text-xs font-extrabold rounded-xl text-center'>
                        Nuevo
                    </span>
                )}
                {product.isFeatured && (
                    <span className='px-3 py-1 bg-darkgreen text-cream text-xs font-extrabold rounded-xl text-center'>
                        Destacado
                    </span>
                )}
                {product.discount && (
                    <span className='px-3 py-1 bg-red-500 text-white text-xs font-extrabold rounded-xl text-center'>
                        -{product.discount}%
                    </span>
                )}
            </div>
            {!product.inStock && (
                <div className='absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl'>
                    <span className='text-white text-lg font-extrabold'>Agotado</span>
                </div>
            )}
        </div>
        <div className='p-2 space-y-2 justify-between'>
            <div className='flex items-center justify-between'>
                <span className='hidden md:block text-xs text-cream/60 uppercase font-extrabold'>
                    {product.category}
                </span>
                <span className='text-xs text-cream/60 capitalize font-extrabold'>
                    {product.gender}
                </span>
            </div>
            <h3 className='text-sm md:text-lg font-black text-cream md:line-clamp-1'>
                {product.name}
            </h3>
            <p className='hidden sm:block text-sm text-white/70 line-clamp-2'>
                {product.description}
            </p>
            <div className='flex md:items-center justify-between md:pt-2 '>
                <div>
                    {product.discount ? (
                        <div className='flex items-center gap-2'>
                            <span className='text-xs md:text-xl font-bold text-cream'>
                                ${(product.price * (1- product.discount / 100)).toLocaleString()}
                            </span>
                            <span className='text-xs md:text-sm text-cream/50 line-through'>
                                ${product.price.toLocaleString()}
                            </span>
                        </div>
                    ):(
                        <span className='text-xs md:text-xl font-bold text-cream '>
                            ${product.price.toLocaleString()}
                        </span>
                    )}
                </div>
                <button className='px-4 py-2 bg-darkgreen text-cream rounded-lg hover:bg-darkgreen/50 transition-all text-xs md:text-sm font-semibold'>
                    Ver mas
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard