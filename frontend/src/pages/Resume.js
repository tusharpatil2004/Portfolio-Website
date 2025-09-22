// frontend/src/pages/Resume.js
import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, Globe, Calendar, Award, GraduationCap, Briefcase, Upload, X } from 'lucide-react';

const Resume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadError, setUploadError] = useState('');

  const education = [
    {
      degree: 'Post Graduation Diploma in Computer Application',
      school: 'CSMU, New Mumbai',
      duration: '09/2024 – 06/2025',
      score: 'In Progress',
      achievements: [
        'Currently pursuing advanced computer applications studies'
      ]
    },
    {
      degree: 'Bachelor of Commerce',
      school: 'K.M.C. College, Khopoli',
      duration: '06/2021 – 03/2024',
      score: 'Completed',
      achievements: [
        'Commerce degree with focus on business fundamentals'
      ]
    },
    {
      degree: 'Higher Education',
      school: 'Janata Vidyalaya Khopoli',
      duration: '06/2019 – 03/2021',
      score: 'Completed',
      achievements: [
        'Completed secondary education with focus on commerce'
      ]
    }
  ];

  const experience = [
    {
      role: 'Developer Intern',
      company: 'Divij',
      duration: '6 months',
      location: 'Remote',
      responsibilities: [
        'Worked on application development using web technologies',
        'Gained practical experience in front-end development',
        'Collaborated with team members on projects'
      ]
    }
  ];

  const skills = {
    'Basic Languages': ['HTML', 'CSS', 'JavaScript'],
    'Frontend Technologies': ['React.js', 'Next.js'],
    'AI Tools': ['Blackbox.AI', 'Cloude.AI', 'Durable.AI', 'Leonardo.AI', 'Deepseek.AI']
  };

  const projects = [
    {
      name: 'Portfolio-Website',
      duration: '06/2024 – Present',
      description: 'A personal portfolio website built with React.js and Tailwind CSS, featuring a modern UI with dark mode, responsive design, and contact form with email functionality.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Nodemailer'],
      features: [
        'Modern UI with dark/light mode toggle',
        'Responsive design for all devices',
        'Contact form with email functionality using Nodemailer',
        'Project showcase with detailed descriptions'
      ]
    },
    {
      name: 'Golden Fabrics (E-Commerce Website)',
      duration: '02/2025 – 05/2025',
      description: 'Full-stack fabric e-commerce website built using HTML5, CSS3, JavaScript, NodeJs, and ExpressJs.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'NodeJs', 'ExpressJs'],
      features: [
        'Seamless shopping experience for customers and businesses',
        'Designed to showcase finest materials'
      ]
    },
    {
      name: 'Divij (E-Commerce Website)',
      duration: '09/2024 – 12/2024',
      description: 'Website to show history of Divij and information about Divij franchise with contact page for clients.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Company history and information',
        'Contact form for client inquiries'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Complete Front-End Web Development',
      issuer: 'Online Certification',
      date: '2024',
      credential: 'Front-End Development Certificate'
    }
  ];

  // File selection handler
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type (PDF only)
      if (file.type !== 'application/pdf') {
        setUploadError('Please select a PDF file only');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('File size must be less than 5MB');
        return;
      }
      
      setSelectedFile(file);
      setUploadError('');
      setUploadStatus('');
    }
  };

  // File upload handler
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError('Please select a file first');
      return;
    }
    
    setIsUploading(true);
    setUploadStatus('Uploading...');
    setUploadError('');
    
    try {
      const formData = new FormData();
      formData.append('resume', selectedFile);
      
      // Use the correct API endpoint
      const response = await fetch('http://localhost:5000/api/upload-resume', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        setUploadStatus(result.message || 'Upload successful!');
        setTimeout(() => {
          setUploadStatus('');
          setSelectedFile(null);
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error.message || 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Remove selected file
  const removeFile = () => {
    setSelectedFile(null);
    setUploadError('');
    setUploadStatus('');
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-white">
            TUSHAR NARESH PATIL
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-8">
            Front-end Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="http://localhost:5000/api/resume"
              download="Tushar_Patil_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </a>
            <a
              href="mailto:metusharpatil8@gmail.com"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </a>
          </div>

          {/* Resume Upload Section */}
          {/* <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Update Your Resume</h2>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
              {!selectedFile ? (
                <>
                  <Upload className="mx-auto text-gray-400 mb-3" size={32} />
                  <p className="text-gray-500 dark:text-gray-400 mb-3 text-sm">
                    Upload a new PDF resume to replace the current one
                  </p>
                  <label htmlFor="resume-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-block text-sm">
                    Select PDF File
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,application/pdf"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded mr-3">
                        <Download className="text-blue-600 dark:text-blue-300" size={16} />
                      </div>
                      <div className="text-left">
                        <p className="font-medium truncate max-w-xs text-sm">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={removeFile} 
                      className="text-gray-500 hover:text-red-500 p-1"
                      disabled={isUploading}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isUploading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                      </span>
                    ) : (
                      'Upload Resume'
                    )}
                  </button>
                </>
              )}
              
              {uploadStatus && (
                <p className="text-green-600 dark:text-green-400 mt-3 text-sm">{uploadStatus}</p>
              )}
              
              {uploadError && (
                <p className="text-red-600 dark:text-red-400 mt-3 text-sm">{uploadError}</p>
              )}
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                Maximum file size: 5MB. PDF format only.
              </p>
            </div>
          </div> */}
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-3" size={20} />
              <span>metusharpatil8@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-3" size={20} />
              <span>+91 7499919894</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-3" size={20} />
              <span>At. Post- Jambrung, Khalapur, Maharashtra, 410201</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Career Objective</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To obtain a challenging role as a Front-end developer where I can apply my skills in building scalable web applications, 
            contribute to impactful projects, and grow professionally in a collaborative team environment.
          </p>
        </div>

        {/* Work Experience */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <Briefcase className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    {job.duration}
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <p className="text-blue-600 font-semibold mr-3">{job.company}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    {job.location}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-green-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    {edu.duration}
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <p className="text-green-600 font-semibold mr-3">{edu.school}</p>
                  <span className="text-gray-500 dark:text-gray-400">{edu.score}</span>
                </div>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    {project.duration}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <Award className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-600 p-4 rounded-lg">
                <h3 className="font-bold mb-2">{cert.name}</h3>
                <p className="text-blue-600 mb-1">{cert.issuer}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>Completed: {cert.date}</span>
                  <span>{cert.credential}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:metusharpatil8@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </a>
              <a
                href="tel:+917499919894"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;