// app/catalogo/page.tsx
import type { Metadata } from 'next'
import Catalog from '@/components/Catalog'

// SEO para la página de catálogo
export const metadata: Metadata = {
  title: 'Catálogo Completo',
  description: 'Explora nuestra colección completa de joyas en oro laminado 18k. Cadenas, anillos y aretes para hombre y mujer.',
  openGraph: {
    title: 'Catálogo Completo - Belleza de Oro',
    description: 'Explora nuestra colección completa de 50+ joyas en oro laminado 18k.',
  }
}

export default function CatalogoPage() {
  return <Catalog />
}