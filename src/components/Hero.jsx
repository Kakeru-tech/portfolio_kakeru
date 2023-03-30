import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    // Hero top level container
    <section className='relative w-full
    h-screen mx-auto'>

      <div className={`${styles.paddingX}
      absolute
      inset-0 top-[120px]
      max-w-7xl mx-auto 
      flex flex-row items-start gap-5`}>

        {/* circle amd line  */}
        <div className='flex flex-col justify-center
        items-center mt-5'>
          {/* cercle */}
          <div className='w-5 h-5 rounded-full
           bg-[#915eff]'/>
          {/* line */}
          <div className='w-1 sm:h-80 h-40
           violet-gradient'/>
        </div>


        {/* Introduction 1 */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className='text-[#915eff]'>
              Kakeru
            </span>
          </h1>


          {/* introduction 2 */}
          <p className={`${styles.heroSubText}
        mt-2 text-white-100
        `}>
            I develop  user interfaces
            <br className='sm:block' hidden />
            and web applications
          </p>
        </div>
      </div>

      {/* computer in canvas */}
      <ComputersCanvas />

      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className='w-[64px] h-[35px]
          rounded-3xl border-4 border-secondaray
          flex justify-center items-start p-2'>
            <motion.div

              initial={{ x: -14 }}
              animate={{ x: 14 }}

              transition={{
                type: "spring",
                duraton: 1.5,
                repeat: Infinity,
                repeatType: 'mirror',
                repeatDelay: 0.1
              }}
              className='w-3 h-3 rounded-full
            bg-secondary mb-1'
            />
          </div>
        </a>

      </div>

    </section>

  );
};

export default Hero;
