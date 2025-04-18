import React, { useState } from 'react';
import emailSumImg from '../assets/email_sum.png'
import SmartBrain from '../assets/smartbrain.png'
import Web3 from '../assets/Web3.png'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  Note: string[];
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Web3 Voting Application',
      description:
        'Developed a secure online voting application on Ethereum, leveraging smart contracts to ensure 99% tamper-proof elections. Implemented a decentralized system to prevent fraud and provide transparent, verifiable results. Used Solidity for smart contracts, React for frontend, IPFS for decentralized storage, and Metamask as crypto wallet',
      image: Web3,
      tags: ['ReactJS', 'IPFS', 'Hardhat Wallet', 'Ethereum', 'Solidity'],
      demoUrl: '#',
      codeUrl: 'https://github.com/anujo7/VotingDapp',
      Note:['Note: This project is not deployed right now due to high hosting charges']
    },
    {
      id: 2,
      title: 'Email summarizer with RAG',
      description:
        'Developed an AI-powered Email Summarizer using Retrieval-Augmented Generation (RAG) with Ollama for local LLM integration. The frontend was built in React and the backend in NestJS. The system retrieves email content, fetches relevant context from a vector store, and generates concise summaries to help users quickly grasp key information from their inbox.',
      image: emailSumImg,
      tags: ['Ollama', 'NestJS', 'ReactJS', 'RAG'],
      demoUrl: '#',
      codeUrl: 'https://github.com/anujo7/email-summarizer-ai/tree/master/email-sum-backend/email-summarizer-backend',
      Note:[]
    },
    {
      id: 3,
      title: 'SmartBrain',
      description:
        'Developed SmartBrain, a face detection web app using OpenCV to identify and count faces in user-uploaded images. Implemented a scoring system that increases based on the number of images processed per user. Built with React for the frontend, Node.js for the backend, and MongoDB for storing user data and activity logs',
      image: SmartBrain,
      tags: ['React.js', 'Node.js', 'MongoDB', 'OpenCV'],
      demoUrl: '#',
      codeUrl: 'https://github.com/anujo7/SmartBrain',
      Note:[]
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-lg border border-teal-100 dark:border-teal-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.Note && project.Note.length > 0 && (
                <div className="space-y-2 mb-4">
                    {project.Note.map((note, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-lg border border-amber-100 dark:border-amber-800"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                        <p className="text-sm">{note}</p>
                    </div>
                    ))}
                </div>
                )}


                <div className="flex justify-between text-sm font-medium">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    View Code
                  </a>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{activeProject.title}</h3>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 p-2 rounded-full transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-auto rounded-lg mb-6 shadow-lg"
                />

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{activeProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-lg border border-teal-100 dark:border-teal-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={activeProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
