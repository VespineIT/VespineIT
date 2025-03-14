import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Vespine IT</h3>
          <p className="text-sm text-gray-400 mb-4">
            Driving digital transformation through cutting-edge technology and innovative solutions.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-500 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services/cloud" className="text-gray-300 hover:text-white transition-colors">
                Cloud Computing
              </Link>
            </li>
            <li>
              <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link href="/services/ai" className="text-gray-300 hover:text-white transition-colors">
                AI Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/development" className="text-gray-300 hover:text-white transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" className="text-gray-300 hover:text-white transition-colors">
                IT Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-blue-400" />
              <a 
                href="mailto:contact@techinnovate.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                info@vespineit.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-green-400" />
              <a 
                href="tel:+1-555-123-4567" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-red-400" />
              <span className="text-gray-300">
                123 Tech Lane, 
                Innovation City, 
                ST 12345
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Vespine IT. All Rights Reserved.
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;