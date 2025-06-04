import React, { useState, useEffect } from 'react';
 // icons
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa'; 

const skillsData = [
  {
    name: 'React JS',
    icon: <SiReact className="text-sky-400" />,
    description: 'Building dynamic and interactive UIs with component-based architecture.',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-slate-200" />,  
    description: 'Developing server-side rendered and static React applications with enhanced DX.',
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="text-green-400" />,
    description: 'Developing scalable server-side applications and APIs using JavaScript runtime.',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-slate-300" />,  
    description: 'Creating robust web applications and APIs with this minimalist Node.js framework.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-500" />,
    description: 'Working with NoSQL, document-oriented databases for flexible data storage.',
  },
  {
    name: 'SQL',
    icon: <FaDatabase className="text-blue-400" />, // Generic SQL icon
    description: 'Proficient in relational database management (e.g., PostgreSQL, MySQL) and querying.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-teal-400" />,
    description: 'Rapidly building custom user interfaces with a utility-first CSS framework.',
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 className="text-orange-500" />,
    description: 'Structuring web content semantically for accessibility and optimal SEO.',
  },
  {
    name: 'CSS3',
    icon: <SiCss3 className="text-blue-500" />,
    description: 'Styling web applications with modern CSS techniques and responsive design principles.',
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-violet-900 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">  
        <h1 id='about'
          className={`text-4xl md:text-5xl font-extrabold text-center text-white mb-16
                     transform transition-all duration-1000 ease-out md:pt-10
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          My Tech Stack & Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  
          {skillsData.map((skill, index) => (
            <div
              
              key={index}
              className={` scroll-Animation
                bg-slate-800/60   
                backdrop-blur-sm   
                p-6 rounded-xl shadow-xl 
                border border-slate-700/50  
                transform transition-all ease-out
                hover:scale-105 hover:shadow-purple-500/50 hover:border-purple-600/70
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl md:text-7xl mb-5 text-slate-100"> {/* Ensure icon wrapper color is light if icon doesn't have own */}
                  {React.cloneElement(skill.icon, { className: `${skill.icon.props.className} transition-transform duration-300 group-hover:scale-110`})}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-2">
                  {skill.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 text-center transform transition-opacity duration-1000 ease-out
                      ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: `${isVisible ? (skillsData.length * 100) + 300 : 0}ms` }}
        >
          <p className="text-lg text-gray-300">
            I'm constantly learning and exploring new technologies to enhance my skill set!
          </p>
 
        </div>
      </div>
    </div>
  );
};

export default Skills;