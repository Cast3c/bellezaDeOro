import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800' ],
  variable: '--font-hanken',
})

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: 'Belleza de Oro - Joyas en Oro Laminado 18k',
    template: '%s | Belleza de Oro' // Para páginas específicas
  },
  description: 'Descubre nuestra exclusiva colección de joyas en oro laminado 18k. Cadenas, anillos y aretes para hombre y mujer. Calidad garantizada y envíos a toda Colombia.',
  keywords: ['joyas oro laminado', 'cadenas oro', 'anillos oro', 'aretes oro', 'joyería Colombia', 'oro 18k'],
  authors: [{ name: 'Belleza de Oro' }],
  creator: 'Belleza de Oro',
  publisher: 'Belleza de Oro',
  
  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://bellezadeoro.com',
    siteName: 'Belleza de Oro',
    title: 'Belleza de Oro - Joyas en Oro Laminado 18k',
    description: 'Descubre nuestra exclusiva colección de joyas en oro laminado 18k.',
    images: [
      {
        url: '/images/og-image.jpg', // 1200x630px recomendado
        width: 1200,
        height: 630,
        alt: 'Belleza de Oro - Joyas en Oro Laminado',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Belleza de Oro - Joyas en Oro Laminado 18k',
    description: 'Descubre nuestra exclusiva colección de joyas en oro laminado 18k.',
    images: ['/images/twitter-image.jpg'],
    creator: '@bellezadeoro',
  },
  
  // Otros
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verificación
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    // yandex: 'codigo-yandex',
    // yahoo: 'codigo-yahoo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} antialiased`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
