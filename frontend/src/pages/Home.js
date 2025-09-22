// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import TusharPatilImg from '../assets/images/TusharPatil.png'; // Adjust path as needed

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
<img
src={TusharPatilImg}
alt="Profile"
className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
/>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tushar Patil
              </span>
            </h1>
            
            {/* Professional Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Frontend Developer & UI/UX Enthusiast
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              I create beautiful, responsive websites with modern technologies. 
              Passionate about clean code and exceptional user experiences that make a difference.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center group"
              >
                View My Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Get In Touch
              </Link>
              
              <a
                href="http://localhost:5000/api/resume"
                download="Tushar_Patil_Resume.pdf"
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">1+</h3>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">3+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">2+</h3>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


// In backend folder
//cd backend
// npm run dev

// Open new terminal, navigate to frontend
// cd frontend
// npm start