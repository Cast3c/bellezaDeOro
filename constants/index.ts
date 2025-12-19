import { IconType } from 'react-icons'
import { MdHome, MdDiamond, MdInfo, MdMail, MdOutlineBookmark, MdStar, MdVerified, MdLocalShipping, MdSupportAgent } from 'react-icons/md'

type NavLink = {
    key: string
    label: string
    href: string
    icon: IconType
}

type Service = {
    id: number
    title: string
    description: string
    icon: IconType
    image?: string
}

export type Product = {
    id: number
    name: string
    category: 'cadenas' | 'anillos' | 'aretes' | 'pulseras' | 'dijes' | 'tobilleras' // solo puede ser uno de estos 
    gender?: 'hombre'  | 'mujer' | 'unisex'
    price: number
    description: string
    image: string
    images?: string[] // galeria opcional 
    material: string // Ej:"Oro laminado 18k"
    sizes?: string[] // Ej:["S", "M", "L"] o ['16cm', '18cm']
    colors?: string[] // Ej: ['Oro amarillo', 'Oro rosa']
    inStock: boolean
    isFeatured?: boolean // Producto destacado
    isNew?: boolean // Producto nuevo
    discount?: number // porcentaje de descuento (0-100)
    sku?: string //Codigo del producto 
    whatsappLink?: string
}

type Testimonial = {
    id: number
    name: string
    role: string
    comment: string
    rating: number
    avatar?: string
}

type SocialLink = {
    name: string
    url: string
    icon: string
}

type FAQ = {
    id: number
    question: string
    answer: string
}

type HeroSection = {
    title: string
    subtitle?: string
    description?: string
    primaryCTA:{
        text: string
        href: string
    }
    secondaryCTA?:{
        text: string
        href: string
    }
    badge?: string
    image?: string
}

type Featured = {
  id: number
  title: string
  description?: string
  paraph: string
  image: string
  cta: {
    text: string
    href: string
  }
}

type AboutSection = {
    badge?: string
    title: string
    subtitle?: string
    description: string
    features: {
        id: number
        title: string
        description: string
        icon: IconType
    }[]
    image?: string
    stats?: {
        label: string
        value: string
    }[]
}

type ContactInfo = {
    title: string
    subtitle?: string
    email: string
    phone: string
    whatsapp: string
    address?: string
    socialMedia: SocialLink[]
    hours?: string
}

type Footer = {
    company: {
        name: string
        description: string
        logo?: string
    }
    sections:{
        title: string
        links:{
            label: string
            href: string
        }[]
    }[]
    legal:{
        copyright: string
        terms?: string
        privacy?: string
    }
}

// ============================================
// NAVBAR
// ============================================

export const NAV_LINKS: NavLink[] = [
    { key: 'home', label: 'Inicio', href: '/#home', icon: MdHome },
    { key: 'featured', label: 'Destacados', href: '/#featured', icon: MdOutlineBookmark },
    { key: 'catalog', label: 'Catálogo', href: '/catalog', icon: MdDiamond },
    // { key: 'testimonials', label: 'Testimonios', href: '#testimonials', icon: MdStar },
    { key: 'about', label: 'Nosotros', href: '/#about', icon: MdInfo },
    // { key: 'contact', label: 'Contacto', href: '/#contact', icon: MdMail}
    
]

// ============================================
// HERO SECTION
// ============================================

export const HERO: HeroSection = {
    title: 'Elegancia que trasciende el tiempo',
    description: 'Cada pieza cuenta una historia. Descubre joyería en oro laminado de 18K que realza tu belleza natural y acompaña tus momentos más especiales.',
    primaryCTA:{ text: 'Comprar ahora', href: '' },
    badge: '120.000',
    image: '/images/beautiful-luxury-necklace-jewelry-stand-neck.png'
}

// ============================================
// ABOUT SECTION
// ============================================

export const ABOUT: AboutSection = {
  badge: 'Nuestra Historia',
  title: 'Belleza de Oro',
  subtitle: 'Tradición y elegancia desde el corazón',
  description: 'En Belleza de Oro nos especializamos en ofrecer joyas de oro laminado de la más alta calidad. Cada pieza es cuidadosamente seleccionada para garantizar durabilidad, belleza y un precio justo. Nuestra pasión es ayudarte a encontrar esa joya perfecta que complemente tu estilo y personalidad.',
  features: [
    {
      id: 1,
      title: 'Calidad Garantizada',
      description: 'Oro laminado 18k con certificación de calidad',
      icon: MdVerified
    },
    {
      id: 2,
      title: 'Envío Seguro',
      description: 'Empaque especial y envío asegurado a todo el país',
      icon: MdLocalShipping
    },
    {
      id: 3,
      title: 'Diseños Exclusivos',
      description: 'Colecciones únicas para hombre y mujer',
      icon: MdStar
    },
    {
      id: 4,
      title: 'Asesoría Personalizada',
      description: 'Te ayudamos a elegir la pieza perfecta',
      icon: MdSupportAgent
    }
  ],
  image: '/images/boLogo.png',
  stats: [
        { label: 'Años de experiencia', value: '10+' },
        { label: 'Clientes satisfechos', value: '500+' },      
        { label: 'Productos disponibles', value: '100+' }
    ]
}

// ============================================
// DESTACADOS
// ============================================

export const FEATURED: Featured[] = [
  {
    id: 1,
    title: "Brilla con luz propia cada dia",
    paraph:"Aretes que capturan miradas y reflejan tu personalidad única. Diseñados para mujeres que no pasan desapercibidas y saben que los detalles lo son todo.",
    image: "/images/aretes_x3_ch_mujer.jpg",
    cta: { text:"Explorar coleccion", href:"/catalog" }
  },
  {
    id: 2,
    title: "Lujo que se siente calidad que se ve",
    paraph: "Cadena con diseño clásico y acabado brillante. Perfecta para usar sola o con otros accesorios, combina elegancia y durabilidad.",
    image: "/images/cadena_serpiente_hombre_6mm.jpg",
    cta: { text:"Ver más diseños", href:"/catalog" }
  }
]
// ============================================
// PRODUCTOS
// ============================================

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Cadena Cubana Mujer',
    category: 'cadenas',
    gender: 'mujer',
    price: 140000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_cubana_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CUB-001'
  },
  {
    id: 2,
    name: 'Cadena Gucci Hombre 5mm',
    category: 'cadenas',
    gender: 'hombre',
    price: 230000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_gucci_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-GUC-002'
  },
  {
    id: 3,
    name: 'Cadena Gucci Mujer 5mm',
    category: 'cadenas',
    gender: 'mujer',
    price: 180000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_gucci_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-GUC-003'
  },
  {
    id: 4,
    name: 'Pulsera Lazo Hombre',
    category: 'pulseras',
    gender: 'hombre',
    price: 140000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante. ',
    image: '/images/pulsera_lazo_hombre.jpg',
    material: 'Oro laminado 18k',
    colors: ['Oro amarillo'],
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-LAZ-004',
  },
  {
    id: 5,
    name: 'Cadena Lazo Rosa Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 260000,
    description: 'Cadena de Oro Rosa Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_lazo_rosa_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-LAZ-005'
  },
  {
    id: 6,
    name: 'Cadena Cartier Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 180000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_cartier_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CAR-006'
  },
  {
    id: 7,
    name: 'Cadena Chinesca Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 230000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante. ',
    image: '/images/cadena_chinesca_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CHI-007'
  },
  {
    id: 8,
    name: 'Pulsera Chinesca Hombre',
    category: 'pulseras',
    gender: 'hombre',
    price: 150000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_chinesca_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-CHI-008'
  },
  {
    id: 9,
    name: 'Cadena Veneciana Mujer',
    category: 'cadenas',
    gender: 'mujer',
    price: 150000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_veneciana_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-VEN-009'
  },
  {
    id: 10,
    name: 'Pulsera Veneciana Mujer',
    category: 'pulseras',
    gender: 'mujer',
    price: 110000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_veneciana_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-VEN-010'
  },
  {
    id: 11,
    name: 'Pulsera Rustica Hombre 4mm',
    category: 'pulseras',
    gender: 'hombre',
    price: 160000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_rustica_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-RUS-011'
  },
  {
    id: 13,
    name: 'Pulseras Grabada Mujer',
    category: 'pulseras',
    gender: 'mujer',
    price: 110000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_grabada_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-GRA-013'
  },
  {
    id: 14,
    name: 'Cadena Entrelazada Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 200000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_entrelazada_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-ENT-014'
  },
  {
    id: 15,
    name: 'Cadena Entrelazada Hombre 4mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 180000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_entrelazada_65cm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-ENT-015'
  },
  {
    id: 16,
    name: 'Cadena Entrelazada Mujer 4mm/45cm',
    category: 'cadenas',
    gender: 'mujer',
    price: 150000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_entrelazada_mujer_45cm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-ENT-016'
  },
  {
    id: 17,
    name: 'Cadena Roma Mujer 4mm',
    category: 'cadenas',
    gender: 'mujer',
    price: 170000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_roma_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-ROM-017'
  },
  {
    id: 18,
    name: 'Cadena Roma Hombre 4mm',
    category: 'cadenas',
    gender: 'hombre',
    price: 200000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_roma_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-ROM-018'
  },
  {
    id: 19,
    name: 'Cadena Franco Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 180000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_franco_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-FRA-019'
  },
  {
    id: 20,
    name: 'Cadena Trigo Hombre 5mm',
    category: 'cadenas',
    gender: 'hombre',
    price: 180000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_trigo_hombre_5mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-TRI-020'
  },
  {
    id: 21,
    name: 'Cadena Barbada Hombre 4mm/45cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 180000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_barbada_hombre_4mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-BAR-021'
  },
  {
    id: 22,
    name: 'Cadena CH Mujer',
    category: 'cadenas',
    gender: 'mujer',
    price: 150000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_ch_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CH-022'
  },
  {
    id: 23,
    name: 'Aretes x3 CH Mujer',
    category: 'aretes',
    gender: 'mujer',
    price: 120000,
    description: 'Aretes de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/aretes_x3_ch_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'ARE-CH-023'
  },
  {
    id: 24,
    name: 'Dije cruz letras',
    category: 'dijes',
    gender: 'unisex',
    price: 100000,
    description: 'Dije Cruz Letras en Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/dije_cruz_letras.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'DIJ-CRU-024'
  },
  {
    id: 25,
    name: 'Cadena Cubana Hombre 9mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 300000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_cubana_hombre_9mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CUB-025'
  },
  {
    id: 26,
    name: 'Pulsera Cubana Hombre',
    category: 'pulseras',
    gender: 'hombre',
    price: 140000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_cubana_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-CUB-026'
  },
  {
    id: 27,
    name: 'Pulsera Grano de Cafe Hombre',
    category: 'pulseras',
    gender: 'hombre',
    price: 140000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_grano_de_cafe_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-GRA-027'
  },
  {
    id: 28,
    name: 'Pulsera Grano de Cafe Hombre 5.5mm/20cm',
    category: 'pulseras',
    gender: 'hombre',
    price: 130000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_grano_cafe_5.5mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-GRA-028'
  },
  {
    id: 29,
    name: 'Pulsera Grano de Cafe Mujer 5.5mm',
    category: 'pulseras',
    gender: 'mujer',
    price: 110000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_grano_cafe_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-GRA-029'
  },
  {
    id: 30,
    name: 'Tobillera unisex Grano de Cafe',
    category: 'tobilleras',
    gender: 'unisex',
    price: 150000,
    description: 'Tobillera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/tobillera_unisex_grano_cafe.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'TOB-GRA-030'
  },
  {
    id: 31,
    name: 'Cadena grano doble Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 300000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_grano_doble_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-DOB-031'
  },
  {
    id: 32,
    name: 'Pulsera grano doble Hombre',
    category: 'pulseras',
    gender: 'hombre',
    price: 200000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_grano_doble_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-DOB-032'
  },
  {
    id: 33,
    name: 'Cadena Lazo Hombre 8mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 300000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_lazo_hombre_8mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-LAZ-033'
  },
  {
    id: 34,
    name: 'Cadena Lazo Mujer',
    category: 'cadenas',
    gender: 'mujer',
    price: 120000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_lazo_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-LAZ-034'
  },
  {
    id: 35,
    name: 'Pulsera Lazo Mujer',
    category: 'pulseras',
    gender: 'mujer',
    price: 100000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_lazo_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-LAZ-035'
  },
  {
    id: 36,
    name: 'Pulsera Lazo Rosa Hombre 6mm/20cm',
    category: 'pulseras',
    gender: 'hombre',
    price: 140000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_lazo_rosa_hombre_6mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-LAZ-036'
  },
  {
    id: 37,
    name: 'Cadena Lazo mujer 3mm/45cm',
    category: 'cadenas',
    gender: 'mujer',
    price: 140000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_lazo_mujer_3mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-LAZ-037'
  },
  {
    id: 38,
    name: 'Pulsera Lazo mujer 3mm/17cm',
    category: 'pulseras',
    gender: 'mujer',
    price: 110000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_lazo_mujer_3mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-LAZ-038'
  },
  {
    id: 39,
    name: 'Tobillera Unisex Lazo 3mm/25cm',
    category: 'pulseras',
    gender: 'unisex',
    price: 140000,
    description: 'Tobillera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/tobillera_lazo_unisex_3mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'TOB-LAZ-039'
  },
  {
    id: 40,
    name: 'Cadena Lazo Rosa Mujer 3mm/45cm',
    category: 'cadenas',
    gender: 'mujer',
    price: 140000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_lazo_rosa_mujer_3mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-LAZ-040'
  },
  {
    id: 41,
    name: 'Pulsera Lazo Rosa Mujer',
    category: 'pulseras',
    gender: 'mujer',
    price: 110000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_lazo_rosa_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-LAZ-041'
  },
  {
    id: 42,
    name: 'Cadena Serpiente Hombre 6mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 240000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_serpiente_hombre_6mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-SER-042'
  },
  {
    id: 43,
    name: 'Cadena Serpiente Hombre 8.5mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 300000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_serpiente_hombre_8.5mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-SER-043'
  },
  {
    id: 44,
    name: 'Cadena Serpiente Rosa Hombre',
    category: 'cadenas',
    gender: 'hombre',
    price: 260000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_serpiente_rosa_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-SER-044'
  },
  {
    id: 45,
    name: 'Tobillera Serpiente Unisex',
    category: 'tobilleras',
    gender: 'unisex',
    price: 150000,
    description: 'Tobillera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/tobillera_serpiente_unisex.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'TOB-SER-045'
  },
  {
    id: 46,
    name: 'Cadena Cartier Hombre 6mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 240000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_cartier_hombre_6mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CAR-046'
  },
  {
    id: 47,
    name: 'Cadena Cartier Hombre 8.5mm/65cm',
    category: 'cadenas',
    gender: 'hombre',
    price: 300000,
    description: 'Cadena de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/cadena_cartier_hombre_8.5mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'CAD-CAR-047'
  },
  {
    id: 48,
    name: 'Pulsera Cartier Hombre ',
    category: 'pulseras',
    gender: 'hombre',
    price: 140000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_cartier_hombre.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-CAR-048'
  },
  {
    id: 49,
    name: 'Pulsera Cartier Mujer',
    category: 'pulseras',
    gender: 'mujer',
    price: 100000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_cartier_mujer.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-CAR-049'
  },
  {
    id: 50,
    name: 'Pulsera Cartier Hombre 3mm/20cm',
    category: 'pulseras',
    gender: 'mujer',
    price: 120000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_cartier_hombre_3mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-CAR-050'
  },
  {
    id: 51,
    name: 'Pulsera Cartier Hombre 3mm/20cm',
    category: 'pulseras',
    gender: 'mujer',
    price: 120000,
    description: 'Pulsera de Oro Laminado Americano 18K con diseño clásico y acabado brillante.',
    image: '/images/pulsera_cartier_hombre_3mm.jpg',
    material: 'Oro laminado 18k',
    inStock: true,
    isFeatured: false,
    isNew: false,
    sku: 'PUL-CAR-050'
  }
]

// Categorías para filtros
export const CATEGORIES = [
  { key: 'all', label: 'Todos', value: 'all' },
  { key: 'cadenas', label: 'Cadenas', value: 'cadenas' },
  { key: 'aretes', label: 'Aretes', value: 'aretes' },
  { key: 'pulseras', label: 'Pulseras', value: 'pulseras' },
  { key: 'tobilleras', label: 'Tobilleras', value: 'tobilleras' }
]

// Géneros para filtros
export const GENDERS = [
  { key: 'all', label: 'Todos', value: 'all' },
  { key: 'hombre', label: 'Hombre', value: 'hombre' },
  { key: 'mujer', label: 'Mujer', value: 'mujer' },
  { key: 'unisex', label: 'Unisex', value: 'unisex' }
]

// ============================================
// TESTIMONIOS
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Cliente frecuente',
    comment: 'Compré unos aretes hermosos y la calidad superó mis expectativas. El oro laminado se ve increíble y el precio es muy justo. ¡Totalmente recomendado!',
    rating: 5,
    avatar: '/images/avatars/maria.jpg'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Comprador verificado',
    comment: 'La cadena cubana que pedí llegó perfectamente empacada. Es exactamente como se ve en las fotos. Excelente atención al cliente.',
    rating: 5,
    avatar: '/images/avatars/carlos.jpg'
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Cliente satisfecha',
    comment: 'Mi anillo de compromiso es precioso. La asesoría fue muy profesional y me ayudaron a elegir el tamaño perfecto. ¡Gracias Belleza de Oro!',
    rating: 5,
    avatar: '/images/avatars/ana.jpg'
  },
  {
    id: 4,
    name: 'Luis Herrera',
    role: 'Comprador verificado',
    comment: 'Compré varias piezas para regalar y todas fueron un éxito. La calidad-precio es insuperable. Ya hice mi segunda compra.',
    rating: 5,
    avatar: '/images/avatars/luis.jpg'
  },
  {
    id: 5,
    name: 'Sofia Martínez',
    role: 'Cliente VIP',
    comment: 'Llevo meses usando mis aretes y siguen como nuevos. El oro laminado es de excelente calidad y no se descolora. ¡Volveré a comprar!',
    rating: 5,
    avatar: '/images/avatars/sofia.jpg'
  },
  {
    id: 6,
    name: 'Diego Ramírez',
    role: 'Comprador verificado',
    comment: 'El servicio de envío fue rápido y seguro. La cadena llegó en perfectas condiciones y el empaque era muy elegante. 100% recomendado.',
    rating: 5,
    avatar: '/images/avatars/diego.jpg'
  }
]

// ============================================
// PREGUNTAS FRECUENTES (FAQ)
// ============================================

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: '¿Qué es el oro laminado?',
    answer: 'El oro laminado es una capa gruesa de oro real (18k) adherida a un metal base mediante calor y presión. A diferencia del baño de oro, el laminado es más duradero y mantiene su brillo por mucho más tiempo.'
  },
  {
    id: 2,
    question: '¿Cuánto tiempo dura el oro laminado?',
    answer: 'Con el cuidado adecuado, nuestras joyas de oro laminado 18k pueden durar años sin perder su brillo ni color. Te recomendamos evitar el contacto con productos químicos y guardarlas en un lugar seco.'
  },
  {
    id: 3,
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, realizamos envíos seguros a toda Colombia. El tiempo de entrega varía según la ciudad, pero generalmente es de 2-5 días hábiles. Todos nuestros envíos incluyen número de seguimiento.'
  },
  {
    id: 4,
    question: '¿Cómo sé qué talla de anillo necesito?',
    answer: 'Puedes medir tu dedo con un anillo que ya tengas o contactarnos por WhatsApp para asesorarte. También ofrecemos una guía de tallas descargable. Si tienes dudas, nuestro equipo te ayudará a elegir la talla correcta.'
  },
  {
    id: 5,
    question: '¿Tienen garantía los productos?',
    answer: 'Sí, todos nuestros productos tienen garantía contra defectos de fabricación. Si tu joya presenta algún problema por fabricación, la reparamos o reemplazamos sin costo adicional.'
  },
  {
    id: 6,
    question: '¿Cómo puedo realizar un pedido?',
    answer: 'Puedes realizar tu pedido directamente por WhatsApp. Solo debes enviarnos el código del producto (SKU), tu talla/medida preferida y tus datos de envío. Te confirmaremos disponibilidad y métodos de pago.'
  },
  {
    id: 7,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias, Nequi, Daviplata y pago contra entrega en algunas ciudades. Una vez confirmes tu pedido, te enviaremos los detalles de pago.'
  },
  {
    id: 8,
    question: '¿Puedo devolver un producto si no me gusta?',
    answer: 'Sí, aceptamos devoluciones dentro de los primeros 7 días después de recibir tu pedido, siempre que el producto esté sin usar y en su empaque original. Los gastos de envío de devolución corren por cuenta del cliente.'
  },
  {
    id: 9,
    question: '¿Cómo cuido mis joyas de oro laminado?',
    answer: 'Evita el contacto con perfumes, cremas y productos químicos. Límpialas suavemente con un paño suave y seco. Guárdalas en un lugar seco cuando no las uses. Con estos cuidados, tus joyas mantendrán su brillo por años.'
  },
  {
    id: 10,
    question: '¿Las joyas vienen con certificado?',
    answer: 'Sí, cada pieza viene con un certificado de autenticidad que garantiza que es oro laminado 18k. También incluimos una tarjeta con consejos de cuidado y nuestra información de contacto.'
  }
]

// ============================================
// CONTACTO
// ============================================

export const CONTACT: ContactInfo = {
  title: 'Contáctanos',
  subtitle: 'Estamos aquí para ayudarte. Escríbenos y responderemos lo más pronto posible.',
  email: 'info@bellezadeoro.com',
  phone: '+57 300 123 4567',
  whatsapp: 'https://api.whatsapp.com/send?phone=573018507938&text=Hola!%20Lindo%20d%C3%ADa%20quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%F0%9F%92%8E',
  address: 'Bogotá, Colombia',
  hours: 'Lunes a Sábado: 9:00 AM - 6:00 PM',
  socialMedia: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/bellezadeoro',
      icon: 'facebook'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/bellezadeoro',
      icon: 'instagram'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/573018507938',
      icon: 'whatsapp'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@bellezadeoro',
      icon: 'tiktok'
    }
  ]
}

// ============================================
// FOOTER
// ============================================

export const FOOTER: Footer = {
  company: {
    name: 'Belleza de Oro',
    description: 'Joyas de oro laminado que reflejan tu estilo y personalidad. Calidad garantizada y diseños exclusivos.',
    logo: '/images/boLogo.png'
  },
  sections: [
    {
      title: 'Productos',
      links: [
        { label: 'Cadenas', href: '/catalog' },
        { label: 'Pulseras', href: '/catalog' },
        { label: 'Aretes', href: '/catalog' },
        { label: 'Destacados', href: '#featured' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Nosotros', href: '#about' },
        // { label: 'Testimonios', href: '#testimonials' },
        // { label: 'Preguntas Frecuentes', href: '#faq' },
        { label: 'Contacto', href: 'https://api.whatsapp.com/send?phone=573018507938&text=Hola!%20Lindo%20d%C3%ADa%20quiero%20tener%20m%C3%A1s%20informaci%C3%B3n%F0%9F%92%8E' }
      ]
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Guía de Tallas', href: '#' },
        { label: 'Envíos', href: '#faq' },
        { label: 'Garantía', href: '#faq' },
        { label: 'Devoluciones', href: '#faq' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Términos y Condiciones', href: '/terminos' },
        { label: 'Política de Privacidad', href: '/privacidad' },
        { label: 'Política de Cookies', href: '/cookies' }
      ]
    }
  ],
  legal: {
    copyright: `© ${new Date().getFullYear()} Belleza de Oro. Todos los derechos reservados.`,
    terms: '/terminos',
    privacy: '/privacidad'
  }
}