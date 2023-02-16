import Categories from "@/Components/Categories";
import Option from "@/Components/Option";
import SecondCategory from "@/Components/SecondCategory";
import TrandingProducts from "@/Components/TrandingProducts";
import WhatsNew from "@/Components/WhatsNew";
import { motion, useScroll } from "framer-motion";
import HeroOne from "@/Components/HeroOne";
import BigSale from "@/Components/BigSale";
import Featured from "@/Components/Featured";
import Discount from "@/Components/Discount";
import Scroll from "@/Components/Scroll";


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
      <Scroll></Scroll>
      <SecondCategory></SecondCategory>
      <Discount></Discount>
      <Featured data={data} ></Featured>

    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('/api/watch')
  // console.log(res.data.watches)
  const data = await res.json()
  // const { watches } = res.data
  // console.log(watches)
  return {
    props: { data }
  }
}

