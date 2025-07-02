import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { fadeInUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/animations';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      location: "City, State",
      duration: "2020 - 2024",
      gpa: "8.5/10",
      highlights: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering"
      ]
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "School Name",
      location: "City, State",
      duration: "2018 - 2020", 
      gpa: "85%",
      highlights: [
        "Mathematics",
        "Physics",
        "Computer Science",
        "English"
      ]
    }
  ];

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
      icon: "⚡"
    },
    {
      title: "Python for Everybody",
      issuer: "Coursera",
      year: "2022",
      icon: "🐍"
    },
    {
      title: "React Developer",
      issuer: "Online Course",
      year: "2023",
      icon: "⚛️"
    },
    {
      title: "Django Web Framework",
      issuer: "Self-Study",
      year: "2023",
      icon: "🌟"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Blur Gray Background */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900" />
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-200/30 dark:bg-gray-800/30" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Academic Background</h3>
            </div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-2xl p-6 border border-gray-300/30 dark:border-gray-600/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-sm font-semibold rounded-full">
                      {edu.gpa}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {edu.highlights.map((subject, idx) => (
                    <div
                      key={idx}
                      className="text-sm px-3 py-2 bg-gray-200/40 dark:bg-gray-700/40 backdrop-blur-sm rounded-lg text-center border border-gray-300/20 dark:border-gray-600/20"
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-xl p-6 border border-gray-300/30 dark:border-gray-600/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <div className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 text-xs font-medium rounded-full">
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Philosophy */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-2xl p-6 border border-gray-300/30 dark:border-gray-600/30 mt-8"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Learning Philosophy
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines formal education with hands-on projects and self-directed learning 
                to build practical skills that solve real-world problems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;