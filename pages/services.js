import React, { useState, useEffect } from 'react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Creating responsive, high-performance websites using modern frameworks and technologies.",
      icon: "/api/placeholder/60/60", // Replace with actual icon
      accent: "#6366f1",
      features: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Cross-platform solutions that deliver seamless experiences for iOS and Android users.",
      icon: "/api/placeholder/60/60", // Replace with actual icon
      accent: "#ec4899",
      features: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with intuitive functionality.",
      icon: "/api/placeholder/60/60", // Replace with actual icon
      accent: "#f97316",
      features: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and deployment systems for modern digital products.",
      icon: "/api/placeholder/60/60", // Replace with actual icon
      accent: "#0ea5e9",
      features: ["AWS", "Google Cloud", "Azure", "Docker & Kubernetes"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden relative py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '10s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Animated header */}
        <div className={`mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-10 bg-indigo-400"></div>
            <span className="px-4 text-sm font-medium text-indigo-600 tracking-wider uppercase">Our Expertise</span>
            <div className="h-px w-10 bg-indigo-400"></div>
          </div>
          <h2 className="text-6xl font-extrabold text-center text-gray-900 mb-6">
            <span className="relative inline-block">
              Innovative
              <div className="absolute inset-x-0 bottom-0 h-3 bg-pink-200 -z-10 transform skew-x-12"></div>
            </span>
            &nbsp;Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            We craft cutting-edge digital experiences that elevate brands and solve complex challenges.
          </p>
        </div>

        {/* Services section with hover animations and expandable cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const isActive = activeIndex === service.id;
            const delay = index * 0.2;
            
            return (
              <div 
                key={service.id}
                className={`group relative bg-white rounded-2xl p-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ 
                  transitionDelay: `${delay}s`,
                  boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setActiveIndex(service.id)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Animated accent border */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(to right, transparent, transparent)`,
                    backgroundSize: isActive ? '200% 100%' : '100% 100%',
                    border: `2px solid ${service.accent}`,
                    opacity: isActive ? 1 : 0.1,
                  }}
                ></div>
                
                <div className="flex items-start">
                  {/* Icon with hover effect */}
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl mr-6 overflow-hidden transition-all duration-500 flex items-center justify-center"
                    style={{ 
                      backgroundColor: isActive ? service.accent : `${service.accent}15`,
                      transform: isActive ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <img src={service.icon} alt={service.title} className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-all duration-300" style={{ 
                      color: isActive ? service.accent : '#1f2937'
                    }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    {/* Expandable feature list */}
                    <div className={`grid grid-cols-2 gap-2 mb-6 transition-all duration-500 ${isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: service.accent }}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Animated button */}
                    <button 
                      className="flex items-center text-sm font-medium transition-all duration-500 relative overflow-hidden group-hover:pl-2"
                      style={{ color: service.accent }}
                    >
                      <span className="mr-8 relative z-10">Explore Service</span>
                      <span className="absolute right-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-500 transform group-hover:scale-110" style={{ backgroundColor: `${service.accent}20` }}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated statistics section */}
        <div className={`bg-white rounded-2xl p-10 mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.6s', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", color: "#6366f1" },
              { number: "99%", label: "Client Satisfaction", color: "#ec4899" },
              { number: "12+", label: "Team Members", color: "#f97316" },
              { number: "24/7", label: "Support Available", color: "#0ea5e9" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gray-100 rounded-full transform -rotate-6 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative text-4xl font-extrabold" style={{ color: stat.color }}>{stat.number}</div>
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated CTA section */}
        <div className={`relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white rounded-full opacity-10"></div>
            <div className="absolute -left-10 bottom-0 w-40 h-40 bg-white rounded-full opacity-10"></div>
          </div>
          
          <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-indigo-100 mb-8 max-w-lg mx-auto">Let's collaborate to build something amazing that exceeds expectations and drives real business results.</p>
            <button className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}