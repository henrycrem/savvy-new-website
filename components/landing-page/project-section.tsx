"use client"

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
  category
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto"
    >
      {/* Image Section */}
      <div className="flex-1 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <div className="relative h-[350px] lg:h-[450px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
      <div className="flex-1 text-white">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed mb-6"
        >
          {description}
        </motion.p>

        {/* Basic Project Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 mb-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-300">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-300">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-300">{area}</span>
          </div>
        </motion.div>

        {/* Learn More Button */}
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="text-orange-500 font-semibold flex items-center gap-2 group text-lg"
        >
          View Project Details
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

const FeaturedProject: React.FC = () => {
  const project = {
    title: "Smart Police Booth",
    description: "Modern security infrastructure designed for strategic checkpoints across Liberia, featuring integrated CCTV surveillance, climate control, and secure communication systems.",
    location: "Liberia",
    area: "25m²",
    duration: "2 months",
    imageSrc: "/images/police-boot.jpg",
    imageAlt: "Smart Police Booth - Modern security checkpoint facility",
    timeline: "2024",
    category: "Public Infrastructure"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-orange-500"></div>
            <span className="text-orange-500 font-medium">Featured Project</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Our Latest <span className="text-orange-500">Completed</span> Work
          </h2>
        </motion.div>

        {/* Project Card */}
        <ProjectCard {...project} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            <Link href="/projects">
            View All Projects
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;