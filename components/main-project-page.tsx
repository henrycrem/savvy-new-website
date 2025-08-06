"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  area: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  timeline: string;
  category: string;
  reverse?: boolean;
}



const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  location,
  area,
  duration,
  imageSrc,
  imageAlt,
  timeline,
  category,
  reverse = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20  ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          {/* Tags */}
          <div className="absolute bottom-6 left-6 flex gap-3">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              {timeline}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex-1 text-gray-800">
        <motion.h3
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-6 text-blue-900"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-600">Location : {location}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-gray-600">Total Area : {area}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-600">Duration : {duration}</span>
          </div>
        </motion.div>

        {/* Learn More Button */}
        <motion.button
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="text-orange-500 font-semibold flex items-center gap-2 group text-lg"
        >
          Learn more
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Smart Police Booth",
      description: "A state-of-the-art police security booth designed for strategic checkpoints across Liberia. This modern structure features integrated CCTV surveillance systems, climate control with AC units, secure communication equipment, and durable construction to withstand various weather conditions while providing a comfortable workspace for law enforcement officers.",
      location: "Nationwide, Liberia",
      area: "25 square meters",
      duration: "2 months",
      imageSrc: "/images/police-boot.webp",
      imageAlt: "Smart Police Booth - Modern security checkpoint facility",
      timeline: "2024",
      category: "Public Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-orange-500"></div>
              <span className="text-orange-500 font-medium">Recent Projects</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 mb-4">
              Our <span className="text-orange-500">Completed</span> Projects
            </h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Showcasing our commitment to excellence in construction and infrastructure development across Liberia
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-20">
        {/* Project Cards */}
        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        {/* Project Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-12 shadow-lg max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Project Features</h3>
            <p className="text-gray-600 text-lg">Advanced security infrastructure designed for modern policing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                ),
                title: "CCTV Surveillance",
                description: "High-definition security cameras for 24/7 monitoring"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Climate Control",
                description: "Air conditioning system for officer comfort"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                title: "Communication Hub",
                description: "Secure communication equipment and systems"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Weather Resistant",
                description: "Durable construction for all weather conditions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-blue-900 font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="space-y-4 mb-8">
            <h3 className="text-3xl font-bold text-blue-900">Ready to Start Your Project?</h3>
            <p className="text-gray-600 text-lg">Let's build something amazing together</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg"
            >
              <Link href="/contact">Start Your Project</Link>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-900 hover:bg-blue-900 hover:text-white text-blue-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              <Link href="/about">Learn More About Us</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;