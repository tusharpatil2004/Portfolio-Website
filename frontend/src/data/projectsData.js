// src/data/projectsData.js
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing. Features include user authentication, product management, shopping cart, and order tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    category: "Web App",
    year: "2024",
    status: "completed",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team workspaces, and project tracking. Built with React and Firebase for seamless real-time collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["React", "Firebase", "Material-UI", "React Router", "Context API"],
    category: "Web App",
    year: "2023",
    status: "completed",
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app",
    features: [
      "Real-time task updates",
      "Team collaboration features",
      "Project and workspace organization",
      "Drag-and-drop task management",
      "Due date reminders and notifications",
      "Progress tracking and reporting"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A comprehensive weather application with location-based forecasts, interactive charts, and weather alerts. Features beautiful visualizations and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3", "HTML5"],
    category: "Web App",
    year: "2023",
    status: "completed",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather charts",
      "Location-based weather detection",
      "Weather alerts and notifications",
      "Historical weather data visualization"
    ]
  },
  {
    id: 4,
    title: "React Native Fitness App",
    description: "A mobile fitness tracking application built with React Native. Features workout planning, progress tracking, and social features for fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    technologies: ["React Native", "Expo", "Redux", "Firebase", "React Navigation"],
    category: "Mobile",
    year: "2024",
    status: "in-progress",
    githubUrl: "https://github.com/johndoe/fitness-app",
    liveUrl: null,
    features: [
      "Workout planning and tracking",
      "Exercise library with demonstrations",
      "Progress photos and measurements",
      "Social features and challenges",
      "Nutrition tracking integration",
      "Wearable device synchronization"
    ]
  },
  {
    id: 5,
    title: "RESTful API Service",
    description: "A robust RESTful API service built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation. Designed for scalability and performance.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Docker"],
    category: "API",
    year: "2024",
    status: "completed",
    githubUrl: "https://github.com/johndoe/api-service",
    liveUrl: "https://api-service-demo.herokuapp.com/docs",
    features: [
      "JWT-based authentication",
      "Rate limiting and security middleware",
      "Comprehensive API documentation",
      "Database optimization and indexing",
      "Error handling and logging",
      "Docker containerization"
    ]
  },
  {
    id: 6,
    title: "Design System Library",
    description: "A comprehensive design system and component library built with React and Storybook. Provides consistent UI components for rapid application development.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    technologies: ["React", "Storybook", "Styled Components", "TypeScript", "Rollup"],
    category: "UI/UX",
    year: "2023",
    status: "completed",
    githubUrl: "https://github.com/johndoe/design-system",
    liveUrl: "https://design-system-storybook.netlify.app",
    features: [
      "Reusable React components",
      "Comprehensive documentation",
      "Design tokens and theming",
      "Accessibility compliance",
      "Interactive component playground",
      "npm package distribution"
    ]
  }
];

// Helper functions for filtering and sorting
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured === true);
};

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};