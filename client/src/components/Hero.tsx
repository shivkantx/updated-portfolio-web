import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';
import { fadeInUpVariants, slideInLeftVariants, slideInRightVariants, floatingVariants } from '@/lib/animations';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full Stack Developer',
    'React Specialist',
    'Python Developer',
    'Django Expert',
    'Problem Solver'
  ];

  useEffect(() => {
    const type = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Blur Gray Background */}
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
      <div className="absolute inset-0 backdrop-blur-3xl bg-gray-300/40 dark:bg-gray-700/40" />
      
      {/* Subtle Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="floating"
        className="absolute top-20 left-10 w-96 h-96 bg-gray-400/20 dark:bg-gray-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />
      <motion.div
        variants={floatingVariants}
        animate="floating"
        style={{ animationDelay: '2s' }}
        className="absolute top-40 right-10 w-96 h-96 bg-gray-500/20 dark:bg-gray-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-block px-4 py-2 bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">👋 Hello, I'm</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-gray-900 dark:text-gray-100">
                Shiv Kant
              </span>
            </motion.h1>
            
            {/* Typing Text */}
            <motion.div
              variants={slideInLeftVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl font-light mb-8 h-12"
            >
              <span className="border-r-2 border-yellow-500 animate-pulse">
                {currentText}
              </span>
            </motion.div>
            
            {/* Description */}
            <motion.p
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              Passionate about creating beautiful, functional web applications with modern technologies. 
              Specializing in JavaScript, Python, Django, and React development.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-900 dark:text-gray-100 font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-300/60 dark:hover:bg-gray-600/60 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
          
          {/* Visual Side */}
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-5xl font-bold text-yellow-600">SK</span>
                </div>
              </div>
            </motion.div>
            
            {/* Tech Stack Preview */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 w-full max-w-sm"
            >
              {[
                { name: 'JavaScript', icon: '⚡' },
                { name: 'Python', icon: '🐍' },
                { name: 'React', icon: '⚛️' },
                { name: 'Django', icon: '🌟' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 p-3 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Social Media Links - Bottom Center */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-6 mt-16"
        >
          {[
            { icon: Github, href: 'https://github.com/shivkantx' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/shiv-kant-036a17289/' },
            { icon: Twitter, href: 'https://x.com/ShivkantPal8' },
            { icon: Mail, href: 'mailto:your.email@example.com' }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition-all duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="floating"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-yellow-500 hover:text-white transition-all duration-300"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;