import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiExternalLink, FiShoppingCart, FiMessageSquare } from 'react-icons/fi';
import { SiNextdotjs, SiReact } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb'; // Tabler Icons for AI

 
const projectData = [
  {
    id: 1,
    title: 'Intelligent AI Platform',
    description: 'A cutting-edge website leveraging AI algorithms for [mention a key feature, e.g., data analysis, content generation]. Built with a focus on user experience and intelligent automation.',
    techStack: ['Gemini Api', 'React', 'Node.js'],
    icon: <TbBrain className="h-10 w-10 text-purple-400" />,
    imageUrl: '/assets/secom.jpg',  
    liveLink: '#',  
    repoLink: '#',  
    bgColorFrom: 'from-purple-900',
    bgColorTo: 'to-indigo-900',
    borderColor: 'border-purple-700/50',
    hoverShadow: 'hover:shadow-purple-500/40',
  },
  {
    id: 2,
    title: 'Next.js E-commerce Store',
    description: 'A modern, high-performance e-commerce solution built with Next.js for server-side rendering and static site generation, ensuring fast load times and excellent SEO.',
    techStack: ['Next.js', 'React', 'Tailwind CSS' , 'MongoDB '],
    icon: (
      <div className="flex items-center">
        <SiNextdotjs className="h-8 w-8 text-slate-300 mr-2" />
        <FiShoppingCart className="h-8 w-8 text-green-400" />
      </div>
    ),
    imageUrl: '/images/ecommerce-placeholder.png',  
    liveLink: '#',
    repoLink: '#',
    bgColorFrom: 'from-green-900',
    bgColorTo: 'to-teal-900',
    borderColor: 'border-green-700/50',
    hoverShadow: 'hover:shadow-green-500/40',
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'A dynamic chat application enabling instant messaging, built with React and utilizing WebSockets for real-time communication features.',
    techStack: ['React', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    icon: (
      <div className="flex items-center">
        <SiReact className="h-8 w-8 text-sky-400 mr-2" />
        <FiMessageSquare className="h-8 w-8 text-blue-400" />
      </div>
    ),
    imageUrl: '/images/chat-app-placeholder.png', 
    liveLink: '#',
    repoLink: '#',
    bgColorFrom: 'from-sky-900',
    bgColorTo: 'to-blue-900',
    borderColor: 'border-sky-700/50',
    hoverShadow: 'hover:shadow-sky-500/40',
  },
 
  
];


const ProjectsPage = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center">
       

      <div className="w-full max-w-5xl mx-auto">
        <div
          className={`
            text-center mb-16
            transform transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
        >
          <h1 id='projects' className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={` scroll-Animation
                flex flex-col bg-slate-800/50 backdrop-blur-md rounded-xl shadow-xl overflow-hidden
                border ${project.borderColor}
                transform transition-all duration-500 ease-out ${project.hoverShadow} hover:border-transparent
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:-translate-y-1
              `}
              style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.style.display = 'none'; /* Hide if image fails to load */ }}
                />
              ) : (
                <div className={`w-full h-48 bg-gradient-to-br ${project.bgColorFrom} ${project.bgColorTo} flex items-center justify-center`}>
                  <div className="text-5xl opacity-70">{project.icon}</div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                  {!project.imageUrl && <div className="mr-3 text-3xl">{project.icon}</div>}
                  <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase mb-1.5">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-700/80 text-slate-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex space-x-3 pt-3 border-t border-slate-700/50">
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <FiExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {project.repoLink && project.repoLink !== '#' && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      <FiExternalLink className="mr-1.5 h-4 w-4" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;