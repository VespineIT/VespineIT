import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const products = [
    {
      id: 2,
      name: "Tech Triathlon",
      description:
        "The Tech Triathlon by Rootcode is one of Sri Lanka's biggest competitions, combining engineering, AI, and UX design. This annual competition provides participants with a platform to learn how to build a winning digital product.",
      buttonText: "Visit Tech Triathlon",
      imageUrl: "/images/projects/project1.jpg",
      color: "#f97316", // orange
    },
    {
      id: 3,
      name: "Enterprise Solutions",
      description:
        "Custom enterprise software solutions designed to streamline your business operations and increase productivity across your organization.",
      buttonText: "Explore Solutions",
      imageUrl: "/images/projects/project2.jpg",
      color: "#10b981", // emerald
    },
    {
      id: 5,
      name: "Cybersecurity Suite",
      description:
        "Comprehensive security solutions protecting your digital assets from emerging threats with real-time monitoring, threat detection, and automated incident response.",
      buttonText: "Secure Your Business",
      imageUrl: "/images/projects/project1.jpg",
      color: "#f97316", // orange
    },
    {
      id: 6,
      name: "Cloud Migration Services",
      description:
        "Expert guidance and tools to seamlessly transition your infrastructure to the cloud, optimizing costs and improving scalability for your growing business.",
      buttonText: "Start Migration",
      imageUrl: "/images/projects/project2.jpg",
      color: "#10b981", // emerald
    },
  ];

  // Animation for products appearing one by one and scroll effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProducts(products.map((p) => p.id));
    }, 100);

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
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if product should be visible
  const isProductVisible = (productId) => {
    return visibleProducts.includes(productId);
  };

  return (
    <div className="min-h-screen overflow-hidden relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative z-10 h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 -top-20">
          <img 
            src="/images/background/hero-bg.jpg" 
            alt="VespineIT Products Background"
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
            className="text-center w-full relative z-20"
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
              Our Products
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

      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Section heading */}
        <div 
          className="text-center mb-16 fade-in-element"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Innovative Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cutting-edge products designed to meet your business needs
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"></div>
        </div>

        {/* Products */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`fade-in-element`}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`
              }}
            >
              <div
                className={`relative overflow-hidden group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-black/30 ${
                  index % 2 === 0
                    ? "flex flex-col lg:flex-row"
                    : "flex flex-col lg:flex-row-reverse"
                }`}
              >
                {/* Hover effect border */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(45deg, ${product.color}00, ${product.color}40, ${product.color}00)`,
                    borderLeft: `3px solid ${product.color}` 
                  }}
                ></div>
                
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${product.color}40, transparent)`,
                    }}
                  ></div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center relative">
                  <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">{product.description}</p>
                  <div className="mt-auto">
                    <button 
                      className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                      style={{ 
                        background: `linear-gradient(to right, ${product.color}, ${product.color}CC)`,
                        color: '#fff'
                      }}
                    >
                      {product.buttonText}
                      <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Product Section */}
        <div className="relative z-10 py-24">
          <div 
            className="text-center mb-16 fade-in-element"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Product</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our flagship solution that's transforming businesses
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"></div>
          </div>

          <div 
            className="fade-in-element"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-orange-500/20 to-transparent"></div>
              </div>
              
              <div className="relative p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center px-4 py-1.5 text-sm rounded-full mb-4 border border-orange-500/60 bg-orange-500/20 text-orange-500">
                      NEW RELEASE
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-6">AI-Powered Analytics Platform</h3>
                    <p className="text-gray-300 mb-8">
                      Our most advanced analytics solution that leverages artificial intelligence to transform raw data into actionable insights, enabling smarter business decisions and identifying growth opportunities that would otherwise remain hidden.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {["Real-time Dashboards", "Predictive Analytics", "Natural Language Queries", "Automated Reporting"].map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-2 bg-orange-500"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
                      Request Demo
                      <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="/images/hero-bg.jpg" 
                      alt="AI Analytics Platform" 
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
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
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                Discover how our products can help you achieve your business goals and stay ahead of the competition.
              </p>
              <button className="px-8 py-4 rounded-xl bg-white text-orange-600 font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Schedule a Consultation
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