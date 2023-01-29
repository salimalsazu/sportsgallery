import Categories from "@/Components/Categories";
import Hero from "@/Components/Hero";
import SecondCategory from "@/Components/SecondCategory";
import TrandingProducts from "@/Components/TrandingProducts";
import WhatsNew from "@/Components/WhatsNew";
import { motion, useScroll } from "framer-motion";



export default function Home({ data }) {



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
      <TrandingProducts data={data} ></TrandingProducts>
      <SecondCategory></SecondCategory>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/watch')
  // console.log(res.data.watches)
  const data = await res.json()
  // const { watches } = res.data
  // console.log(watches)
  return {
    props: { data }
  }
}

