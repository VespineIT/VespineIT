import React from 'react';
import { motion } from 'framer-motion';
import { 
  CloudCog, 
  Shield, 
  Network, 
  Cpu, 
  Globe, 
  Code 
} from 'lucide-react';

export default function Home() {
  // Animated background polygon generation
  const generatePolygonPoints = () => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <svg 
        className="absolute inset-0 z-0 opacity-10"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <motion.polygon
          points={generatePolygonPoints()}
          fill="#3B82F6"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0],
            points: [
              generatePolygonPoints(),
              generatePolygonPoints(),
              generatePolygonPoints()
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center w-full"
        >
          <motion.h1 
            className="text-9x1 md:text-6xl font-bold mb-6 text-gray-900"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100 
            }}
          >
            TechInnovate Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-700 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transforming Business through Cutting-Edge Technology and Innovative Solutions
          </motion.p>
          
          <div className="flex justify-center space-x-4">
            {['Our Services', 'Contact Us'].map((btn, index) => (
              <motion.button
                key={btn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.2) }}
                className={`
                  px-8 py-3 rounded-full transition-colors
                  ${index === 0 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }
                `}
              >
                {btn}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <CloudCog size={48} className="text-blue-500 mb-4" />,
              title: 'Cloud Solutions',
              description: 'Scalable and secure cloud infrastructure tailored to your business needs.'
            },
            { 
              icon: <Shield size={48} className="text-green-500 mb-4" />,
              title: 'Cybersecurity',
              description: 'Comprehensive security solutions to protect your digital assets.'
            },
            { 
              icon: <Network size={48} className="text-purple-500 mb-4" />,
              title: 'Network Design',
              description: 'Robust network architectures for seamless connectivity and performance.'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Leverage</h2>
          <motion.div 
            className="flex flex-wrap justify-center items-center space-x-8 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Cpu size={48} />, name: 'AI/ML' },
              { icon: <Globe size={48} />, name: 'Cloud' },
              { icon: <Code size={48} />, name: 'DevOps' },
              { icon: <Network size={48} />, name: 'Networking' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      delay: index * 0.2
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center text-gray-700"
              >
                {tech.icon}
                <span className="mt-2 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}