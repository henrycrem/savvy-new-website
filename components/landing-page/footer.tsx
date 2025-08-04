"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  // State to track logo loading errors
  const [logoError, setLogoError] = useState(false);
  // Ref to access the logo image element
  const logoRef = useRef<HTMLImageElement>(null);
  // State for dynamic year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update year dynamically
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Check if logo image exists on component mount and set up event listeners
  useEffect(() => {
    const checkLogo = () => {
      if (logoRef.current && logoRef.current.complete) {
        // If image was already loaded (e.g., from cache) but failed
        if (logoRef.current.naturalWidth === 0) {
          setLogoError(true);
        }
      }
    };

    // Check immediately if the image is already loaded
    checkLogo();

    // Add event listeners for load and error
    const imgElement = logoRef.current;
    if (imgElement) {
      const handleLoad = () => setLogoError(false);
      const handleError = () => setLogoError(true);

      imgElement.addEventListener('load', handleLoad);
      imgElement.addEventListener('error', handleError);

      // Cleanup
      return () => {
        imgElement.removeEventListener('load', handleLoad);
        imgElement.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top section with CTA */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-orange-500">Connect</span> there
          </h2>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                {/* Use image with fallback to S text */}
                {!logoError ? (
                  <img
                    ref={logoRef}
                    src="/images/savvy_logo.jpeg" // Replace 'logo.png' with your actual image filename
                    alt="Savvy Group Logo"
                    className="w-full h-full object-contain rounded-full"
                    onError={() => setLogoError(true)} // Handle error if image fails to load
                  />
                ) : (
                  <span className="text-white font-bold text-xl">S</span>
                )}
              </div>
              <h3 className="text-2xl font-bold">Savvy Group</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering businesses with innovative solutions across multiple industries. 
              We deliver excellence through our comprehensive range of professional services.
            </p>
            
            {/* Social media icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">(+231) 886-445-092</p>
              </div>
              <div>
                <p className="text-gray-300">info@savvygroup.com</p>
              </div>
              <div>
                <p className="text-gray-300">
                  5th Street Sinkor,<br />
                  Monrovia, Liberia
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get the latest information</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-300 mb-4 md:mb-0">
              Copyright © {currentYear} Savvy Group. All Rights Reserved.
            </p>
            
            {/* Company Credit - Your Development Company */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  User Terms & Conditions
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  Privacy Policy
                </a>
              </div>
              
              {/* Your company credit */}
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>Designed and Developed by</span>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 font-semibold transition-colors duration-300 cursor-pointer flex items-center space-x-1"
                >
                  <Heart className="w-3 h-3 text-red-400" />
                  <span>Deft Technology Consultancy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us button (floating) */}
      <div className="absolute top-8 right-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Contact Us
        </button>
      </div>
    </footer>
  );
}

export default Footer