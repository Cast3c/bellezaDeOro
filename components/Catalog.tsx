'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PRODUCTS, CATEGORIES, GENDERS, Product } from '@/constants'
import Button from './Button'
import { MdFilterList } from 'react-icons/md'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Filtrar productos
  const filteredProducts = PRODUCTS.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchGender = selectedGender === 'all' || product.gender === selectedGender
    return matchCategory && matchGender
  })

  return (
    <section id="catalog" className="w-full min-h-screen bg-brown py-24" >
      <div className="max-w-7xl mx-auto px-6">
  
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-cream mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Explora nuestra colección exclusiva de joyas en oro laminado 18k
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar de filtros - Sticky en desktop */}
          <aside className="w-full lg:w-64 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              
              <div className="flex items-center gap-2 text-darkgreen font-bold text-lg">
                <MdFilterList className="text-2xl" />
                <span>Filtros</span>
              </div>

              {/* Filtro por Categoría */}
              <div>
                <h3 className="font-semibold text-darkgreen mb-3">Categoría</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all
                        ${selectedCategory === cat.value 
                          ? 'bg-darkgreen text-cream' 
                          : 'bg-gray-100 text-darkgreen hover:bg-gray-200'
                        }
                      `}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro por Género */}
              <div>
                <h3 className="font-semibold text-darkgreen mb-3">Género</h3>
                <div className="space-y-2">
                  {GENDERS.map((gender) => (
                    <button
                      key={gender.key}
                      onClick={() => setSelectedGender(gender.value)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all
                        ${selectedGender === gender.value 
                          ? 'bg-darkgreen text-cream' 
                          : 'bg-gray-100 text-darkgreen hover:bg-gray-200'
                        }
                      `}
                    >
                      {gender.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botón limpiar filtros */}
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedGender('all')
                }}
                className="w-full px-4 py-2 border-2 border-darkgreen text-darkgreen rounded-lg hover:bg-darkgreen hover:text-cream transition-all"
              >
                Limpiar filtros
              </button>

            </div>
          </aside>

          {/* Grid de productos */}
          <div className="flex-1">
            
            {/* Contador de productos */}
            <div className="mb-6 text-cream">
              <p className="text-lg">
                Mostrando <span className="font-bold">{filteredProducts.length}</span> productos
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {/* Sin resultados */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl text-cream/60">
                  No se encontraron productos con estos filtros
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Modal de producto (opcional) */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </section>
  )
}

export default Catalog