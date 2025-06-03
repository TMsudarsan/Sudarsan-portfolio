import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import { FlipWords } from "./Flipword";
const Hero = () => {
  
  return (
    <>
      <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-18 px-10 relative overflow-hidden">
        {/* left section */}
        <div className="z-40 xl:mt-20 xl:mb-0 mb-[12%]">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold z-10 mb-6 text-violet-200 hover:text-violet-300  "
          >
            Sudarsan Mohan{" "}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.6,
              duration: 1.5,
            }}
            className="  h-10 sm:h-12 md:h-20  text-violet-200 hover:text-violet-300 "
          >
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold z-10 mb-6">
              <FlipWords
                words={["I'm a MERN STACK DEV..", "I Love To Code..", "I Build Things To Web"]}
              />
            </div>
          </motion.div>
          <br />{" "}
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className="text-lg md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
          >
            I am a MERN stack developer skilled in building dynamic, responsive,
            and user-friendly applications. With expertise in REST APIs, I
            seamlessly integrate frontend designs with powerful backend
            functionality to deliver complete full-stack solutions
          </motion.p>
        </div>
        {/* right side */}
        <Spline
          className=" absolute  md:left-[28%] rigth-0 top-[20%] lg:top-0 "
          scene="https://prod.spline.design/hk6uUg7KA8VxH8Mf/scene.splinecode"
        />
      </section>
    </>
  );
};

export default Hero;
