// src/components/ProjectCard.js
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title & Date */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.year}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={16} className="mr-1" />
                Code
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                Demo
              </a>
            )}
          </div>

          {/* Status Badge */}
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              project.status === 'completed' 
                ? 'bg-green-500' 
                : project.status === 'in-progress'
                ? 'bg-yellow-500'
                : 'bg-blue-500'
            }`}></div>
            <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {project.status.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;