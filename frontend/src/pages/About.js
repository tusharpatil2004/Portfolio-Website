// frontend/src/pages/About.js
import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Database, Palette, Globe } from 'lucide-react';
import TusharPatilImg from '../assets/images/TusharPatil.png'; // Adjust path as needed

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Code, items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { name: 'Design', icon: Palette, items: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Wireframing'] },
    { name: 'Tools', icon: Globe, items: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Postman'] }
  ];

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Divij',
      duration: '2024 - Present',
      description: ['6 Month Internship in Divij, ',
        'Lead development of responsive web applications using HTML, CSS, React.js and modern JavaScript. Collaborated with cross-functional teams to deliver high-quality user experiences.'],
      achievements: [
        'Improved application performance by 40% through optimization',
        'Mentored 3 junior developers',
        'Led migration from legacy codebase to React'
      ]
    }
    // {
    //   role: 'Full Stack Developer',
    //   company: 'Digital Solutions Ltd.',
    //   duration: '2021 - 2022',
    //   description: 'Built and maintained full-stack applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved development workflow.',
    //   achievements: [
    //     'Developed 5+ client projects from concept to deployment',
    //     'Reduced deployment time by 60% with automated pipelines',
    //     'Implemented comprehensive testing strategies'
    //   ]
    // },
    // {
    //   role: 'Junior Developer',
    //   company: 'StartUp Ventures',
    //   duration: '2020 - 2021',
    //   description: 'Assisted in developing web applications and learned modern development practices. Focused on frontend development and user experience improvements.',
    //   achievements: [
    //     'Contributed to 3 major product releases',
    //     'Improved code quality through peer reviews',
    //     'Learned agile development methodologies'
    //   ]
    // }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with 1+ years of experience creating innovative web solutions. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={TusharPatilImg}
              alt="Tushar Patil"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm Tushar Patil, a passionate full-stack developer based in New York. 
                My journey in web development started 3 years ago when I built my first website 
                and discovered the perfect blend of creativity and logic that coding offers.
              </p>
              <p>
                I specialize in creating exceptional digital experiences that are fast, accessible, 
                and visually appealing. My main focus these days is building products and leading 
                projects for our clients at Tech Innovations Inc.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing my knowledge through tech blogs and community events.
              </p>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="mt-8">
              <a
              href="http://localhost:5000/api/resume"
              download="Tushar_Patil_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    {job.duration}
                  </div>
                </div>
              
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
              

                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;