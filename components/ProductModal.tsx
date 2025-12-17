'use client'
import { MdClose, MdWhatsapp } from 'react-icons/md'
import { Product } from '@/constants'
import Image from 'next/image'
import React from 'react'

type ProductModalProps = {
    product: Product
    onClose?: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-darkgreen">{product.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Imagen */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Detalles */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-darkgreen/60 uppercase font-semibold">
                  {product.category} • {product.gender}
                </span>
                <h3 className="text-3xl font-bold text-darkgreen mt-2">
                  ${product.price.toLocaleString()}
                </h3>
              </div>

              <p className="text-darkgreen/80">
                {product.description}
              </p>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-darkgreen">Material:</span>
                  <p className="text-darkgreen/70">{product.material}</p>
                </div>

                {product.sizes && (
                  <div>
                    <span className="font-semibold text-darkgreen">Tallas disponibles:</span>
                    <div className="flex gap-2 mt-2">
                      {product.sizes.map((size) => (
                        <span key={size} className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.colors && (
                  <div>
                    <span className="font-semibold text-darkgreen">Colores:</span>
                    <div className="flex gap-2 mt-2">
                      {product.colors.map((color) => (
                        <span key={color} className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href={product.whatsappLink || `https://wa.me/573001234567?text=Hola, me interesa ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-all font-semibold"
                >
                  <MdWhatsapp className="text-2xl" />
                  Consultar por WhatsApp
                </a>

                <button className="w-full px-6 py-3 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-cream transition-all font-semibold">
                  Agregar a favoritos
                </button>
              </div>

              {!product.inStock && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 font-semibold">Producto agotado</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal