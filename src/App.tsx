import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Facebook, Mail, Linkedin } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const technologies = [
       "React", "JS/TS", "Tailwind Css", "Saas","SEO"

  ];

  const projects = [
    {
      title: "HealthNet",
      description: "A Blood Donation application for making blood donation process easy and digitalized with proper folder managed for easier navigation of code.",
      githubLink: "https://github.com/sujan-mishra001/healthnet", 
    },
    {
      title: "Vulearn",
      description: "A self-paced web vulnerabilities learning platform with hands-on experience on simple vulnerabilities like SQLi, XSS, broken access control, etc.",
      githubLink: "https://github.com/sujan-mishra001/Vulearn", 
    },
    {
      title: "Blog",
      description: "A user-friendly, self-paced blog application that allows users to create, manage, and publish posts while learning about web development.",
      githubLink: "https://github.com/sujan-mishra001/bloge",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
    
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDark(!isDark)}
          className="fixed top-4 right-4 p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-600 dark:to-purple-600 shadow-lg transition-all duration-300"
        >
          {isDark ? (
            <Sun className="text-white" />
          ) : (
            <Moon className="text-white" />
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Suzan Mishra
          </h1>
          <div className="inline-block bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-gray-900 px-6 py-2 rounded-full mt-4 mb-6 shadow-lg">
            Front Developer
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Just a normal guy trying to build cool frontend applications using React.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 mb-6">
            Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-1 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 transition-transform duration-300 group-hover:transform group-hover:scale-105">
                  <p className="text-center text-gray-800 dark:text-gray-200 font-medium group-hover:text-dark transition-colors duration-300">
                    {tech}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 mb-6">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-500 dark:hover:border-blue-400"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-blue-400 hover:text-purple-800 dark:hover:text-blue-500 transition-colors duration-300"
                >
                  <Github size={24} />
                  View on GitHub
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's collaborate on your next project!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sujan48mishra@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail size={20} />
            Email Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Social Media
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 italic">
            Too lazy to use social media, but you can find me here...
          </p>
          <div className="flex justify-center gap-8">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/sujan-mishra001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/sujan-mishra-743678356/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/khusuman.m"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Facebook size={28} />
            </motion.a>
          </div>
        </motion.div>



        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Sujan Mishra. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
