import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Action Nav Button (Mobile) */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-orange-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-700 transition-all duration-300"
      >
        <Menu size={24} />
      </button>

      {/* Desktop Floating Side Nav */}
      <div className={`hidden md:block fixed left-8 top-1/2 transform -translate-y-1/2 z-40 ${scrolled ? 'opacity-100' : 'opacity-80 hover:opacity-100'} transition-all duration-300`}>
        <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 shadow-lg">
          <div className="flex flex-col space-y-4 py-2">
            {[
              { name: "Home", href: "/", icon: "○" },
              { name: "About", href: "/about", icon: "○" },
              { name: "Services", href: "/services", icon: "○" },
              { name: "Careers", href: "/careers", icon: "○" },
              { name: "Products", href: "/products", icon: "○" }
            ].map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${activeSection === item.name.toLowerCase() ? 'bg-orange-600 text-white' : 'bg-white/20 text-orange-600 hover:bg-orange-100'} transition-all duration-300`}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                >
                  <span>{item.icon}</span>
                </Link>
                <span className="absolute left-14 top-2 bg-orange-600 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sm whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
            <div className="relative group">
              <Link 
                href="/contact" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 text-white shadow-md hover:bg-orange-700 transition-all duration-300"
              >
                <ChevronRight size={18} />
              </Link>
              <span className="absolute left-14 top-2 bg-orange-600 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sm whitespace-nowrap">
                Let's Talk
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Brand Bar */}
      <div className={`w-full fixed top-0 z-30 transition-all duration-300 ${scrolled ? 'py-2 bg-grey/80 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-14 h-14 relative">
                <Image
                  src="/images/vespine.png" // Make sure to add your logo file in the public folder
                  alt="Vespine IT Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className={`font-bold text-xl ${scrolled ? 'text-orange-600' : 'text-white'}`}>Vespine IT</h1>
            </Link>
            
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300 flex items-center">
                  Let's Talk
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-orange-900/95 backdrop-blur-lg transition-all duration-500 flex flex-col justify-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col items-center justify-center space-y-8 px-6 py-8">
          <Link href="/" className="flex items-center mb-12">
            <div className="w-16 h-16 relative mr-4">
              <Image
                src="/images/vespine.png" // Make sure to add your logo file in the public folder
                alt="Vespine IT Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-white text-3xl font-bold">Vespine IT</h1>
          </Link>
          
          <div className="w-full max-w-md flex flex-col space-y-6">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Careers", href: "/careers" },
              { name: "Products", href: "/products" },
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-white text-2xl font-medium border-b border-orange-700/50 pb-2 flex justify-between items-center group hover:text-orange-200 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <ChevronRight 
                  size={20} 
                  className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                />
              </Link>
            ))}
            
            <Link 
              href="/contact" 
              className="mt-8 block"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-xl mt-4 hover:bg-orange-50 transition-all duration-300 flex justify-center items-center">
                Let's Talk
                <ChevronRight size={20} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;