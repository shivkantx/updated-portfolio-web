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
    'Node.js Expert',
    'Cloud Enthusiast',
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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-500/20 to-orange-500/20 dark:from-yellow-500/10 dark:via-amber-500/10 dark:to-orange-500/10" />
      
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="floating"
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        variants={floatingVariants}
        animate="floating"
        style={{ animationDelay: '2s' }}
        className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        variants={floatingVariants}
        animate="floating"
        style={{ animationDelay: '4s' }}
        className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">SK</span>
            </div>
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">
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
          <span className="border-r-2 border-yellow-600 animate-pulse">
            {currentText}
          </span>
        </motion.div>
        
        {/* Description */}
        <motion.p
          variants={slideInRightVariants}
          initial="hidden"
          animate="visible"
          className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Passionate about creating beautiful, functional web applications with modern technologies. 
          Specializing in JavaScript, Python, Django, and frontend development.
        </motion.p>
        
        {/* Tech Badges */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['JavaScript', 'Python', 'Django', 'HTML/CSS', 'React'].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 glass-card rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 glass-card rounded-lg hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 font-medium"
          >
            Get In Touch
          </motion.button>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/shivkantx' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/shiv-kant-036a17289/' },
            { icon: Twitter, href: 'https://x.com/ShivkantPal8' },
            { icon: Mail, href: 'mailto:your.email@example.com' }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('#about')}
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
