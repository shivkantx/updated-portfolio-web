import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { fadeInUpVariants, staggerChildrenVariants, scaleOnHoverVariants } from '@/lib/animations';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: '🛒 A full-featured eCommerce web app built with 🐍 Django & 🅱️ Bootstrap — includes 🧺 cart, 🔐 auth, 💳 checkout, and ⚙️ admin panel. Fully responsive and ideal for learning or real-world use.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['Django', 'Python', 'CSS', 'JavaScript', 'HTML', 'Bootstrap'],
      github: 'https://github.com/shivkantx/ecommercee',
      live: '#',
      year: '2025'
    },
    {
      title: 'JavaScript Learning',
      description: '📘 JavaScript basics to advanced – snippets, mini projects, DOM, ES6+, and problem-solving practice.',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['JavaScript', 'HTML', 'CSS', 'DOM', 'ES6+'],
      github: 'https://github.com/shivkantx/Java-Script',
      live: '#',
      year: '2025'
    },
    {
      title: 'Portfolio Website',
      description: '🚀 A personal developer portfolio built with ⚛️ React & 🌬️ Tailwind CSS | Showcasing 🛠️ projects & 🧠 skills',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML'],
      github: 'https://github.com/shivkantx/myportfolio',
      live: '#',
      year: '2025'
    }
  ];

  const techColors: { [key: string]: string } = {
    'React': 'bg-yellow-500/10 text-yellow-600',
    'JavaScript': 'bg-amber-500/10 text-amber-600',
    'Python': 'bg-orange-500/10 text-orange-600',
    'Django': 'bg-yellow-500/10 text-yellow-600',
    'HTML': 'bg-amber-500/10 text-amber-600',
    'CSS': 'bg-orange-500/10 text-orange-600',
    'Bootstrap': 'bg-yellow-500/10 text-yellow-600',
    'DOM': 'bg-amber-500/10 text-amber-600',
    'ES6+': 'bg-orange-500/10 text-orange-600',
    'Tailwind CSS': 'bg-yellow-500/10 text-yellow-600'
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A showcase of my recent work and favorite projects
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerChildrenVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              whileHover="hover"
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  variants={scaleOnHoverVariants}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || 'bg-gray-500/10 text-gray-500'}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Projects Button */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/shivkantx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 glass-card rounded-lg hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 font-medium"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
