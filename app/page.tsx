import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Catalog from '@/components/Catalog';
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Catalog />
      <About />
      {/* <Contact /> */}
    </>
  )
}
