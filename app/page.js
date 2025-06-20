'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, ArrowDown, Send } from 'lucide-react';
import BlogsSection from '@/components/blog/BlogsSection';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to load blogs', err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Mignot Yirsaw Adane</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Creative Marketing Enthusiast | Passionate About Branding & Strategy
          </p>
          <button
            onClick={scrollToContact}
            className="group bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 mx-auto"
          >
            Let's Connect
            <ArrowDown className="group-hover:translate-y-1 transition-transform" />
          </button>
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
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Marketing Manager</h3>
              <p className="text-primary mb-4">Repi Soap & Detergent S.C.</p>
              <p className="text-muted-foreground">
                Led strategic marketing initiatives, developed brand strategies, and managed successful
                product launches. Increased market share by 15% through targeted campaigns.
              </p>
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

      <BlogsSection posts={posts} />

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
                <a href="mailto:mignotyirsaw22@gmail.com" className="text-muted-foreground hover:text-primary">
                mignotyirsaw22@gmail.com
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