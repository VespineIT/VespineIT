import React from "react";
import { motion } from "framer-motion";
import { Eye, Brain, Sparkles, Zap, Cpu } from "lucide-react";
import "../app/globals.css";

export default function Home() {
  // Animated background polygon generation
  const generatePolygonPoints = () => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  // Tech stack logos
  const techLogos = [
    {
      name: "Python",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
    {
      name: "TensorFlow",
      imageUrl: "https://avatars.githubusercontent.com/u/15658638?s=280&v=4",
    },
    {
      name: "AWS",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Docker",
      imageUrl:
        "https://ml.globenewswire.com/Resource/Download/3c75ee39-4180-4dae-b43f-91b61934d852",
    },
    {
      name: "React",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "NextJS",
      imageUrl:
        "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png",
    },
    {
      name: "Laravel",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    },
    {
      name: "Java",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    },
    {
      name: "MySQL",
      imageUrl:
        "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_MySQL_600x400%402x-1.png",
    },
    {
      name: "MongoDB",
      imageUrl: "https://www.mongodb.com/assets/images/global/leaf.png",
    },
    {
      name: "TypeScript",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
      name: "firebase",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/1200px-New_Firebase_logo.svg.png",
    },
    {
      name: "Angular",
      imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
    },
    {
      name: "Node.js",
      imageUrl: "https://www.mindrops.com/images/nodejs-image.webp",
    },
    {
      name: "c#",
      imageUrl:
        "https://www.vikingsoftware.com/wp-content/uploads/2024/02/C.png",
    },
    {
      name: "Javascript",
      imageUrl:
        "https://skillforge.com/wp-content/uploads/2020/10/javascript.png",
    },
    {
      name: "Flutter",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
    },
    {
      name: "tailwind",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <svg
        className="absolute inset-0 z-0 opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.polygon
          points={generatePolygonPoints()}
          fill="#f97316" // Changed from #3B82F6 to orange-500
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.2, 0],
            points: [
              generatePolygonPoints(),
              generatePolygonPoints(),
              generatePolygonPoints(),
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Hero Section */}
      <div className="relative z-10 h-screen flex items-center hero-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center w-full relative z-20"
          >
            <motion.h1
              className="text-9x1 md:text-8xl font-extrabold mb-6 text-white font-poppins tracking-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
            >
              All the IT Solutions
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Transforming Business through Cutting-Edge Technology and
              Innovative Solutions
            </motion.p>

            <div className="flex justify-center space-x-4">
              {["Our Services", "Contact Us"].map((btn, index) => (
                <motion.button
                  key={btn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className={`
                  px-8 py-3 rounded-full transition-colors
                  ${
                    index === 0
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  }
                `}
                >
                  {btn}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto py-24 px-4 w-[80%] overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-center text-white mb-16">OUR SOLUTIONS</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div> {/* Changed from blue-600 */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Center graphic */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <Cpu className="text-white w-16 h-16" />
                </div>
                <motion.div
                  className="absolute w-full h-full top-0 rounded-full border-4 border-orange-200 opacity-70"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="absolute w-full h-full top-0 rounded-full border-2 border-orange-200 opacity-50"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>

          {/* Service 1 - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-xl shadow-lg md:text-right md:pr-16 relative z-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="mb-6 inline-block p-4 rounded-full bg-orange-100" // Changed from blue-100
            >
              <Eye className="w-10 h-10 text-orange-600" /> {/* Changed from blue-600 */}
            </motion.div>
            <div className="flex flex-col md:items-end">
              <div className="flex items-center md:flex-row-reverse mb-4">
                <span className="text-orange-600 font-bold text-3xl mx-3"> {/* Changed from blue-600 */}
                  01
                </span>
                <h3 className="text-2xl font-bold">Visioning</h3>
              </div>
              <p className="text-gray-600 max-w-md md:ml-auto">
                Sensing, collecting data, optimizing, analysis. We provide
                comprehensive visualization solutions for your business
                intelligence needs.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 w-16 h-2 bg-gradient-to-r from-orange-600 to-transparent transform translate-x-8 -translate-y-1/2"></div> {/* Changed from blue-600 */}
          </motion.div>

          {/* Service 2 - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg md:text-left md:pl-16 relative z-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              className="mb-6 inline-block p-4 rounded-full bg-gray-100"
            >
              <Brain className="w-10 h-10 text-gray-700" />
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-gray-700 font-bold text-3xl mx-3">
                  02
                </span>
                <h3 className="text-2xl font-bold">Thinking</h3>
              </div>
              <p className="text-gray-600 max-w-md">
                Predictions, analysis, cognitive processing. Our advanced
                analytics solutions help you make data-driven decisions.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 left-0 w-16 h-2 bg-gradient-to-l from-gray-600 to-transparent transform -translate-x-8 -translate-y-1/2"></div>
          </motion.div>

          {/* Service 3 - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg md:text-right md:pr-16 relative z-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="mb-6 inline-block p-4 rounded-full bg-orange-100" // Changed from purple-100
            >
              <Sparkles className="w-10 h-10 text-orange-600" /> {/* Changed from purple-600 */}
            </motion.div>
            <div className="flex flex-col md:items-end">
              <div className="flex items-center md:flex-row-reverse mb-4">
                <span className="text-orange-600 font-bold text-3xl mx-3"> {/* Changed from purple-600 */}
                  03
                </span>
                <h3 className="text-2xl font-bold">Creating</h3>
              </div>
              <p className="text-gray-600 max-w-md md:ml-auto">
                Generating art, videos, music, and more. Our creative solutions
                bring your ideas to life with cutting-edge technology.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 w-16 h-2 bg-gradient-to-r from-orange-600 to-transparent transform translate-x-8 -translate-y-1/2"></div> {/* Changed from purple-600 */}
          </motion.div>

          {/* Service 4 - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg md:text-left md:pl-16 relative z-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              className="mb-6 inline-block p-4 rounded-full bg-orange-100" // Changed from blue-100
            >
              <Zap className="w-10 h-10 text-orange-600" /> {/* Changed from blue-600 */}
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-orange-600 font-bold text-3xl mx-3"> {/* Changed from blue-600 */}
                  04
                </span>
                <h3 className="text-2xl font-bold">Automating</h3>
              </div>
              <p className="text-gray-600 max-w-md">
                Automating and accelerating world processes. Our automation
                solutions streamline your workflows and boost productivity.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 left-0 w-16 h-2 bg-gradient-to-l from-orange-600 to-transparent transform -translate-x-8 -translate-y-1/2"></div> {/* Changed from blue-600 */}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack - Updated to match image */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-16 w-[85%] mx-auto rounded-3xl"
      >
        <div className="container mx-auto px-4 w-[95%] mx-auto">
          <div className="text-4xl font-bold text-center mb-12">
            <h2 className="text-5xl font-extrabold text-center mb-16">
              TECH STACK
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-24 h-24 grayscale hover:grayscale-0 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                {/* For demonstration we're using placeholder images that would represent your tech logos */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={tech.imageUrl}
                    alt={`${tech.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback in case images are missing during development
                      e.target.onerror = null;
                      // e.target.src = "/api/placeholder/100/100";
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
