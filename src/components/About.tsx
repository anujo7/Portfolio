import React from 'react';
import ProfilePic from '../assets/Profile_pic.jpeg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
            {/* Replace with your image */}
            <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Who I Am</h3>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer & Full-stack Developer with a strong focus on creating beautiful, functional, and user-friendly websites and applications. With a background in Software Development and Web Development, I bring a unique perspective to every project I work on.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">What I Do</h3>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using the latest technologies. My expertise includes front-end development, responsive design, and creating intuitive user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#contact" 
                className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1_TBDdA7W-8I-1puPlilecP7-1x9rJ_8A/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;