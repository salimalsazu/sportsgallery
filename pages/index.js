import Categories from "@/Components/Categories";
import Hero from "@/Components/Hero";
import SecondCategory from "@/Components/SecondCategory";
import TrandingProducts from "@/Components/TrandingProducts";
import WhatsNew from "@/Components/WhatsNew";
import { motion, useScroll } from "framer-motion";



export default function Home() {


  const { scrollYProgress } = useScroll();


  return (
    <div >
      <motion.div
        className="progress-bar z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <WhatsNew />
      <Categories />
      <TrandingProducts />
      <SecondCategory></SecondCategory>
    </div>
  )
}
