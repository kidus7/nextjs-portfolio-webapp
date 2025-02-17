'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, ArrowDown, Send, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Replace with actual CV file path
    window.open('/Mignot-cv.pdf', '_blank');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Mignot Yirsaw Adane
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Creative Marketing Enthusiast | Passionate About Branding & Strategy
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={scrollToContact}
                className="group bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2"
              >
                Let's Connect
                <ArrowDown className="group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={downloadCV}
                className="group bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2"
              >
                Download CV
                <FileDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-primary/50"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated marketing professional with a passion for innovative branding strategies,
              I bring fresh perspectives to marketing challenges. My journey in marketing has been
              driven by a deep understanding of consumer behavior and market dynamics. With a strong
              educational background and hands-on experience, I specialize in creating impactful
              marketing campaigns that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/50" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Marketing Manager Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Marketing Manager</h3>
                <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Full-Time
                </span>
              </div>
              <p className="text-primary font-medium mb-2">Repi Soap & Detergent S.C.</p>
              <p className="text-gray-600 mb-4">
                Led strategic marketing initiatives, developed brand strategies, and managed successful
                product launches. Increased market share by 15% through targeted campaigns.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>📍 Addis Ababa, Ethiopia</span>
                <span>•</span>
                <span>📅 Oct 2017 - Sep 2020</span>
              </div>
            </div>

            {/* Add more experience cards as needed */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              'Branding',
              'Digital Marketing',
              'SEO',
              'Market Research',
              'Customer Engagement',
              'Public Relations'
            ].map((skill, index) => (
              <div key={index} className="bg-card p-6 rounded-lg text-center">
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${Math.random() * 30 + 70}%` }}
                  ></div>
                </div>
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-muted/50" id="portfolio">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card rounded-lg overflow-hidden shadow-md">
                <img
                  src={`https://images.unsplash.com/photo-${1500 + item}?auto=format&fit=crop&w=800`}
                  alt={`Project ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Marketing Campaign {item}</h3>
                  <p className="text-muted-foreground">
                    A comprehensive marketing strategy that delivered exceptional results.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md border border-input bg-background"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md border border-input bg-background"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 rounded-md border border-input bg-background"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:mignotyirsaw7@gmail.com" className="text-muted-foreground hover:text-primary">
                  mignotyirsaw7@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+251984272710" className="text-muted-foreground hover:text-primary">
                  +251984272710
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-primary" />
                <a
                  href="https://linkedin.com/in/mignot-yirsaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  linkedin.com/in/mignot-yirsaw
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}