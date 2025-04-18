import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  duration?: string;
  description: string;
  type: 'work' | 'education';
  projects?: Project[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Development Engineer -1 @ LINQHAUL',
    company: 'SDE-1 @LINQHAUL',
    period: 'Oct (2024) - Present',
    duration: '7 Months (Present) - Full Time',
    description: 'Worked as a Software Engineer on scalable logistics and fleet management solutions.',
    type: 'work',
    projects: [
      {
        title: 'ERP Connector Module',
        description: 'Designed and implemented an ERP connector module using NestJS to enable seamless integration between SAP and our in-house application, IRIS. The module was responsible for securely fetching, transforming, and syncing transactional and master data between the two systems. This involved developing REST APIs, handling data mapping and validation, managing error handling and retries, and ensuring real-time data consistency. I also worked closely with SAP functional teams to understand BAPI structures and integration touchpoints, and optimized the connector for performance and scalability. This integration streamlined data flow across operations, improved visibility, and significantly reduced manual data entry errors.',
        technologies: ['NestJS', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Google Pub-sub']
      },
      {
        title: 'Tippler Integration Module',
        description: 'Built a Tippler Integration Module to automate the data flow from the local Tippler systems at JSW VJNR plant directly into our IRIS platform, effectively eliminating the need for SAP in this workflow. Using Node.js, I developed APIs to fetch data from local sources, transform and post it to our backend system, which then forwarded the data to IRIS for centralized processing. To ensure smooth deployment on client machines, I packaged the integration script into a standalone executable using pkg, enabling it to run independently without requiring a Node.js environment. This solution ensured real-time data availability, reduced operational dependency on SAP, and significantly improved the efficiency of the data ingestion process in the plant',
        technologies: [ 'Node.js', 'PostgreSQL', 'pkg']
      },
      {
        title: 'Vehicle Consolidation Tool',
        description: 'Developed a dynamic Vehicle Consolidation Tool using React and ExcelJS to automate and streamline the generation of vehicle utilization reports. The tool processes raw Excel data, identifies and segregates records based on varying vehicle types, and generates consolidated reports with relevant fields pre-filled. I implemented logic to adapt to different report structures, ensuring flexibility and scalability across multiple use cases. The interface featured intuitive filters and export options, significantly reducing manual effort and improving reporting accuracy and speed. This tool was instrumental in operational decision-making by providing real-time insights into fleet efficiency.',
        technologies: ['React', 'TypeScript', 'ExcelJS', 'Tailwind CSS', 'Redux']
      },
      {
        title: 'Support Requests',
        description:'Assisted operations team in providing technical support to team members in case of tehnical failures',
        technologies: ['IRIS Platform', 'NestJS', 'Firebase', 'Google Pub-sub']
      },
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Data Engineer @Applied Cloud Computing',
    period: '2024 (February) - 2024 (July)',
    duration: '6 Months - Full Time',
    description: 'Worked as a Data Engineer at Applied Cloud Computing (ACC), leading and maintaining large-scale data migration projects for US-based clients in collaboration with cross-functional teams from multiple organizations.',
    type: 'work',
    projects: [
      {
        title: 'AWS Neutrino Project',
        description: 'Led the data migration effort for the Neutrino project by moving their local on-premise database to a cloud-based data warehouse using AWS services. Designed and implemented a scalable data lake architecture to centralize and streamline data storage and processing. Developed AWS Glue jobs to automate ETL processes and trigger multiple downstream operations such as data validation, transformation, and partitioning. The solution ensured smooth data ingestion into the lake and supported future analytics and reporting needs. This project significantly improved data accessibility, performance, and reduced infrastructure overhead for the client.',
        technologies: ['AWS Glue', 'AWS S3', 'Python', 'Pyspark']
      },
      {
        title: 'Azure Mercer Project',
        description: 'Contributed to the Mercer project by maintaining and optimizing a wide range of ETL pipelines, many of which were scheduled to run periodically. Handled pipeline error resolution, data quality checks, and ensured timely and reliable data processing. Developed new ETL workflows based on business requirements using AWS Glue and Azure Synapse Analytics for scalable data warehousing and querying. Implemented load balancing strategies to efficiently distribute data loads and improve pipeline performance under high-volume scenarios. My work ensured data consistency, reduced failures, and enhanced overall data flow efficiency across hybrid cloud environments.',
        technologies: [ 'Azure Synapse', 'Python', 'Pyspark']
      },
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Grant Thornton',
    period: '2022 (February) - 2022 (April)',
    duration: '3 Months - Internship',
    description: 'Worked as a Web developer intern at Grant Thornton. ',
    type: 'work',
    projects: [
      {
        title: 'WAPCOS Project',
        description: 'Handled government project WAPCOS using technologies like C#, HTML ,CSS and Bootsrtap.',
        technologies: ['HTML', 'CSS', 'Bootstrap']
      },
    ],
  },
  {
    title: "Bachelor's of Technology in Computer Science",
    company: 'Institute of Engineering & Science, IPS Academy',
    period: '2020 - 2024',
    duration: '4 years, GPA: 8.6',
    description: 'Studied various aspects of computer science including algorithms, web development, and software engineering.',
    type: 'education',
  },
];

const Experience: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Experience</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">My professional journey in tech and education.</p>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-1">{exp.title}</h3>
                  <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">{exp.company}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-amber-600 dark:text-amber-400 font-semibold">{exp.period}</span>
                  {exp.duration && <span className="block text-xs text-gray-400 dark:text-gray-500">{exp.duration}</span>}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              {exp.projects && exp.projects.length > 0 && (
                <>
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="mb-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all shadow-sm hover:shadow-md"
                  >
                    {openIndexes.includes(idx) ? 'Hide Projects' : 'Show Projects'}
                  </button>
                  {openIndexes.includes(idx) && (
                    <div className="space-y-4">
                      {exp.projects.map((proj, pidx) => (
                        <div key={pidx} className="bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 rounded-lg p-4">
                          <h4 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-1">{proj.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{proj.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {proj.technologies.map((tech, tidx) => (
                              <span key={tidx} className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-800 rounded-lg text-xs font-semibold">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;