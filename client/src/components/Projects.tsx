import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { fadeInUpVariants, staggerChildrenVariants, scaleOnHoverVariants } from '@/lib/animations';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      year: '2024'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      year: '2024'
    },
    {
      title: 'Social Media Platform',
      description: 'Modern social media platform with real-time messaging, image sharing, and advanced user interaction features.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['Next.js', 'GraphQL', 'Prisma', 'AWS'],
      github: '#',
      live: '#',
      year: '2023'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'Leaflet'],
      github: '#',
      live: '#',
      year: '2023'
    },
    {
      title: 'Finance Tracker',
      description: 'Personal finance management tool with expense tracking, budget planning, and financial goal setting capabilities.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['Vue.js', 'Firebase', 'Chart.js', 'PWA'],
      github: '#',
      live: '#',
      year: '2023'
    },
    {
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with rich text editor, comment system, and SEO optimization features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tech: ['Next.js', 'MDX', 'Sanity', 'Vercel'],
      github: '#',
      live: '#',
      year: '2022'
    }
  ];

  const techColors: { [key: string]: string } = {
    'React': 'bg-blue-500/10 text-blue-500',
    'Node.js': 'bg-purple-500/10 text-purple-500',
    'MongoDB': 'bg-pink-500/10 text-pink-500',
    'Stripe': 'bg-green-500/10 text-green-500',
    'Socket.io': 'bg-purple-500/10 text-purple-500',
    'Express': 'bg-pink-500/10 text-pink-500',
    'PostgreSQL': 'bg-green-500/10 text-green-500',
    'Next.js': 'bg-blue-500/10 text-blue-500',
    'GraphQL': 'bg-purple-500/10 text-purple-500',
    'Prisma': 'bg-pink-500/10 text-pink-500',
    'AWS': 'bg-green-500/10 text-green-500',
    'Chart.js': 'bg-purple-500/10 text-purple-500',
    'OpenWeather API': 'bg-pink-500/10 text-pink-500',
    'Leaflet': 'bg-green-500/10 text-green-500',
    'Vue.js': 'bg-blue-500/10 text-blue-500',
    'Firebase': 'bg-purple-500/10 text-purple-500',
    'PWA': 'bg-green-500/10 text-green-500',
    'MDX': 'bg-purple-500/10 text-purple-500',
    'Sanity': 'bg-pink-500/10 text-pink-500',
    'Vercel': 'bg-green-500/10 text-green-500',
    'TypeScript': 'bg-blue-500/10 text-blue-500',
    'Tailwind CSS': 'bg-green-500/10 text-green-500'
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
