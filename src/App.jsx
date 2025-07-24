import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import About from './components/About';
import { Helmet } from 'react-helmet';
import LoadingScreen from './components/LoadingScreen';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Internship from './components/Internship';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
// Remove: import profileImg from './assets/profile.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <LoadingScreen />;
  return (
    <div className="bg-main min-h-screen w-full text-primary font-sans">
      <Helmet>
        <title>Bhoomi Sharma | Portfolio</title>
        <meta name="description" content="Bhoomi Sharma - B.Tech AI & Data Science student, web developer, and tech enthusiast. Explore my projects, skills, and professional journey." />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:title" content="Bhoomi Sharma | Portfolio" />
        <meta property="og:description" content="Bhoomi Sharma - B.Tech AI & Data Science student, web developer, and tech enthusiast." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="/assets/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bhoomi Sharma | Portfolio" />
        <meta name="twitter:description" content="Bhoomi Sharma - B.Tech AI & Data Science student, web developer, and tech enthusiast." />
        <meta name="twitter:image" content="/assets/profile.jpg" />
      </Helmet>
      <Navbar />
      {/* Hero/About Section */}
      <motion.section id="home" className="w-full min-h-[80vh] flex flex-col justify-center items-center px-4 py-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} className="mb-6">
          <img
            src="https://ui-avatars.com/api/?name=Bhoomi+Sharma&background=8b597b&color=fff&size=256"
            alt="Bhoomi Sharma"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-accent2 shadow-lg"
            style={{ background: 'var(--accent3)' }}
          />
        </Tilt>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Bhoomi Sharma</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-accent2">Web Developer & Designer</h2>
        <p className="max-w-2xl text-lg md:text-xl text-center mb-8">I craft modern, user-focused web experiences with a passion for clean design and elegant code. Welcome to my professional portfolio.</p>
        <a href="#contact" className="px-8 py-3 rounded-full bg-accent2 text-white font-semibold shadow-md hover:bg-accent3 transition">Contact Me</a>
      </motion.section>
      {/* Wave Divider */}
      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z"></path></svg>
      {/* About Section - Second Page */}
      <section id="about">
        <About />
      </section>
      {/* Certifications Section */}
      <section id="certifications">
        <Certifications />
      </section>
      {/* Timeline Section */}
      <section id="timeline">
        <Timeline />
      </section>
      {/* Education Section */}
      <section id="education">
        <Education />
      </section>
      {/* Internship Section */}
      <section id="internship">
        <Internship />
      </section>
      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      {/* Skills Section */}
      <motion.section id="skills" className="w-full py-20 px-4 flex flex-col items-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
        <h3 className="text-3xl font-bold mb-8 text-accent2">Technologies</h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
          {/* Frontend */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">🖥️</span>
            <h4 className="text-xl font-semibold mb-2">Frontend</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">HTML</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">CSS</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">JavaScript</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Tailwind CSS</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">⚙️</span>
            <h4 className="text-xl font-semibold mb-2">Backend</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Python</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Flask</li>
            </ul>
          </div>
          {/* Security & OS */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">🛡️</span>
            <h4 className="text-xl font-semibold mb-2">Security & OS</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Linux (RHEL 9)</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Docker</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Bash</li>
            </ul>
          </div>
          {/* AI & ML Tools */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">🤖</span>
            <h4 className="text-xl font-semibold mb-2">AI & ML Tools</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Jenkins</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Git & GitHub</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">LangChain</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Kubernetes</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Streamlit</li>
            </ul>
          </div>
          {/* Google Badge – Prompt Design */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">🎓</span>
            <h4 className="text-xl font-semibold mb-2">Google Badge – Prompt Design</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">AI</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Gemini API</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Prompt Engineering</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Vertex AI</li>
            </ul>
          </div>
          {/* Google Badge – Gemini & Imagen */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">🧠</span>
            <h4 className="text-xl font-semibold mb-2">Google Badge – Gemini & Imagen</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Gemini</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Imagen</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">NLP</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">Vertex AI</li>
            </ul>
          </div>
          {/* Generative AI Tools & Agentic AI */}
          <div className="bg-accent4 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">��</span>
            <h4 className="text-xl font-semibold mb-2">Generative AI Tools & Agentic AI</h4>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">AI Agents</li>
              <li className="bg-accent3 text-primary px-4 py-1 rounded-full font-medium shadow transition-transform duration-200 hover:scale-110 hover:bg-accent2 hover:text-white">GenAI Systems</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="w-full py-20 px-4 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
        <h3 className="text-3xl font-bold mb-8 text-accent2">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <motion.div className="bg-accent4 rounded-lg shadow p-6 border-l-4 border-accent2" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="text-xl font-semibold mb-2">Project One</h4>
            <p className="text-base mb-2">A brief description of your project goes here. Highlight your role, tech stack, and impact.</p>
            <a href="#" className="text-accent2 font-medium hover:underline">View Project</a>
          </motion.div>
          <motion.div className="bg-accent4 rounded-lg shadow p-6 border-l-4 border-accent2" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
            <h4 className="text-xl font-semibold mb-2">Project Two</h4>
            <p className="text-base mb-2">A brief description of your project goes here. Highlight your role, tech stack, and impact.</p>
            <a href="#" className="text-accent2 font-medium hover:underline">View Project</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="w-full py-20 px-4 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
        <h3 className="text-3xl font-bold mb-8 text-accent2">Contact</h3>
        <form className="w-full max-w-md flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded bg-accent5 text-primary placeholder:text-accent2 border border-accent3 focus:outline-none" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded bg-accent5 text-primary placeholder:text-accent2 border border-accent3 focus:outline-none" />
          <textarea placeholder="Your Message" rows={4} className="px-4 py-3 rounded bg-accent5 text-primary placeholder:text-accent2 border border-accent3 focus:outline-none" />
          <button type="submit" className="px-8 py-3 rounded-full bg-accent2 text-white font-semibold shadow-md hover:bg-accent3 transition">Send Message</button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-8 bg-accent1 flex flex-col md:flex-row items-center justify-center gap-6 text-primary text-lg mt-12 border-t border-accent2 dark:bg-black/40 dark:text-white">
        <div className="flex flex-col items-center md:items-start">
          <span className="italic text-base text-accent3 mb-2">“Built with passion, purpose, and curiosity.”</span>
          <span className="text-sm text-accent2">Made with <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, deployed on <span className="font-semibold">Netlify</span></span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/bhoomisharma" target="_blank" rel="noopener noreferrer" className="hover:text-accent2 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/bhoomisharma" target="_blank" rel="noopener noreferrer" className="hover:text-accent2 transition-colors">LinkedIn</a>
          <a href="https://instagram.com/bhumisharma_786" target="_blank" rel="noopener noreferrer" className="hover:text-accent2 transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;