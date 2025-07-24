import React from 'react';

const certifications = [
  {
    icon: '📜',
    title: 'AWS Certificate',
    description: 'Amazon Web Services Certified',
    url: 'https://www.credly.com/badges/your-aws-certificate-link',
    button: 'View Certificate'
  },
  {
    icon: '🪖',
    title: 'NCC Air Wing A Certificate',
    description: 'National Cadet Corps (Air Wing) - A Certificate',
    url: '',
    button: ''
  },
  {
    icon: '💼',
    title: 'Internship Certificates',
    description: 'Certificates for completed internships',
    url: '',
    button: ''
  }
];

const Certifications = () => (
  <section className="w-full py-16 flex justify-center bg-transparent">
    <div className="max-w-4xl w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Certifications / Achievements</h2>
      <div className="flex flex-wrap gap-8 justify-center w-full">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl border border-teal-400 p-6 shadow-lg min-w-[220px] max-w-xs transition-transform duration-300 hover:scale-105">
            <div className="text-4xl mb-3">{cert.icon}</div>
            <h3 className="text-lg font-bold text-teal-500 mb-1">{cert.title}</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-3 text-center">{cert.description}</p>
            {cert.url && cert.button && (
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-teal-500 text-white font-semibold shadow hover:bg-teal-600 transition-colors duration-200">{cert.button}</a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications; 