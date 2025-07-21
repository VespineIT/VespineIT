import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messageAbout: '',
    buildPlan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("1Jt5AKKIYQdICq3G3"); // Replace with your EmailJS public key
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.messageAbout || !formData.buildPlan) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message_about: formData.messageAbout,
        message: formData.buildPlan,
        
      };

      const response = await emailjs.send(
        'service_m90upoo',    // Replace with your EmailJS service ID
        'template_fi9ebsg',   // Replace with your EmailJS template ID
        templateParams
      );

      if (response.status === 200) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          messageAbout: '',
          buildPlan: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="relative z-10 h-[50vh] flex items-center">
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
                Contact Us
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We are here to help you with your digital transformation journey. Reach out to us for any inquiries or project discussions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="animate-bounce inline-flex items-center text-orange-500"
              >
                <span className="mr-2 text-orange">Explore Below</span>
                <ChevronDownIcon className="w-5 h-5 text-orange" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mb-12 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-4">Let's Talk.</h1>
          <p className="text-gray-300 mb-2">
            We have built more than 100 digital products for businesses and
            governments.
          </p>
          <p className="text-gray-300 mb-6">
            Call us or book a meeting to talk about how you can grow your
            business with technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <span className="mr-2">+94 78 758 6563</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative z-10 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

          <p className="text-gray-300 mb-2">
            You can send us a message here about what you are planning to build.
          </p>
          <p className="text-gray-300 mb-8">
            Alternatively you can send us a mail at{" "}
            <a
              href="mailto:services@vespineit.com"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              services@vespineit.com
            </a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-200">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className="w-full p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-200">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="w-full p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="phone" className="block mb-2 font-medium text-gray-200">
                  Phone <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  className="w-full p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="messageAbout" className="block mb-2 font-medium text-gray-200">
                What is your message about? *
              </label>
              <div className="relative">
                <select
                  id="messageAbout"
                  name="messageAbout"
                  value={formData.messageAbout}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors appearance-none"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="project">New Project</option>
                  <option value="support">Support</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="buildPlan" className="block mb-2 font-medium text-gray-200">
                What are you planning to build? *
              </label>
              <textarea
                id="buildPlan"
                name="buildPlan"
                value={formData.buildPlan}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
