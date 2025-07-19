import React, { useState, useEffect } from 'react';
import { Briefcase, Code, ShieldCheck, CloudCog, Search, MapPin, Clock, ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import careerData from '../data/careerData.json';

const iconComponents = {
  Briefcase: Briefcase,
  Code: Code,
  ShieldCheck: ShieldCheck,
  CloudCog: CloudCog
};

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Load data
    setJobs(careerData.jobOpenings);
    setTeamMembers(careerData.teamMembers);
    setFilteredJobs(careerData.jobOpenings);

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

  useEffect(() => {
    // Filter jobs based on search term
    const results = jobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredJobs(results);
  }, [searchTerm, jobs]);

  // Get icon component based on iconType
  const getIcon = (iconType) => {
    const IconComponent = iconComponents[iconType];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  // Get color for category
  const getCategoryColor = (color) => {
    const colorMap = {
      blue: '#3b82f6',
      purple: '#8b5cf6',
      green: '#10b981',
      orange: '#f97316',
      pink: '#ec4899'
    };
    return colorMap[color] || '#64748b';
  };

  return (
    <div className="min-h-screen overflow-hidden relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 -top-20">
          <img 
            src="/images/background/about-bg.jpg" 
            alt="VespineIT Careers Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient overlay for enhanced effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border border-orange-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold mb-4 sm:mb-6 text-white font-poppins tracking-tight drop-shadow-2xl leading-tight">
              Join Our Team
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto text-gray-300 px-4 leading-relaxed">
              Build your career with us and be part of something extraordinary
            </p>

            <div className="animate-bounce inline-flex items-center text-orange-500">
              <span className="mr-2 text-sm sm:text-base">Explore Opportunities</span>
              <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Move the max-w-7xl wrapper to start after the hero section */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Team Culture Section */}
        <div className="relative z-10 pt-20">
          <div 
            className="text-center mb-16 fade-in-element"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join a team that values innovation, collaboration, and growth
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We embrace new ideas and technologies to solve complex challenges.",
                icon: "/api/placeholder/60/60",
                color: "#3b82f6" // blue
              },
              {
                title: "Work-Life Balance",
                description: "We believe in flexible schedules that accommodate your personal life.",
                icon: "/api/placeholder/60/60",
                color: "#10b981" // emerald
              },
              {
                title: "Growth Mindset",
                description: "Continuous learning and personal development are at our core.",
                icon: "/api/placeholder/60/60",
                color: "#f97316" // orange
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="fade-in-element"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`
                }}
              >
                <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-black/30 h-full border border-gray-700">
                  {/* Hover effect border */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(45deg, ${value.color}00, ${value.color}40, ${value.color}00)`,
                      borderLeft: `3px solid ${value.color}` 
                    }}
                  ></div>

                  <div className="relative p-8">
                    {/* Value Header with Icon */}
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${value.color}40, ${value.color}20)`,
                          border: `1px solid ${value.color}60` 
                        }}
                      >
                        <img src={value.icon} alt="" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-white">{value.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Job Search Section */}
        <div id="job-openings" className="relative z-10 py-24">
          <div 
            className="text-center mb-16 fade-in-element"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find your next career opportunity with us
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"></div>
          </div>
          
          {/* Search bar */}
          <div className="mb-16 max-w-xl mx-auto fade-in-element" style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for positions, departments, or locations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-4 pl-12 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-400"
              />
              <Search 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 fade-in-element" style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
              }}>
                <p className="text-gray-300 text-lg">No Any Job Vacancies Now</p>
              </div>
            ) : (
              filteredJobs.map((job, index) => {
                const categoryColor = getCategoryColor(job.categoryColor);
                return (
                  <div 
                    key={job.id} 
                    className="fade-in-element"
                    style={{
                      opacity: 0,
                      transform: 'translateY(30px)',
                      transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`
                    }}
                  >
                    <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-black/30 border border-gray-700">
                      {/* Hover effect border */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ 
                          background: `linear-gradient(45deg, ${categoryColor}00, ${categoryColor}40, ${categoryColor}00)`,
                          borderLeft: `3px solid ${categoryColor}` 
                        }}
                      ></div>

                      <div className="relative p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex-1">
                            <div 
                              className="inline-flex items-center px-4 py-1.5 text-sm rounded-full mb-4"
                              style={{ 
                                background: `${categoryColor}20`,
                                border: `1px solid ${categoryColor}60`,
                                color: categoryColor
                              }}
                            >
                              <span className="mr-2">{getIcon(job.iconType)}</span>
                              {job.category}
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">{job.title}</h3>
                            <div className="flex flex-wrap items-center text-gray-300 text-base gap-6">
                              <div className="flex items-center">
                                <Clock size={18} className="mr-2" />
                                {job.type}
                              </div>
                              <div className="flex items-center">
                                <MapPin size={18} className="mr-2" />
                                {job.location}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 md:mt-0">
                            <button 
                              className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group-hover:shadow-lg flex items-center"
                              style={{ 
                                background: `linear-gradient(to right, ${categoryColor}, ${categoryColor}CC)`,
                                color: '#fff'
                              }}
                            >
                              Apply Now
                              <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
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
              <h3 className="text-3xl font-bold text-white mb-4">Don't See the Perfect Role?</h3>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep it on file.
              </p>
              <button className="px-8 py-4 rounded-xl bg-white text-orange-600 font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Submit Open Application
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