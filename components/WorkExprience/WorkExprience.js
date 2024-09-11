/* eslint-disable max-len */
import React from 'react';

import Location from '../svgs/Location';
import LinkIcon from '../svgs/Link';

import styles from './workexprience.module.scss';

const EXP = [
  {
    company: 'Tender247',
    location: 'Ahemedabad, India',
    companyLink: 'https://www.tender247.com/organization/Ahmedabad',
    position: 'Software Engineer',
    date: 'July 2024 - Present',
    skills: ['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux'],
    description: [
      'Collaborated across Lead Management, Campaign Management, and the Internal Component Library, developing high-performance, maintainable features and components using React.js.',
      'Revamped the lead generation flow, lead details page, and contacts, while integrating a comprehensive communication module to support chat and calls, significantly enhancing user interaction and support capabilities.',
      'Mentored junior developer, conducting code reviews and managing tasks to ensure product quality and timely delivery',
    ],
  },
  {
    company: 'dizayn.io',
    location: 'Ahemedabad, India',
    companyLink: 'https://dizayn.io',
    position: 'Full Stack Developer',
    date: 'Aug, 2023 - April 2024',
    skills: [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
      'Zustand',
      'Node.js',
      'Express.js',
      'MongoDB',
      'GraphQL',
      'Firebase',
      'Vercel',
    ],
    description: [
      'Developed various web and mobile apps using React.js, Next.js, React Native, Node.js, and MongoDB, and deployed web apps on AWS, Vercel, and Firebase; server apps on AWS and Firebase; and mobile apps on Google and Apple Store.',
      'Delivered more than 20 projects and 3 products on time while exceeding quality expectations.',
      'Led the development of Kaya Design System, creating several modules for web, server, and mobile, which reduced delivery time by 30%.',
      'Collaborated with the CEO on day-to-day tasks, including hiring, project management, and team management.',
    ],
  },

  {
    company: 'Xcitech Technology',
    location: 'Varodara ,India',
    companyLink: 'https://www.xcitech.in/',
    position: 'Associate React Developer',
    date: 'May, 2021 - July, 2022',
    skills: ['Java', 'Spring Boot', 'MongoDB', 'UML', 'Sequence Diagram', 'API', 'Documentation'],
    description: [
      'Learned back-end development using Spring Boot and MongoDB, actively contributing to database design and API writing while maintaining industry standards.',
      'Collaborated with the project manager to design features and create UML and sequence diagrams.',
      'Collaborated with the front-end team to guide API development and created documentation for back-end APIs.',
    ],
  },
  {
    company: 'Freelancer',
    location: 'Ahmedabar, India (Remote)',
    // companyLink: 'https://www.goldmansachs.com',
    position: 'Full Stack Developer',
    date: 'Jan, 2024 - Dec, 2024',
    skills: [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'GraphQL',
      'Firebase',
      'React Native',
    ],
    description: [
      'Collaborated with diverse clients globally for Mobile and Web applications using Next.js, React Native, and MERN Stack.',
      'Key Projects: Dosawala (Website for Hotel), E-commerce (E-commerce for Women’s wear), Skioros (Quiz app for Children), Greems EV (Energy Management App)',
    ],
  },
];

const WorkExprience = () => {
  const [currentOpen, setCurrentOpen] = React.useState(0);

  return (
    <div className={styles.workExprience}>
      <p className={styles.heading}>Professional Experience</p>
      {EXP.map((exp, index) => (
        <div key={exp.position + index} className={styles.exprienceContainer}>
          <div
            style={
              currentOpen === index
                ? {
                    backgroundColor: '#2b59ff',
                  }
                : {}
            }
            className={styles.header}
            onClick={() => setCurrentOpen(index)}
          >
            <p className={styles.position}>{exp.position}</p>
            <div>
              <p className={styles.position}>{exp.date}</p>
              <p className={styles.position}>{currentOpen === index ? '-' : '+'}</p>
            </div>
          </div>
          {currentOpen === index && (
            <div className={styles.contentSection}>
              <div
                className={styles.locationSection}
                style={{
                  columnGap: '20px',
                }}
              >
                <div className={styles.locationSection}>
                  <Location />
                  <p>{exp.location}</p>
                </div>
                <a
                  className={styles.locationSection}
                  href={exp.companyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon />
                  <p>{exp.company}</p>
                </a>
              </div>
              <ul>
                {exp.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              <div className={styles.skillTags}>
                {exp.skills.map((skill, index) => (
                  <div key={skill + index} className={styles.tag}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExprience;
