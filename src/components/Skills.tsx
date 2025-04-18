import React, { useEffect, useRef } from 'react';
import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiNestjs, SiMongodb, SiGit, SiFigma, SiExpress, SiHtml5, SiAwslambda, SiGooglepubsub } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'cloud';
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  // Sample skills data - replace with your own
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'Node.js', level: 90, category: 'backend' },
    { name: 'Express.js', level: 90, category: 'backend' },
    { name: 'NestJS', level: 90, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'SQL', level: 90, category: 'backend' },
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
    { name: 'AWS', level: 80, category: 'cloud' },
    { name: 'Microsoft Azure', level: 75, category: 'cloud' },
    { name: 'Google Pub-sub', level: 75, category: 'cloud' },
    { name: 'Responsive Design', level: 85, category: 'cloud' },
    { name: 'UI/UX', level: 75, category: 'cloud' },
    
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'cloud', name: 'Cloud Technologies' },
  ];

  const skillIcons: Record<string, React.ReactNode> = {
    'JavaScript': <SiJavascript className="inline mr-2 text-yellow-400" />,
    'React': <SiReact className="inline mr-2 text-blue-400" />,
    'TypeScript': <SiTypescript className="inline mr-2 text-blue-600" />,
    'Tailwind CSS': <SiTailwindcss className="inline mr-2 text-teal-400" />,
    'HTML': <SiHtml5 className="inline mr-2 text-teal-400" />,
    'Node.js': <SiNodedotjs className="inline mr-2 text-green-600" />,
    'Express.js': <SiExpress className="inline mr-2 text-green-600" />,
    'NestJS': <SiNestjs className="inline mr-2 text-red-500" />,
    'MongoDB': <SiMongodb className="inline mr-2 text-green-700" />,
    'SQL': <FaDatabase className="inline mr-2 text-blue-900" />,
    'Git': <SiGit className="inline mr-2 text-orange-500" />,
    'Figma': <SiFigma className="inline mr-2 text-pink-500" />,
    'AWS': <SiAwslambda className="inline mr-2 text-pink-500" />,
    'Microsoft Azure': <VscAzure className="inline mr-2 text-pink-500" />,
    'Google Pub-Sub': <SiGooglepubsub className="inline mr-2 text-pink-500" />,
    'Responsive Design': null,
    'UI/UX': null,
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">My Skills</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">A snapshot of my technical expertise and tools I use most.</p>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 text-teal-600 dark:text-teal-400">{category.name}</h3>
              <ul className="flex flex-wrap gap-4">
                {skills.filter((skill) => skill.category === category.id).map((skill, idx) => (
                  <li key={idx} className="flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/30 px-4 py-2 rounded-lg text-lg font-medium text-gray-800 dark:text-gray-100 shadow-sm hover:bg-teal-100 dark:hover:bg-teal-800 transition-all">
                    {skillIcons[skill.name]}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;