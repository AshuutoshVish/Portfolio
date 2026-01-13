"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Code2, X, Check } from "lucide-react";
import Layout from "../HeroSection/Layout";
import { Section } from "../Section";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// Project data structure
interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  platform: string;
  impact: string;
  overview: string;
  workflowStats?: {
    totalNodes?: string;
    aiAnalysis?: string;
    database?: string;
  };
  architecture?: string[];
  workflowBreakdown?: {
    title: string;
    nodeCount?: string;
    description: string;
    features: string[];
  }[];
  technicalHighlights?: string[];
  keySkills?: string[];
  whyItMatters?: string[];
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
}

const projects: ProjectDetail[] = [
  {
    title: "Portfolio Website",
    subtitle: "Modern Portfolio • Responsive Design • Performance Optimized",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations and optimized performance.",
    image: "/assets/projectsImages/portfolio.png",
    tags: ["Next.js", "React", "TypeScript"],
    role: "Full Stack Developer",
    platform: "Next.js + React + TypeScript + Tailwind CSS",
    impact: "Modern portfolio showcasing professional work",
    overview:
      "A cutting-edge portfolio website built with Next.js and React, featuring responsive design, smooth animations, and optimized performance. The site showcases projects, skills, and professional experience with an intuitive user interface and modern design patterns. Includes interactive project modals, smooth scrolling, and mobile-first responsive design.",
    workflowStats: {
      totalNodes: "~50-60",
      aiAnalysis: "Component Architecture",
      database: "Static Site Generation",
    },
    architecture: [
      "Next.js Application",
      "└── React Components",
      "    ├── Hero Section",
      "    ├── About Me",
      "    ├── Projects Showcase",
      "    ├── Services",
      "    └── Contact Form",
    ],
    workflowBreakdown: [
      {
        title: "Component Architecture",
        nodeCount: "~20-25",
        description: "Modular React components with reusable patterns",
        features: [
          "Reusable UI components",
          "Custom hooks and utilities",
          "State management",
          "Responsive layout system",
        ],
      },
      {
        title: "Performance Optimization",
        nodeCount: "~15-20",
        description: "Optimized for fast loading and smooth interactions",
        features: [
          "Image optimization with Next.js Image",
          "Code splitting and lazy loading",
          "Static site generation (SSG)",
          "Optimized animations with Framer Motion",
        ],
      },
    ],
    technicalHighlights: [
      "Server-side rendering with Next.js",
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "SEO optimized with metadata",
      "Fast page load times",
      "Interactive project modals",
    ],
    keySkills: [
      "Next.js & React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Performance Optimization",
    ],
    whyItMatters: [
      "Demonstrates modern web development skills",
      "Shows attention to UX/UI design",
      "Highlights performance optimization techniques",
      "Showcases responsive design capabilities",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://ashutoshautomations.vercel.app/",
  },
  {
    title: "Workflow Automation",
    subtitle: "Enterprise Automation • Multi-tenant • Scalable",
    description:
      "Enterprise-grade workflow automation system with visual workflow builder, task scheduling, and multi-tenant support.",
    image: "/assets/projectsImages/workflows.png",
    tags: ["n8n", "Docker", "PostgreSQL"],
    role: "Automation Engineer",
    platform: "n8n + Docker + PostgreSQL",
    impact: "Enterprise workflow automation at scale",
    overview:
      "An enterprise-grade automation platform enabling businesses to build, schedule, and manage complex workflows. Features multi-tenant architecture, visual workflow builder, and comprehensive task scheduling.",
    techStack: ["n8n", "Docker", "PostgreSQL", "API Integration", "Cron Jobs"],
  },
  {
    title: "Stock Data Platform",
    subtitle: "Financial Data • Real-time Feeds • Analytics",
    description:
      "Financial data processing and analysis platform with real-time data feeds, historical analysis, and automated reporting.",
    image: "/assets/projectsImages/stockdata.png",
    tags: ["Python", "Django", "Celery"],
    role: "Backend Developer",
    platform: "Python + Django + Celery + PostgreSQL",
    impact: "High-volume financial data processing",
    overview:
      "A robust financial data platform handling large volumes of real-time and historical market data. Features automated data ingestion, processing pipelines, and comprehensive reporting capabilities.",
    techStack: ["Python", "Django", "Celery", "PostgreSQL", "Redis"],
  },
  {
    title: "Dashboard Analytics",
    subtitle: "Real-time Analytics • Data Visualization • Monitoring",
    description:
      "Real-time analytics dashboard with data visualization, monitoring capabilities, and comprehensive reporting.",
    image: "/assets/projectsImages/dashboard.png",
    tags: ["Python", "FastAPI", "React"],
    role: "Backend Developer",
    platform: "Python + FastAPI + PostgreSQL + React",
    impact: "Real-time data processing and visualization",
    overview:
      "A comprehensive analytics platform providing real-time insights, data visualization, and monitoring capabilities. Built with modern backend architecture for high-performance data processing and seamless frontend integration.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "React", "Chart.js"],
  },
  {
    title: "IntuitySync",
    subtitle: "Workflow Automation • API Integration • Production Scale",
    description:
      "A comprehensive workflow automation platform built with n8n, featuring complex integrations, webhook handling, and async job processing.",
    image: "/assets/projectsImages/intuitysync.png",
    tags: ["n8n", "Next.js", "Tailwind CSS", "Supabase"],
    role: "Automation Architect",
    platform: "n8n + REST APIs + Supabase",
    impact: "Production-scale automation with retry mechanisms",
    overview:
      "This project is a complete workflow automation platform built entirely in n8n. The system handles complex integrations, webhook processing, and async job management with robust error handling and retry mechanisms. Designed for production environments requiring high reliability and scalability.",
    workflowStats: {
      totalNodes: "~100-120",
      aiAnalysis: "Webhook Processing",
      database: "PostgreSQL Integration",
    },
    architecture: [
      "Frontend Application",
      "└── n8n Webhook Layer",
      "    ├── API Integration Management",
      "    ├── Async Job Processing",
      "    ├── Error Handling & Retries",
      "    └── Database Operations",
    ],
    workflowBreakdown: [
      {
        title: "Webhook Processing",
        nodeCount: "~30-40",
        description: "Handling incoming webhooks and API requests",
        features: [
          "Real-time webhook validation",
          "Request routing and processing",
          "Async job queue management",
          "Error handling and retry logic",
        ],
      },
      {
        title: "Integration Management",
        nodeCount: "~25-30",
        description: "Orchestrating multiple third-party integrations",
        features: [
          "Multi-service API coordination",
          "Data transformation pipelines",
          "Authentication management",
          "Rate limiting and throttling",
        ],
      },
    ],
    technicalHighlights: [
      "Full workflow orchestration",
      "Production-ready error handling",
      "Scalable async job processing",
      "Multi-tenant support",
    ],
    keySkills: [
      "n8n workflow architecture",
      "API orchestration",
      "Database design (PostgreSQL)",
      "Error handling & retries",
    ],
    whyItMatters: [
      "Demonstrates advanced automation for real business use",
      "Shows large-scale workflow structuring (100+ nodes)",
      "Implements production-ready automation patterns",
      "Orchestrates complex integrations seamlessly",
    ],
    techStack: ["n8n", "Node.js", "PostgreSQL", "REST APIs", "Webhooks"],
  },
  {
    title: "DataForge",
    subtitle: "ETL Pipeline • Data Processing • Integration",
    description:
      "Data processing and transformation platform with ETL capabilities, data validation, and integration with multiple data sources.",
    image: "/assets/projectsImages/dataforge.png",
    tags: ["Python", "FastAPI", "Pandas"],
    role: "Data Engineer",
    platform: "Python + FastAPI + Pandas + PostgreSQL",
    impact: "Large-scale data operations",
    overview:
      "A comprehensive data processing platform with ETL capabilities, data validation, and seamless integration with multiple data sources. Built for handling large-scale data operations with high reliability.",
    techStack: ["Python", "FastAPI", "Pandas", "PostgreSQL", "Docker"],
  },
];

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: ProjectDetail;
  index: number;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10",
        "bg-white/5 backdrop-blur-md cursor-pointer",
        "hover:border-purple-500/30 transition-all duration-300"
      )}
      onClick={onOpen}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
        </div>

        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-xs text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-2 text-purple-400 text-sm">
          <Code2 className="w-4 h-4" />
          <span>Click to view details</span>
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      
      return () => {
        // Restore scroll position when closing
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Prevent scroll on backdrop
  const handleBackdropWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  // Prevent scroll on backdrop touch
  const handleBackdropTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            onWheel={handleBackdropWheel}
            onTouchMove={handleBackdropTouchMove}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-hidden"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#09090B] border border-white/10 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrollable Content Container */}
              <div
                className="overflow-y-auto flex-1 p-6 md:p-8 lg:p-12"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-20"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-4">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-sm text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Details Box */}
                <div className="grid md:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Role</p>
                    <p className="text-white font-semibold">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Platform</p>
                    <p className="text-white font-semibold">{project.platform}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Impact</p>
                    <p className="text-purple-400 font-semibold">{project.impact}</p>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Project <span className="text-purple-400">Overview</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.overview}</p>
              </div>

              {/* Workflow Stats */}
              {project.workflowStats && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Workflow <span className="text-purple-400">Scale & Architecture</span>
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {project.workflowStats.totalNodes && (
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">Total Nodes</p>
                        <p className="text-2xl font-bold text-white">
                          {project.workflowStats.totalNodes}
                        </p>
                      </div>
                    )}
                    {project.workflowStats.aiAnalysis && (
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">AI Analysis</p>
                        <p className="text-white font-semibold">
                          {project.workflowStats.aiAnalysis}
                        </p>
                      </div>
                    )}
                    {project.workflowStats.database && (
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">Database</p>
                        <p className="text-white font-semibold">
                          {project.workflowStats.database}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Architecture */}
                  {project.architecture && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        High-Level Architecture
                      </h4>
                      <div className="space-y-1 font-mono text-sm text-gray-300">
                        {project.architecture.map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Workflow Breakdown */}
              {project.workflowBreakdown && project.workflowBreakdown.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Detailed Workflow <span className="text-purple-400">Breakdown</span>
                  </h3>
                  <div className="space-y-6">
                    {project.workflowBreakdown.map((workflow, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white">
                            {workflow.title}
                          </h4>
                          {workflow.nodeCount && (
                            <span className="text-purple-400 font-semibold">
                              {workflow.nodeCount}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-4">{workflow.description}</p>
                        <ul className="space-y-2">
                          {workflow.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Technical <span className="text-purple-400">Highlights</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.technicalHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg p-3"
                      >
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Skills */}
              {project.keySkills && project.keySkills.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Key Skills <span className="text-purple-400">Demonstrated</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.keySkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Why It Matters */}
              {project.whyItMatters && project.whyItMatters.length > 0 && (
                <div className="pb-4">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Why This Project <span className="text-purple-400">Matters</span>
                  </h3>
                  <div className="space-y-3">
                    {project.whyItMatters.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Section id="projects">
        <div className="relative w-full overflow-hidden py-20">
          <div className="relative z-10 mx-auto px-4">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-[#8b8bff] font-medium text-sm mb-2 mt-5">Projects</p>
              <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Featured</span>{" "}
                <span className="text-gray-300 font-semibold">Projects</span>
                <br />
                <span className="text-white">Built for</span>{" "}
                <span className="text-gray-400 font-semibold">
                  production environments
                </span>
              </h1>
              <p className="mt-4 text-[#cfcfcf] text-base md:text-lg max-w-2xl mx-auto">
                Explore my portfolio of backend systems, automation workflows, and AI
                solutions that solve real-world problems at scale.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpen={() => handleOpenProject(project)}
                />
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-4 backdrop-blur-md">
                <Code2 className="w-5 h-5 text-purple-400" />
                <p className="text-gray-300">
                  More projects coming soon.{" "}
                  <button
                    onClick={() => {
                      const section = document.getElementById("contact");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    Let's discuss your project
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Section>
    </Layout>
  );
}
