'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PDFViewer from '@/components/PDFViewer';
import { FaArrowDown, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [resumeRef, resumeInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Hi, I'm <span className="text-purple-400">Priyanka Goenka</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 flex flex-col items-center gap-2"
          >
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="desktop computer">🖥️</span>
              MSc Student at Gisma University of Applied Science, Germany
            </span>
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="chart">📊</span>
              Ex Business Execution Consultant AVP at Wells Fargo
            </span>
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="graduation cap">🎓</span>
              Masters in Commerce from Calcutta University
            </span>
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#resume" 
              className="px-8 py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 flex items-center"
            >
              View Resume <FaArrowDown className="ml-2" />
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
            <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gray-800 rounded-lg shadow-md p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-3/10 flex justify-center">
                <motion.img
                  src="/Priyanka_Goenka_UCSD_ID_PIC.jpg"
                  alt="Priyanka Goenka"
                  className="rounded-lg shadow-lg max-w-full h-auto w-64 md:w-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="md:w-7/10 prose dark:prose-invert max-w-none text-justify">
                <p className="mb-5 text-gray-300 text-lg md:text-lg">
                  Hi, I'm Priyanka Goenka. Currently, I'm pursuing a Master of Science in Business Management and Project Management at Gisma University of Applied Science in Potsdam, Germany. I am an independent and highly motivated e-commerce enthusiast with proven experience and strong work ethic in account management, process enhancement, and supporting sales strategies.
                </p>
                <p className="mb-5 text-gray-300 text-lg md:text-lg">
                  Before joining Gisma University, I worked as a Business Execution Consultant Assistant Vice President at Wells Fargo, where I focused on spearheading the development of mitigation processes for risks resulting from control failures, conducting Quality Assurance protocols, and mentoring junior Strategy and Execution staff. I successfully reduced compliance errors from 60% to 5% during the annual internal audit.
                </p>
                <p className="mb-5 text-gray-300 text-lg md:text-lg">
                  I also have valuable experience at Walmart as an Associate Operations Analyst and at Amazon Development Centre India as an SPS Associate, where I collaborated with high-value US vendors, guided them in leveraging Amazon Retail Analytics, and coordinated with cross-functional teams to improve customer experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Life Trajectory Timeline - Modern Vertical & Alternating */}
          <div className="w-full mt-16">
            <h2 className="text-2xl font-bold text-white mb-10 text-center tracking-wide">The Adventure Timeline</h2>
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-400 to-green-400 opacity-70 z-0" style={{transform: 'translateX(-50%)'}}></div>
              {/* Timeline Events (Reversed Order) */}
              <div className="flex flex-col gap-16">
                {/* Gisma University (2024-Now) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-green-400 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <motion.div initial={{opacity:0, x:40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-left">
                      <div className="flex flex-col items-start">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-green-400">
                          <img src="/University_of_California_San_Diego.avif" alt="University Logo" className="w-16 h-16 object-contain rounded-lg" />
                        </div>
                        <div className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2024–2025</div>
                        <div className="text-gray-200 text-base font-medium">Gisma University of Applied Science</div>
                        <div className="text-gray-400 text-sm">MSc in Business Management and Project Management</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Wells Fargo (2022-2024) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-blue-400">
                          <img src="/Walmart_logo.png" alt="Wells Fargo Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2022–2024</div>
                        <div className="text-gray-200 text-base font-medium">Wells Fargo</div>
                        <div className="text-gray-400 text-sm">Business Execution Consultant AVP</div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-400 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2"></div>
                </div>
                {/* Walmart (2019-2022) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <motion.div initial={{opacity:0, x:40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-left">
                      <div className="flex flex-col items-start">
                        <div className="bg-white rounded-full p-1 shadow-lg mb-2 border-2 border-yellow-400">
                          <img src="/Walmart_logo.png" alt="Walmart Logo" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="bg-yellow-700 text-white px-3 py-1 rounded shadow text-sm font-semibold mb-1">2019-2022</div>
                        <div className="text-gray-300 text-sm">Associate Operations Analyst, Walmart</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Amazon (2017-2019) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-purple-400">
                          <img src="/bg_removed.avif" alt="Amazon Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2017–2019</div>
                        <div className="text-gray-200 text-base font-medium">Amazon Development Centre India</div>
                        <div className="text-gray-400 text-sm">SPS Associate</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-purple-500 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold text-white mb-4">My Projects</h1>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Showcasing research and development work in AI Agents.
            </p>
          </motion.div>
          
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden mb-10"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                className="w-full h-[28rem]" 
                src="https://www.youtube.com/embed/jFIWlEv6ZXo"
                title="Multi-agent collaboration in Minecraft"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning
              </h2>
              
              <p className="text-gray-300 mb-5 text-base md:text-lg">
                This research project explores   multi-agent collaboration in complex environments like Minecraft. 
                The framework enables multiple AI agents to reason, plan, and work together to solve complex tasks 
                that would be difficult for single agents.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                  AI Agents
                </span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                  Multi-agent Systems
                </span>
                <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm">
                  Embodied AI
                </span>
                <span className="px-3 py-1 bg-yellow-900 text-yellow-200 rounded-full text-sm">
                  Minecraft
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/kolbytn/mindcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub Repository
                </a>
                <a
                  href="https://arxiv.org/abs/2504.17950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-1" /> View Paper
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={resumeRef}
            initial={{ opacity: 0, y: 50 }}
            animate={resumeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Resume</h2>
            
            <PDFViewer pdfUrl="/Priyanka_Goenka_Resume.pdf" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;