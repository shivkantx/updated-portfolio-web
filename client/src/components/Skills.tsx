import { motion } from 'framer-motion';
import { Palette, Server, Wrench } from 'lucide-react';
import { fadeInUpVariants, staggerChildrenVariants } from '@/lib/animations';

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: 'Frontend',
      description: 'Creating beautiful user interfaces',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'TypeScript', level: 75 }
      ],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Building robust server solutions',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 }
      ],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      description: 'Development tools and platforms',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 }
      ],
      gradient: 'from-pink-500 to-blue-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map(({ icon: Icon, title, description, skills, gradient }, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{description}</p>
              </div>
              
              <div className="space-y-4">
                {skills.map(({ name, level }, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{name}</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${gradient} h-2 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
