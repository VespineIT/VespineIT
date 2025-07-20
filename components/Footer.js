import Link from "next/link";
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 w-[85%] mx-auto rounded-3xl px-6 my-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Vespine IT</h3>
          <p className="text-sm text-gray-400 mb-4">
            Driving digital transformation through cutting-edge technology and
            innovative solutions.
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={24} />
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
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-gray-300 hover:text-white transition-colors"
              >
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
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Mobile Development
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Cloud Computing
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                AI Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
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
                services@vespineit.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-green-400" />
              <a
                href="tel:+94-78-758-6563"
                className="text-gray-300 hover:text-white transition-colors"
              >
              +94 78 758 6563
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-red-400" />
              <span className="text-gray-300">
                Negombo Road, Narammala, Sri Lanka
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
