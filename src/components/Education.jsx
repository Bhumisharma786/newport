import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const educationData = [
  {
    icon: '🏫',
    title: 'Saraswati Vidya Niketan',
    subtitle: 'Secondary School',
    date: '2017 - 2019',
    description: 'Completed secondary education with a strong academic record.'
  },
  {
    icon: '🏫',
    title: 'Shri Mahaveer Digamber Jain Senior Secondary School',
    subtitle: 'Senior Secondary School',
    date: '2019 - 2021',
    description: 'Completed senior secondary education, focusing on science and mathematics.'
  },
  {
    icon: '🎓',
    title: 'Vivekananda Global University',
    subtitle: 'B.Tech, AI & DS (Batch of 2028)',
    date: '2021 - 2028',
    description: 'Pursuing B.Tech in Computer Science with specialization in Artificial Intelligence and Data Science.'
  },
  {
    icon: '🪖',
    title: 'NCC Cadet',
    subtitle: 'A Certificate (Air Wing)',
    date: '2021 - 2023',
    description: 'Disciplined and committed as an NCC Air Wing cadet. Holder of the A certificate.'
  },
];

const Education = () => (
  <section className="w-full py-16 flex justify-center bg-transparent">
    <div className="max-w-3xl w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Education</h2>
      <VerticalTimeline animate={true}>
        {educationData.map((item, idx) => (
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

export default Education; 