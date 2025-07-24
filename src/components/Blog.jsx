import React from 'react';

const blogPosts = [
  {
    title: 'How AI is Transforming Everyday Life',
    excerpt: 'Explore the ways artificial intelligence is making an impact in our daily routines, from smart assistants to healthcare and beyond.',
    url: 'https://bhumisharma2786.wordpress.com/2024/06/01/how-ai-is-transforming-everyday-life/'
  },
  {
    title: 'Getting Started with Docker for Developers',
    excerpt: 'A beginner-friendly guide to understanding Docker, containers, and how they can streamline your development workflow.',
    url: 'https://bhumisharma2786.wordpress.com/2024/05/15/getting-started-with-docker/'
  },
  {
    title: 'NCC: Building Discipline and Leadership',
    excerpt: 'A personal reflection on the lessons learned and skills gained as an NCC Air Wing cadet.',
    url: 'https://bhumisharma2786.wordpress.com/2024/04/20/ncc-building-discipline-leadership/'
  }
];

const Blog = () => (
  <section className="w-full py-16 flex justify-center bg-transparent">
    <div className="max-w-4xl w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Blog / Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl border border-teal-400 p-6 flex flex-col shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-teal-500 mb-2">{post.title}</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">{post.excerpt}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-auto px-4 py-2 rounded-lg bg-teal-500 text-white font-semibold shadow hover:bg-teal-600 transition-colors duration-200">Read More</a>
          </div>
        ))}
      </div>
      <a href="https://bhumisharma2786.wordpress.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-accent2 text-white font-semibold shadow-md hover:bg-accent3 transition">View All Articles</a>
    </div>
  </section>
);

export default Blog; 