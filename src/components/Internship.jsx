import React from 'react';

const Internship = () => (
  <section className="w-full py-16 flex justify-center bg-transparent">
    <div className="max-w-xl w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Internship</h2>
      <div className="w-full">
        <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl border border-teal-400 p-8 flex flex-col items-center text-center shadow-lg">
          <div className="text-5xl mb-4">💼</div>
          <h3 className="text-2xl font-bold text-teal-500 mb-2">LinuxWorld Informatics Pvt. Ltd.</h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Summer Intern (June–Aug 2025)</h4>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-3">
            LinuxWorld, short for LW, is a technology and training solutions company based in Jaipur, India. For around a decade now, the company has successfully built a niche of its own by offering an integrated portfolio of high end Linux, Open Source & Security trainings and support services.<br /><br />
            The solutions offered aim to significantly empower organisations of all shapes and sizes including SMEs, MNCs, and educational institutes to cultivate the true power of technology. LinuxWorld Informatics Pvt Ltd is driven by a team of certified professionals under the dynamic leadership of Mr. Vimal Daga and the company’s solutions are backed by state of the art infrastructure.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-3">Focus Areas:</p>
          <ul className="flex flex-wrap gap-3 justify-center mb-2">
            <li className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">DevOps</li>
            <li className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">Docker</li>
            <li className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">AI</li>
            <li className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">Cloud Technologies</li>
            <li className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">ML</li>
            <li className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">CSS</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Internship; 