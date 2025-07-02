import { motion } from 'framer-motion';
import { Code, Award, Users, Coffee } from 'lucide-react';
import { fadeInUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/animations';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '20+' },
    { icon: Users, label: 'GitHub Repos', value: '50+' },
    { icon: Coffee, label: 'Availability', value: '24/7' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Get to know more about my journey and passion for technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Developer working on laptop" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <motion.h3
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400"
              >
                Full Stack Developer
              </motion.h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating intuitive, dynamic user experiences and robust backend systems. 
                My journey in web development started with curiosity and has evolved into a deep 
                passion for building solutions that make a difference.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Code, text: '3+ Years of Experience' },
                  { icon: Award, text: '20+ Projects Completed' },
                  { icon: Users, text: 'Computer Science Graduate' }
                ].map(({ icon: Icon, text }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(2).map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
