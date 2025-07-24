import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const timelineData = [
  {
    icon: '🎓',
    title: 'B.Tech in Computer Science (AI & DS)',
    subtitle: 'Vivekananda Global University, Jaipur',
    date: '2021 - Present',
    description: 'Pursuing B.Tech with specialization in Artificial Intelligence and Data Science. Consistent academic performer and active in tech communities.'
  },
  {
    icon: '💼',
    title: 'Internship',
    subtitle: 'LinuxWorld Informatics Pvt. Ltd.',
    date: 'Summer 2024',
    description: 'Summer internship focused on AI, cloud, and automation. Gained hands-on experience in real-world tech projects.'
  },
  {
    icon: '🛠️',
    title: 'Certifications & Skills',
    subtitle: 'Python, Docker, ML, Streamlit, C/C++, Fullstack',
    date: '2022 - 2024',
    description: 'Completed multiple certifications and built a strong foundation in fullstack development and machine learning.'
  },
  {
    icon: '🪖',
    title: 'NCC Air Wing Cadet',
    subtitle: 'A Certificate',
    date: '2021 - 2023',
    description: 'Disciplined and committed as an NCC Air Wing cadet. Holder of the A certificate.'
  },
];

const Timeline = () => (
  <section className="w-full py-16 flex justify-center bg-transparent">
    <div className="max-w-3xl w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">My Journey</h2>
      <VerticalTimeline animate={true}>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            icon={<span className="text-2xl">{item.icon}</span>}
            iconStyle={{ background: 'rgba(13, 148, 136, 0.15)', color: '#14b8a6', boxShadow: '0 0 0 4px #14b8a6' }}
            contentStyle={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#181824', border: '1px solid #14b8a6' }}
            contentArrowStyle={{ borderRight: '7px solid #14b8a6' }}
            className="dark:bg-black/30 dark:text-white"
          >
            <h3 className="font-bold text-xl mb-1">{item.title}</h3>
            <h4 className="font-semibold text-teal-500 mb-2">{item.subtitle}</h4>
            <p className="text-base text-gray-700 dark:text-gray-200">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default Timeline; 