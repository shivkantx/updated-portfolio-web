import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
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

  const educationData = [
    {
      id: 1,
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      location: "City, State",
      duration: "2020 - 2024",
      gpa: "8.5/10",
      status: "Completed",
      description: "Focused on software development, algorithms, and web technologies",
      highlights: [
        "Data Structures & Algorithms",
        "Web Development", 
        "Database Management",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems"
      ],
      achievements: [
        "Dean's List for 3 semesters",
        "Best Project Award",
        "Programming Competition Winner"
      ]
    },
    {
      id: 2,
      degree: "Senior Secondary (12th)",
      institution: "School Name", 
      location: "City, State",
      duration: "2018 - 2020",
      gpa: "85%",
      status: "Completed",
      description: "Science stream with focus on Mathematics and Computer Science",
      highlights: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science",
        "English",
        "Physical Education"
      ],
      achievements: [
        "School Topper in Computer Science",
        "Mathematics Olympiad Participant",
        "Science Exhibition Winner"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
      icon: "⚡",
      type: "Online",
      credentialId: "FCC-JS-2023",
      skills: ["JavaScript", "Algorithms", "Data Structures"]
    },
    {
      id: 2,
      title: "Python for Everybody Specialization",
      issuer: "University of Michigan (Coursera)",
      year: "2022", 
      icon: "🐍",
      type: "Online",
      credentialId: "COURSERA-PY-2022",
      skills: ["Python", "Data Analysis", "Web Scraping"]
    },
    {
      id: 3,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2023",
      icon: "⚛️",
      type: "Online",
      credentialId: "UDEMY-REACT-2023",
      skills: ["React", "Redux", "Hooks", "Context API"]
    },
    {
      id: 4,
      title: "Django Web Framework",
      issuer: "Self-Study & Projects",
      year: "2023",
      icon: "🌟",
      type: "Self-Paced",
      credentialId: "SELF-DJANGO-2023",
      skills: ["Django", "REST API", "Database Design"]
    }
  ];

  const learningGoals = [
    {
      icon: "🎯",
      title: "Next.js & TypeScript",
      progress: 75,
      timeline: "Q1 2024"
    },
    {
      icon: "☁️", 
      title: "AWS Cloud Services",
      progress: 45,
      timeline: "Q2 2024"
    },
    {
      icon: "📱",
      title: "React Native",
      progress: 30,
      timeline: "Q3 2024"
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      progress: 20,
      timeline: "Q4 2024"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900" />
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-200/30 dark:bg-gray-800/30" />
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div 
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100"
            data-aos="fade-up" 
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            Education & Learning
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-duration="1000" 
            data-aos-delay="300"
          />
          <p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            My academic journey and continuous learning path in technology and software development
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Education Timeline */}
          <div 
            className="lg:col-span-2 space-y-8"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div 
              className="flex items-center mb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Academic Background</h3>
                <p className="text-gray-600 dark:text-gray-400">Formal education and achievements</p>
              </div>
            </div>

            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="relative"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={700 + index * 200}
              >
                {/* Timeline Line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-yellow-500 to-amber-500 opacity-30" />
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full shadow-lg" />
                
                {/* Content Card */}
                <div className="ml-16 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-2xl p-8 border border-gray-300/30 dark:border-gray-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02]">
                  <div 
                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={800 + index * 200}
                  >
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {edu.duration}
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full font-medium">
                          {edu.status}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {edu.description}
                      </p>
                    </div>
                    <div className="lg:ml-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-lg font-bold rounded-xl shadow-lg">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                  
                  {/* Subjects */}
                  <div 
                    className="mb-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={900 + index * 200}
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <BookOpen size={18} className="mr-2 text-yellow-600" />
                      Key Subjects
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {edu.highlights.map((subject, idx) => (
                        <div
                          key={idx}
                          className="text-sm px-3 py-2 bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-lg text-center border border-gray-300/30 dark:border-gray-600/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-delay={1000 + index * 200 + idx * 100}
                        >
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={1100 + index * 200}
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <Trophy size={18} className="mr-2 text-yellow-600" />
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          data-aos="fade-left"
                          data-aos-duration="600"
                          data-aos-delay={1200 + index * 200 + idx * 100}
                        >
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div 
                className="flex items-center mb-8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Certifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Skills & Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.id}
                    className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-xl p-4 border border-gray-300/30 dark:border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay={800 + index * 150}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-xl">{cert.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-sm leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 text-xs font-medium rounded-full">
                            {cert.year}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {cert.type}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {cert.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-2 py-1 bg-gray-300/50 dark:bg-gray-600/50 rounded text-gray-700 dark:text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Goals */}
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="1000"
            >
              <h3 
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="1100"
              >
                Current Learning Goals
              </h3>
              <div className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-lg p-4 border border-gray-300/30 dark:border-gray-600/30"
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-delay={1200 + index * 100}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{goal.icon}</span>
                        <span className="font-medium text-sm text-gray-900 dark:text-gray-100">{goal.title}</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{goal.timeline}</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${goal.progress}%` }}
                        data-aos="slide-right"
                        data-aos-duration="1000"
                        data-aos-delay={1300 + index * 100}
                      />
                    </div>
                    <div className="text-right text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {goal.progress}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div
          className="bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-3xl p-8 border border-gray-300/30 dark:border-gray-600/30 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1400"
        >
          <div 
            className="text-center mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1500"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Learning Philosophy
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-4" />
          </div>
          <p 
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1600"
          >
            I believe in continuous learning and staying updated with the latest technologies. 
            My approach combines formal education with hands-on projects and self-directed learning 
            to build practical skills that solve real-world problems. Every challenge is an opportunity 
            to grow, and every project teaches something new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;