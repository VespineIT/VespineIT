import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Globe, Users, Rocket } from 'lucide-react';

// Team Member Data
const teamMembers = [
  {
    name: 'Sarah Martinez',
    role: 'Chief Executive Officer',
    bio: 'Tech visionary with 15 years of experience in digital transformation.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Alex Chen',
    role: 'Chief Technology Officer',
    bio: 'Innovation expert specializing in AI and cloud technologies.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Cybersecurity',
    bio: 'Renowned security architect with global enterprise experience.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Wong',
    role: 'Design & UX Director',
    bio: 'Creative technologist bridging design and cutting-edge technology.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-20 text-center"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Vespine IT</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Driving technological innovation and empowering businesses through cutting-edge solutions, 
            strategic insights, and a passion for transformative digital experiences.
          </p>
        </div>
      </motion.div>

      {/* Company Values */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: <Target className="text-blue-500" size={48} />, 
              title: 'Our Mission', 
              description: 'Empower businesses through innovative technology solutions that drive growth and efficiency.' 
            },
            { 
              icon: <Globe className="text-green-500" size={48} />, 
              title: 'Global Perspective', 
              description: 'Delivering world-class technology solutions with a global mindset and local understanding.' 
            },
            { 
              icon: <Rocket className="text-purple-500" size={48} />, 
              title: 'Innovation', 
              description: 'Continuously pushing boundaries and exploring new technological frontiers.' 
            }
          ].map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6
                    }
                  }
                }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.socialLinks.linkedin} 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href={member.socialLinks.twitter} 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Statistics */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-600 text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users size={48} />, number: '250+', label: 'Employees' },
              { icon: <Globe size={48} />, number: '30+', label: 'Countries Served' },
              { icon: <Award size={48} />, number: '98%', label: 'Client Satisfaction' },
              { icon: <Rocket size={48} />, number: '15+', label: 'Years in Business' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}