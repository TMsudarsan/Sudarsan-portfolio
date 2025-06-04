import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiX, FiMenu } from "react-icons/fi";
 const Header = () => {
  const [isopen, setIsopen] = useState(false);
 
  const [contactform,setContactform] = useState(false);

  const opencontact = ()=>setContactform(true)
  const closecontact = ()=>setContactform(false)

  const togglemenubtn = () => setIsopen(!isopen);
     const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a1446f41-df23-4ff2-890b-cad7d884e1cf");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20   ">
         <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            TM 
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">
            Sudarsan
          </span>
        </motion.div>
        
        <nav className=" hidden lg:flex space-x-8">
          {["Home", "About", "Projects" , "Contact"].map(
            (item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                  duration: 1.2,
                }}
                  href={`#${item.toLowerCase()}`}
                key={item}
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full duration-300 transition-all"></span>
              </motion.a>
            )
          )}
        </nav>
        {/* link */}
        <div className="hidden md:flex space-x-4 items-center">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://github.com/TMsudarsan"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://www.linkedin.com/in/sudarsantm"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          {/* contact btn */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            onClick={opencontact}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-600 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={togglemenubtn}>
            {isopen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isopen ? 1 : 0,
          height: isopen ? "auto" : 0,
        }}
          exit={{ opacity: 0, height: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="md:hidden overflow:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3  ">
          {["Home", "About", "projects", "contact"].map(
            (item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={togglemenubtn}
                className="text-gray-300 font-medium py-2"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="pt-4 border-t border-gary-200 border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button
          onClick={()=>{togglemenubtn()
            opencontact()
          }}
           className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">
            Contact Me
          </button>
        </div>
      </motion.div>
      <AnimatePresence> 
      {contactform && (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
          duration:0.5
        }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
          initial={{opacity:0,scale:0.8,y:30}}
          animate={{scale:1,  opacity:1 , y:0}}
          exit={{scale:0.8,  opacity:0 , y:30}}
          transition={{
            type:"spring",
            damping:30,
            stiffness:200,
            duration:0.6

          }}
           className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-300">
                Get In Touct
              </h1>
              <button onClick={closecontact}><FiX className="w-5 h-5 text-gray-300 font-extrabold"/></button>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
               <div className="">
                <label htmlFor="name" className="block  text-sm font-medium text-gray-300 mb-1">Name</label>
                <input type="text"
                required
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700" />
               </div>
               <div className="">
                <label htmlFor="email" className="block  text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="text"
                required
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700" />
               </div>
               <div className="">
                <label htmlFor="message" className="block  text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea rows="4"
                id="message"
                name="message"
                required
                placeholder="Any Enquiry"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700" />
               </div>
               <motion.button 
               type="submit"
               onClick={closecontact}
               whileHover={{scale: 1.03}}
               whileTap={{scale: 0.97}}
               className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-violet-700 transition-all  duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600">Send Message</motion.button>
            </form> 
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
