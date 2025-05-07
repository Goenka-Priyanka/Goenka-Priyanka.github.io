'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    {
      icon: <FaLinkedin className="text-3xl text-white" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/priyanka-goenka/",
    },
    {
      icon: <MdEmail className="text-3xl text-white" />,
      title: "priyenkagoenka@gmail.com",
      link: "mailto:priyenkagoenka@gmail.com",
    },
    {
      icon: <FaPhone className="text-3xl text-white" />,
      title: "+4915906660961",
      link: "tel:+4915906660961",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div 
            ref={sectionRef}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              className="flex flex-col items-center gap-6 max-w-md mx-auto"
            >
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center w-full hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
