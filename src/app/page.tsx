"use client";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Identity from "./components/Identity";
import Mission from "./components/Mission";
import Partners from "./components/Partners";
import Product from "./components/Product";
import { useInView } from "react-intersection-observer";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [identityRef, identityInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [productRef, productInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full items-center justify-center flex flex-col gap-y-5 end-md:gap-y-10">
      <Header />
      
      {/* Mission Section with Fade-in Animation */}
      <motion.div
        ref={missionRef}
        className="w-full flex items-center justify-center bg-end-bg-brown"
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Mission />
      </motion.div>
      
      {/* Identity Section with Fade-in Animation */}
      <motion.div
        ref={identityRef}
        className="w-full flex items-center justify-center"
        initial="hidden"
        animate={identityInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Identity />
      </motion.div>
      
      {/* Product Section with Fade-in Animation */}
      <motion.div
        ref={productRef}
        className="w-full flex items-center justify-center bg-end-bg-brown"
        initial="hidden"
        animate={productInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Product />
      </motion.div>
      
      {/* Partners Section with Fade-in Animation */}
      <motion.div
        ref={partnersRef}
        className="w-full flex items-center justify-center"
        initial="hidden"
        animate={partnersInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Partners />
      </motion.div>
      
      {/* Contact Section with Fade-in Animation */}
      <motion.div
        ref={contactRef}
        className="w-full flex items-center justify-center"
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
