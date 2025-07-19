import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger fade-in animations on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Creating responsive, high-performance websites using modern frameworks and technologies.",
      icon: "/images/web.png",
      color: "#3b82f6", // blue
      features: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "E-commerce"],
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Cross-platform solutions that deliver seamless experiences for iOS and Android users.",
      icon: "/images/mobile.png",
      color: "#10b981", // emerald
      features: ["React Native", "Flutter", "Swift", "Kotlin", "App Store Optimization", "Mobile UI/UX"],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with intuitive functionality.",
      icon: "/images/uiux.png",
      color: "#f97316", // orange
      features: ["Figma", "Adobe XD", "User Research", "Prototyping", "Accessibility", "Visual Identity"],
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to increase your brand visibility and drive qualified leads.",
      icon: "/images/digital.png",
      color: "#8b5cf6", // violet
      features: ["SEO", "Content Marketing", "Social Media", "Email Campaigns", "Analytics", "PPC Advertising"],
    },
    {
      id: 5,
      title: "AI & ML Training",
      description: "Custom artificial intelligence and machine learning solutions to automate and enhance your business.",
      icon: "/images/ml.png",
      color: "#ec4899", // pink
      features: ["Model Development", "Data Analysis", "NLP", "Computer Vision", "Predictive Analytics", "Integration"],
    },
    {
      id: 6,
      title: "Cloud Services",
      description: "Scalable infrastructure and deployment systems for modern digital products.",
      icon: "/images/cloud.png",
      color: "#64748b", // slate
      features: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section (kept as requested) */}
      <div className="relative z-10 h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 -top-20">
          <img 
            src="/images/background/hero-bg.jpg" 
            alt="VespineIT Services Background"
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
              Our Services
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

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* New Services Section */}
        <div className="relative z-10 pt-20">
          <div 
            className="text-center mb-16 fade-in-element"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your unique business needs
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="fade-in-element"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`
                }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-black/30 h-full border border-gray-700">
                  {/* Hover effect border */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(45deg, ${service.color}00, ${service.color}40, ${service.color}00)`,
                      borderLeft: `3px solid ${service.color}` 
                    }}
                  ></div>

                  <div className="relative p-8">
                    {/* Service Header with Icon */}
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                          border: `1px solid ${service.color}60` 
                        }}
                      >
                        <img src={service.icon} alt="" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-white">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6">{service.description}</p>

                    {/* Feature List */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: service.color }}></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action button */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex justify-between items-center">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-sm font-medium transition-all duration-300 group-hover:translate-x-1"
                          style={{ color: service.color }}
                        >
                        </a>
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ background: `${service.color}20` }}
                        >
                          <ArrowRightIcon className="w-4 h-4" style={{ color: service.color }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="relative z-10 py-24">
          <div 
            className="text-center mb-16 fade-in-element"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A strategic approach to delivering exceptional results
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", description: "We analyze your business goals and requirements" },
              { number: "02", title: "Strategy", description: "We create a roadmap tailored to your unique needs" },
              { number: "03", title: "Implementation", description: "Our team builds your solution with precision" },
              { number: "04", title: "Optimization", description: "Continuous improvement to maximize results" }
            ].map((step, index) => (
              <div 
                key={index}
                className="fade-in-element"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.8s ease ${index * 0.1 + 0.2}s, transform 0.8s ease ${index * 0.1 + 0.2}s`
                }}
              >
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-orange-500/30 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold text-orange-500 mr-3 group-hover:scale-110 transition-transform duration-300">{step.number}</div>
                    <div className="h-px flex-grow bg-gradient-to-r from-orange-500 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-24 fade-in-element"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="absolute inset-0 bg-orange-500 opacity-5"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "20+", label: "Expert Team Members" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">{stat.number}</div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative z-10 rounded-2xl overflow-hidden mb-12 fade-in-element"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-12 relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-white rounded-full"></div>
              <div className="absolute -left-10 bottom-0 w-40 h-40 bg-white rounded-full"></div>
            </div>
            
            <div className="relative text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h3>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                Let's collaborate to build something amazing that exceeds expectations and drives real business results.
              </p>
              <button className="px-8 py-4 rounded-xl bg-white text-orange-600 font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add this style for the fade-in animations */}
      <style jsx>{`
        .fade-in-element.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}