import React, { useState } from 'react';
import { Briefcase, Code, ShieldCheck, CloudCog, Search, Filter } from 'lucide-react';

const jobCategories = [
  { 
    name: 'Software Development', 
    icon: <Code className="text-blue-500" size={32} />,
    openPositions: 12
  },
  { 
    name: 'Cybersecurity', 
    icon: <ShieldCheck className="text-green-500" size={32} />,
    openPositions: 5
  },
  { 
    name: 'Cloud Solutions', 
    icon: <CloudCog className="text-purple-500" size={32} />,
    openPositions: 8
  },
  { 
    name: 'IT Consulting', 
    icon: <Briefcase className="text-orange-500" size={32} />,
    openPositions: 6
  }
];

const jobOpenings = [
  {
    title: 'Senior Software Engineer',
    category: 'Software Development',
    location: 'Remote',
    type: 'Full-time',
    experience: '5-7 years'
  },
  {
    title: 'Cloud Security Specialist',
    category: 'Cybersecurity',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3-5 years'
  },
  {
    title: 'DevOps Engineer',
    category: 'Cloud Solutions',
    location: 'On-site',
    type: 'Full-time',
    experience: '4-6 years'
  },
  {
    title: 'IT Consultant',
    category: 'IT Consulting',
    location: 'Remote',
    type: 'Contract',
    experience: '2-4 years'
  }
];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredJobs = jobOpenings.filter(job => 
    (selectedCategory ? job.category === selectedCategory : true) &&
    (searchTerm ? 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.category.toLowerCase().includes(searchTerm.toLowerCase())
    : true)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-gray-900 text-white p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Join TechInnovate Solutions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology. 
            We're always looking for talented professionals who are passionate about innovation.
          </p>
        </div>

        {/* Job Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Explore Our Career Paths</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <div 
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`
                  border-2 rounded-lg p-6 text-center cursor-pointer transition-all duration-300
                  ${selectedCategory === category.name 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}
                `}
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.openPositions} Open Positions</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Search */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <div className="relative w-full max-w-md">
              <input 
                type="text" 
                placeholder="Search jobs by title or category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
            </div>
            {selectedCategory && (
              <button 
                onClick={() => setSelectedCategory('')}
                className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            {filteredJobs.length} Open Positions
          </h2>
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{job.location}</p>
                    <p className="text-sm text-gray-500">{job.type}</p>
                    <p className="text-sm text-gray-500">Experience: {job.experience}</p>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Don't See the Perfect Role?</h2>
          <p className="text-xl mb-6">
            We're always looking for exceptional talent. Send us your resume and we'll keep it on file.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Open Application
          </button>
        </div>
      </div>
    </div>
  );
}