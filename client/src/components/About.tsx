import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Award, Users, Coffee } from 'lucide-react';
import { fadeInUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/animations';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
      delay: 100
    });
  }, []);

  const stats = [
    { icon: Code, label: 'Technologies', value: '5+', description: 'Languages & Frameworks' },
    { icon: Award, label: 'Projects', value: '3+', description: 'Completed Works' },
    { icon: Users, label: 'GitHub Repos', value: '3+', description: 'Open Source' },
    { icon: Coffee, label: 'Learning', value: '24/7', description: 'Always Growing' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Blur Gray Background */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900" />
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-200/30 dark:bg-gray-800/30" />
      
      <div className="max-w-6xl mx-auto relative">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            About Me
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
          <p 
            className="text-xl text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Get to know more about my journey and passion for technology
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-3xl p-8 text-center h-full border border-gray-300/30 dark:border-gray-600/30">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">SK</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Coffee size={16} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Shiv Kant</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Full Stack Developer</p>
              
              {/* Key Skills */}
              <div className="space-y-3">
                {['JavaScript', 'Python', 'Django', 'React'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-gray-200/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-lg border border-gray-300/20 dark:border-gray-600/20"
                  >
                    <span className="font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 3 ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 'bg-slate-300 dark:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Main Description */}
            <div className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-3xl p-8 border border-gray-300/30 dark:border-gray-600/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About Me</h3>
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I'm a passionate developer with expertise in <span className="text-yellow-600 dark:text-yellow-400 font-semibold">JavaScript</span>, 
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold"> Python</span>, and 
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold"> Django</span>. 
                I love creating beautiful, functional web applications and learning new technologies.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a deep 
                passion for building solutions that solve real-world problems. I believe in continuous 
                learning and staying updated with the latest technologies.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-3xl p-8 border border-gray-300/30 dark:border-gray-600/30">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-yellow-600" size={24} />
                Key Highlights
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Code, text: 'Self-Taught Developer', desc: 'Passionate about learning' },
                  { icon: Award, text: 'Multiple Projects', desc: 'Real-world applications' },
                  { icon: Users, text: 'Open Source', desc: 'Contributing to community' },
                  { icon: Coffee, text: 'Always Learning', desc: '24/7 growth mindset' }
                ].map(({ icon: Icon, text, desc }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-start space-x-3 p-4 bg-gray-200/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-xl border border-gray-300/20 dark:border-gray-600/20"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900 dark:text-slate-100">{text}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map(({ icon: Icon, label, value, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-2xl p-6 text-center group border border-gray-300/30 dark:border-gray-600/30"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{value}</div>
              <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{label}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
