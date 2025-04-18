import { useEffect, useRef } from 'react';
import CodingPlayer from './CodingPlayer';
import { motion } from 'framer-motion';
import React from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

const Hero: React.FC = ()=>{
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(()=>{
        const heading=headingRef.current;
        if(heading){
            heading.classList.add('animate-fadeIn');
        }
    },[]);

    // Smooth scroll handler
    const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <section className='relative min-h-screen flex items-center justify-center px-8 py-20'>
            <div className='container mx-auto text-center z-10'>
            <CodingPlayer />
                <h1 ref={headingRef} className='text-4xl md:text-6xl font-bold mb-6 opacity-0 transition-opacity duration-1000'>
                 Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Anuj Parashar</span>
                </h1>
                <div className="relative mb-8 flex justify-center overflow-hidden">
                    <motion.h2 
                        className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-mono'
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: "easeInOut"
                        }}
                        style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                    >
                        Software Engineer & Web Developer
                    </motion.h2>
                </div>
                <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
          I create beautiful, functional websites and applications with a focus on user experience.
        </p>
        {/* Social Icons Row */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/anuj-parashar-918209213/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 p-3 rounded-full text-2xl transition-all border border-teal-100 dark:border-teal-800 hover:scale-110 shadow-sm"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anujo7" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-full text-2xl transition-all border border-gray-200 dark:border-gray-700 hover:scale-110 shadow-sm"
          >
            <FaGithub />
          </a>
          <a
            href="tel:7987000185" // Replace with your phone number
            aria-label="Phone"
            className="text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 p-3 rounded-full text-2xl transition-all border border-amber-100 dark:border-amber-800 hover:scale-110 shadow-sm"
          >
            <FaPhoneAlt />
          </a>
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a href="#projects" className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl'>
                View my Work
            </a>
            <a href="#contact" className='px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl'>
                Let's Chat
            </a>
        </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" onClick={handleScrollDown}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
        </section>
    );
}

export default Hero;
