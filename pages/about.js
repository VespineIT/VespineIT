import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Globe, Users, Rocket, Code, Heart, Star, MessageCircle, Building } from 'lucide-react';
import pageData from '../data/aboutPageData.json';
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

// Destructure data from imported JSON
const { teamMembers, galleryImages, testimonials } = pageData;

function useAutoSlide(duration) {
  const [x, setX] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const containerWidth = -2400; // Adjust this based on total width of all cards
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setX(prev => {
        // When reaching the end, smoothly reset to start
        if (prev <= containerWidth) {
          return 0;
        }
        return prev - 1;
      });
    }, duration);
    
    return () => clearInterval(interval);
  }, [duration, isPaused]);
  
  return [x, setIsPaused];
}

export default function About() {
  const [x, setIsPaused] = useAutoSlide(20); // Add this at the top of your component

  return (
    <div className="min-h-screen overflow-hidden relative py-20">
      {/* Hero Section with Background Image */}
      <div className="relative z-10 h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 -top-20">
          <img 
            src="/images/background/about-bg.jpg" 
            alt="VespineIT Office Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient overlay for enhanced effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-32 h-32 border border-orange-400/20 rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg rotate-45"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center w-full"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold mb-4 sm:mb-6 text-white font-poppins tracking-tight drop-shadow-2xl leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
            >
              About VespineIT
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto text-gray-300 px-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Discover our innovative solutions designed to transform your
              business in the digital era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="animate-bounce inline-flex items-center text-orange-500"
            >
              <span className="mr-2 text-orange text-sm sm:text-base">Explore Below</span>
              <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Company Statistics with Counter Animation */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-white py-5"
      >
        <div className="container mx-auto px-4 w-[85%] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users size={48} />, number: '20+', label: 'Employees', color: '#3b82f6' },
              { icon: <Globe size={48} />, number: '10+', label: 'Completed projects', color: '#10b981' },
              { icon: <Award size={48} />, number: '98%', label: 'Client Satisfaction', color: '#f97316' },
              { icon: <Building size={48} />, number: '02+', label: 'Years in Business', color: '#8b5cf6' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-black/30 border border-gray-700"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Hover effect border */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(45deg, ${stat.color}00, ${stat.color}40, ${stat.color}00)`,
                    borderLeft: `3px solid ${stat.color}` 
                  }}
                ></div>
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-4xl font-bold mb-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}90)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-lg text-gray-300"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-16 h-16 border-2 border-orange-400/30 rotate-45"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 right-16 w-20 h-20 border border-blue-400/30 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 w-[85%] mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 px-6 py-3 rounded-full text-orange-400 text-sm font-semibold mb-8 border border-orange-500/20 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              About Our Company
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            >
              Who We Are
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Innovators, creators, and problem solvers united by a passion for transforming businesses through technology
            </motion.p>
          </motion.div>

          {/* Main Content Container */}
          <div className="max-w-6xl mx-auto">
            {/* Story Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Our Journey Card */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>

                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-3 mb-6"
                    >
                      <div className="p-3 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-xl border border-orange-400/30">
                        <Rocket className="text-orange-400 w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Journey</h3>
                    </motion.div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      Vespine IT was founded in <span className="text-orange-400 font-semibold">2024</span> with a mission to revolutionize how businesses leverage technology. 
                      What began as a small team of passionate innovators has grown into a dynamic enterprise serving 
                      clients across <span className="text-orange-400 font-semibold">10+ countries</span>.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Our team combines technical expertise with business acumen to deliver solutions that not only 
                      solve immediate challenges but position our clients for future success in an increasingly 
                      digital world.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Our Values Card */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>

                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-3 mb-6"
                    >
                      <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl border border-blue-400/30">
                        <Heart className="text-blue-400 w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Values</h3>
                    </motion.div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      We believe in building more than just software - we build relationships, trust, and sustainable growth. 
                      Every project is an opportunity to create lasting value for our clients and their customers.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Innovation, integrity, and excellence drive everything we do. We're committed to staying at the 
                      forefront of technology while never losing sight of the human element that makes great solutions truly great.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Highlights Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: <Code size={28} />,
                  title: "Technology Excellence",
                  description: "Leading-edge solutions built with cutting-edge technologies",
                  color: "orange",
                  gradient: "from-orange-400 to-orange-600"
                },
                {
                  icon: <Users size={28} />,
                  title: "Expert Team",
                  description: "Skilled professionals with diverse expertise and proven track records",
                  color: "blue",
                  gradient: "from-blue-400 to-blue-600"
                },
                {
                  icon: <Globe size={28} />,
                  title: "Global Reach",
                  description: "Serving clients worldwide with localized understanding and support",
                  color: "purple",
                  gradient: "from-purple-400 to-purple-600"
                },
                {
                  icon: <Award size={28} />,
                  title: "Proven Results",
                  description: "Consistent delivery of high-quality solutions that drive business growth",
                  color: "green",
                  gradient: "from-green-400 to-green-600"
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${highlight.color}-500/10 to-${highlight.color}-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`p-4 bg-gradient-to-br from-${highlight.color}-400/20 to-${highlight.color}-600/20 rounded-xl border border-${highlight.color}-400/30 inline-flex`}>
                        <div className={`text-${highlight.color}-400`}>
                          {highlight.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className={`text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:${highlight.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {highlight.title}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
                    
                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${highlight.color}-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 cursor-pointer"
              >
                <span>Ready to work with us?</span>
                <ArrowRightIcon className="w-5 h-5" />
              </motion.div>
              
              <p className="text-gray-400 mt-4 text-sm">
                Let's discuss how we can help transform your business
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-20 h-20 border border-orange-400/30 rotate-45"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 px-6 py-3 rounded-full text-orange-400 text-sm font-semibold mb-8 border border-orange-500/20 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              Our Foundation
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            >
              Mission & Vision
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              The driving forces behind everything we do - our commitment to innovation and our vision for the future
            </motion.p>
          </motion.div>
          
          {/* Cards Container */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <pattern id="mission-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#mission-pattern)"/>
                  </svg>
                </div>

                {/* Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl blur-md"></div>
                    <div className="relative bg-gradient-to-br from-orange-400/20 to-orange-600/20 p-4 rounded-2xl border border-orange-400/30">
                      <Target className="text-orange-400 w-8 h-8" />
                    </div>
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-sm text-orange-400 font-semibold uppercase tracking-wider">Our Purpose</div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-orange-400 transition-colors duration-300">
                  Our Mission
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Empower businesses through innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We aim to be the catalyst that transforms 
                  challenges into opportunities through thoughtful application of technology.
                </p>
                
                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    "Delivering exceptional value through technology",
                    "Building lasting partnerships with clients", 
                    "Fostering innovation across industries"
                  ].map((point, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <pattern id="vision-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                        <polygon points="12.5,2 22,10 12.5,18 3,10" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#vision-pattern)"/>
                  </svg>
                </div>

                {/* Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-2xl blur-md"></div>
                    <div className="relative bg-gradient-to-br from-blue-400/20 to-purple-600/20 p-4 rounded-2xl border border-blue-400/30">
                      <Rocket className="text-blue-400 w-8 h-8" />
                    </div>
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-sm text-blue-400 font-semibold uppercase tracking-wider">Our Future</div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors duration-300">
                  Our Vision
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  To be the global leader in digital transformation, recognized for our 
                  ability to envision and implement solutions that not only address current 
                  challenges but anticipate future opportunities in the ever-evolving 
                  technology landscape.
                </p>
                
                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    "Pushing boundaries of technological possibility",
                    "Creating sustainable digital ecosystems",
                    "Empowering the next generation of innovators"
                  ].map((point, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Company Gallery Section
      <section className="py-24 w-[85%] mx-auto">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Company Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look inside Vespine IT - our spaces, our teams, and our culture
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.6
                    }
                  }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative rounded-lg overflow-hidden shadow-lg aspect-video"
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-lg">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section 
      <section className="py-24 w-[85%] mx-auto overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries who drive our strategy and embody our values
            </p>
          </motion.div>
          
          <motion.div className="overflow-hidden">
            <motion.div 
              animate={{ 
                x
              }}
              transition={{ 
                type: "tween",
                ease: "linear",
                duration: 0
              }}
              className="flex space-x-8 pb-4"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              {/* Original team members 
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative group flex-shrink-0 w-72"
                >
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="absolute top-4 right-4 text-white hover:text-blue-600 transition-colors bg-black/30 p-2 rounded-full"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* First duplicate set 
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="relative group flex-shrink-0 w-72"
                >
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="absolute top-4 right-4 text-white hover:text-blue-600 transition-colors bg-black/30 p-2 rounded-full"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Second duplicate set for smoother transition
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`duplicate2-${index}`}
                  className="relative group flex-shrink-0 w-72"
                >
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="absolute top-4 right-4 text-white hover:text-blue-600 transition-colors bg-black/30 p-2 rounded-full"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Client Testimonials */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 "></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 w-[90%] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6 border border-orange-500/20"
            >
              <Star className="w-4 h-4" />
              Client Success Stories
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their digital landscape and achieve remarkable results
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 overflow-hidden h-full">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30">
                      <MessageCircle className="text-orange-400 w-6 h-6" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.1 * i,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote Text */}
                  <blockquote className="text-gray-200 text-lg leading-relaxed mb-8 italic relative">
                    <span className="text-orange-400 text-4xl absolute -top-2 -left-1 font-serif">"</span>
                    <span className="pl-8">{testimonial.quote}</span>
                    <span className="text-orange-400 text-4xl absolute -bottom-6 right-0 font-serif">"</span>
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex items-center mt-auto pt-6 border-t border-gray-700/50">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300"
                      />
                      {/* Online Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-white text-lg group-hover:text-orange-400 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm font-medium">{testimonial.role}</p>
                    </div>
                    
                    {/* Company Logo Placeholder */}
                    <div className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                        <Building className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-12 border-t border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}