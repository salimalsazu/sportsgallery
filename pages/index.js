import Categories from "@/Components/Categories";
import Option from "@/Components/Option";
import SecondCategory from "@/Components/SecondCategory";
import SubHero from "@/Components/SubHero";
import TrandingProducts from "@/Components/TrandingProducts";
import WhatsNew from "@/Components/WhatsNew";
import { motion, useScroll } from "framer-motion";
import HeroOne from "@/Components/HeroOne";
import BigSale from "@/Components/BigSale";


export default function Home({ data }) {



  const { scrollYProgress } = useScroll();


  return (
    <div >
      <motion.div
        className="progress-bar z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <HeroOne></HeroOne>
      <Option></Option>
      {/* <Hero /> */}
      <WhatsNew data={data} ></WhatsNew>
      <Categories />
      <BigSale></BigSale>
      <TrandingProducts data={data} ></TrandingProducts>
      <SecondCategory></SecondCategory>
      {/* <SubHero></SubHero> */}
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

