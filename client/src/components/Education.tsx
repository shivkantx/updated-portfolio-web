import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { fadeInUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/animations';

const Education = () => {
  const timelineItems = [
    {
      icon: GraduationCap,
      title: 'Bachelor of Computer Science',
      organization: 'University Name',
      period: '2020 - 2024',
      description: 'Studied computer science fundamentals, data structures, algorithms, and software engineering principles.',
      tags: ['Computer Science', 'Software Engineering'],
      side: 'left',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Full Stack Developer',
      organization: 'Freelance',
      period: '2023 - Present',
      description: 'Developing modern web applications using React, Node.js, and cloud technologies. Working with clients to deliver scalable solutions.',
      tags: ['React', 'Node.js', 'MongoDB'],
      side: 'right',
      color: 'from-purple-600 to-pink-500'
    },
    {
      icon: Award,
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      period: '2023',
      description: 'Certified in AWS cloud fundamentals, including compute, storage, networking, and database services.',
      tags: ['AWS', 'Cloud Computing'],
      side: 'left',
      color: 'from-pink-500 to-blue-600'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education & Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            My academic journey and professional development
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full border-4 border-white dark:border-slate-900 z-10`}
                />
                
                {/* Content */}
                <div className="w-full grid md:grid-cols-2 gap-8 items-center">
                  {item.side === 'left' ? (
                    <>
                      {/* Left Content */}
                      <motion.div
                        variants={slideInLeftVariants}
                        className="md:text-right"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="glass-card rounded-2xl p-6"
                        >
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.organization}</p>
                          <p className="text-slate-600 dark:text-slate-400 mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                      
                      {/* Right Icon */}
                      <div className="md:pl-8">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.period}</div>
                        <div className="text-2xl">
                          <item.icon className="text-blue-600 dark:text-blue-400" size={32} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Icon */}
                      <div className="md:pr-8 order-2 md:order-1">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.period}</div>
                        <div className="text-2xl">
                          <item.icon className="text-purple-600 dark:text-purple-400" size={32} />
                        </div>
                      </div>
                      
                      {/* Right Content */}
                      <motion.div
                        variants={slideInRightVariants}
                        className="order-1 md:order-2"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="glass-card rounded-2xl p-6"
                        >
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.organization}</p>
                          <p className="text-slate-600 dark:text-slate-400 mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
