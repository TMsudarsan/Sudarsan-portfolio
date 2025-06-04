import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FlipWords } from "./Flipword";
import Header from "./Header";
import { createContext, useState } from "react";
 const Hero = () => {

  const [isopen, setIsopen] = useState(false);
  return (
<>
    
      <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-18 md:px-10 px-6 relative overflow-hidden">
        {/* left section */}
        <div className="z-40 xl:mt-20 xl:mb-0 mb-[12%] pb-44 md:pb-0">
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
            className="  h-12 md:h-20  text-violet-200 hover:text-violet-300 "
          >
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold z-10 mb-6">
              <FlipWords
                words={[
                  "I'm a MERN STACK DEV..",
                  "I Love To Code..",
                  "I Build Things To Web",
                ]}
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
          <motion.a
           initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.9,
              duration: 1.5,
            }}
           href="#contact">
            <button  className="mt-6 px-4 py-2 text-lg rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-600 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500 md:hidden">Contact Me</button>
          </motion.a>
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
