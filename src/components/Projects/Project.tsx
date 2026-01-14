"use client";

import { motion } from "framer-motion";
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
    title: "IntuitySync",
    subtitle: "AI Automation SaaS • Multi-Tenant • Production Scale",
    description:
      "Production-grade AI-powered automation platform enabling agencies and businesses to automate content workflows, approvals, publishing, and analytics.",
    image: "/assets/projectsImages/intuitysync.png",
    tags: ["n8n", "Supabase", "LLMs", "OpenAI", "Stripe", "Webhooks", "GraphQL", "Content Generation"],
    role: "Automation Engineer / Backend Engineer",
    platform: "n8n + Python + Supabase + OpenAI + Stripe + Docker",
    impact: "200+ workflows • 70% automation efficiency • SaaS production system",
    overview:
      "IntuitySync is a multi-tenant AI automation SaaS used by agencies and teams to automate content creation, approvals, publishing, analytics, and client workflows. I designed and maintained 200+ production n8n workflows handling webhook orchestration, batching, retries, async execution, OAuth token refresh, and credit tracking logic. The platform integrates OpenAI for content generation, Supabase for authentication and storage, Stripe for billing, and multiple social APIs.",
    workflowStats: {
      totalNodes: "200+ workflows",
      aiAnalysis: "AI Content Generation & Agents",
      database: "Supabase (PostgreSQL)",
    },
    technicalHighlights: [
      "Webhook-driven workflow orchestration",
      "Async execution with retries and error workflows",
      "OAuth token refresh handling",
      "Multi-tenant RBAC automation logic",
      "Credit-based usage tracking",
      "High-volume batch processing",
    ],
    keySkills: [
      "n8n workflow architecture",
      "Automation reliability engineering",
      "API orchestration",
      "Async pipelines",
      "OAuth integrations",
      "SaaS automation design",
    ],
    whyItMatters: [
      "Demonstrates real production automation at scale",
      "Shows reliability engineering and fault tolerance",
      "Proves SaaS multi-tenant automation design",
      "Highlights AI + automation integration",
    ],
    techStack: [
      "n8n",
      "Python",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
      "Docker",
      "REST APIs",
    ],
  },

  {
    title: "HRMS Backend Platform",
    subtitle: "Multi-Tenant APIs • Employee Management • Slack Automation • Payroll System",
    description:
      "Enterprise-grade HR management backend with secure multi-tenant architecture, RBAC, payroll automation, and Slack-driven workflows.",
    image: "/assets/projectsImages/hrms.png",
    tags: ["Python", "Django", "DRF", "MySQL", "JWT", "Slack API", "TiDB", "Git"],
    role: "Backend Engineer / API Architect",
    platform: "Django + DRF + MySQL + Docker",
    impact: "Enterprise-ready HR automation platform",
    overview:
      "A production-ready HRMS backend supporting multiple organizations with strict data isolation, JWT authentication, RBAC roles, attendance tracking, leave workflows, payroll generation, and document management. Integrated Slack bots for approvals and notifications, automated payslip emails, secure file uploads, and role-based access control for Admin, HR, Manager, and Employee roles.",

    workflowStats: {
      totalNodes: "15+ core modules",
      aiAnalysis: "Slack Automation & Workflow Orchestration",
      database: "MySQL / TiDB",
    },

    architecture: [
      "Client Applications (Web / Slack)",
      "└── Django REST API Layer",
      "    ├── Authentication (JWT, RBAC)",
      "    ├── Organization & User Management",
      "    ├── Attendance & Leave Workflows",
      "    ├── Payroll & Payslip Generation",
      "    ├── Notification Services (Slack, Email)",
      "    └── Storage & Media Services (Cloudinary)",
    ],

    workflowBreakdown: [
      {
        title: "Authentication & Multi-Tenant Isolation",
        nodeCount: "6–8 modules",
        description:
          "Ensures secure authentication, role-based access control, and strict organization-level data isolation.",
        features: [
          "JWT authentication with refresh tokens",
          "Role-based permissions (Admin, HR, Manager, Employee)",
          "Organization-level data segregation",
          "Secure API validation and throttling",
        ],
      },
      {
        title: "Attendance, Leave & Payroll Automation",
        nodeCount: "5–7 modules",
        description:
          "Automates attendance tracking, leave approval workflows, and payroll generation.",
        features: [
          "Attendance tracking with timezone awareness",
          "Multi-level leave approval workflows",
          "Automated payroll and payslip generation",
          "Scheduled payroll notifications",
        ],
      },
      {
        title: "Slack & Notification Integrations",
        nodeCount: "4–6 modules",
        description:
          "Enables real-time approvals, alerts, and notifications directly inside Slack.",
        features: [
          "Interactive Slack approval workflows",
          "Automated reminders and alerts",
          "Webhook-driven event notifications",
          "Per-organization Slack bot configuration",
        ],
      },
    ],

    technicalHighlights: [
      "Multi-tenant data isolation architecture",
      "JWT authentication with role-based access control",
      "Slack interactive workflows and bots",
      "Automated payroll processing and notifications",
      "Secure document upload pipelines",
      "API-first architecture with Swagger and Redoc",
      "Timezone-aware scheduling and workflows",
    ],

    keySkills: [
      "Backend system architecture",
      "Django REST APIs",
      "Authentication & security engineering",
      "Workflow automation",
      "System integrations",
      "Enterprise application design",
    ],

    whyItMatters: [
      "Demonstrates enterprise backend engineering capabilities",
      "Shows secure multi-tenant architecture design",
      "Highlights real-world workflow automation",
      "Proves reliability and maintainability mindset",
    ],

    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL / TiDB",
      "JWT (SimpleJWT)",
      "Slack SDK",
      "Cloudinary",
      "SendinBlue",
      "Docker",
    ],
  },

  {
    title: "Stock Hub Data Analytics Platform",
    subtitle: "BigQuery • Stock Market Data Analytics • Financial Dashboards",
    description:
      "Full-stack platform for querying, insighting, analyzing, and exporting historical stock market data with optimized batch processing.",
    image: "/assets/projectsImages/stockdata.png",
    tags: ["Python", "FastAPI", "BigQuery", "Pandas", "React", "TypeScript"],
    role: "Full Stack / Backend Engineer",
    platform: "FastAPI + BigQuery + Pandas + React + TypeScript",
    impact: "60–70% query optimization • Scalable analytics",
    overview:
      "Built a scalable analytics platform for processing historical stock market data with multi-ticker batch queries, optimized BigQuery pipelines, vectorized Pandas processing, and automated Excel exports to Google Drive. The system supports index/sector filtering, dynamic time ranges, batch execution for hundreds of tickers, and delivers low-latency analytics for investment research and reporting.",

    workflowStats: {
      totalNodes: "~40–50 processing steps",
      aiAnalysis: "Batch Analytics & Vectorized Processing",
      database: "Google BigQuery (Columnar Warehouse)",
    },

    architecture: [
      "React Frontend (Vite + Tailwind + Recharts)",
      "└── REST API Layer (FastAPI + Gunicorn)",
      "    ├── Batch Query Engine (Parameterized SQL)",
      "    ├── Pandas Vectorized Analytics Layer",
      "    ├── BigQuery Data Warehouse",
      "    ├── Google Drive Export Service",
      "    └── Caching & Reference Data Layer",
    ],

    workflowBreakdown: [
      {
        title: "Batch Query Orchestration",
        nodeCount: "~15–20 steps",
        description:
          "Executes optimized batch queries against BigQuery to fetch multi-ticker historical datasets efficiently.",
        features: [
          "Parameterized SQL generation",
          "Multi-ticker batching strategy",
          "Partition-aware querying",
          "Query cost optimization",
          "Result pagination handling",
        ],
      },
      {
        title: "Analytics & Data Processing",
        nodeCount: "~10–15 steps",
        description:
          "Transforms raw market data into analytical metrics using vectorized Pandas operations.",
        features: [
          "CAGR and multi-period return calculations",
          "Monthly / quarterly / yearly aggregations",
          "Rolling metrics computation",
          "Vectorized transformations (no loops)",
          "Memory-efficient dataframe handling",
        ],
      },
      {
        title: "Export & Reporting Pipeline",
        nodeCount: "~8–12 steps",
        description:
          "Generates structured Excel reports and uploads them automatically to Google Drive.",
        features: [
          "Dynamic Excel sheet generation",
          "Formatting and multi-sheet exports",
          "Google Drive API integration",
          "Automated folder organization",
          "Download link generation",
        ],
      },
    ],

    technicalHighlights: [
      "Optimized BigQuery batch queries (~60–70% faster)",
      "Vectorized Pandas analytics for high throughput",
      "Multi-ticker parallel processing architecture",
      "Secure service-account authentication",
      "Robust error handling and retries",
      "Automated cloud-based report exports",
      "Scalable REST API design",
    ],

    keySkills: [
      "Data engineering",
      "Query optimization",
      "Backend API design",
      "Cloud data warehousing",
      "Batch processing pipelines",
      "Performance engineering",
    ],

    whyItMatters: [
      "Demonstrates real-world data engineering at scale",
      "Shows measurable performance optimization impact",
      "Proves ability to design production analytics pipelines",
      "Highlights cloud-native backend architecture skills",
      "Strong signal for backend / data / analytics roles",
    ],

    techStack: [
      "Python",
      "Flask",
      "BigQuery",
      "Pandas",
      "Google Drive API",
      "React",
      "Gunicorn",
      "Service Accounts",
    ],
  },
  
  {
    title: "OpenEvals",
    subtitle: "LLM Evaluation • LLM-as-Judge • AI Quality Platform",
    description:
      "Web platform for automated evaluation of LLM outputs using structured scoring and feedback pipelines.",
    image: "/assets/projectsImages/openevals.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "LangChain"],
    role: "Full Stack Engineer",
    platform: "Next.js + OpenAI + LangChain",
    impact: "Automated AI quality evaluation at scale",
    overview:
      "OpenEvals is a production-ready LLM evaluation platform that automates correctness and conciseness scoring using the LLM-as-Judge methodology. The system supports concurrent batch evaluations, structured rubric-based scoring, explainable feedback generation, and secure server-side API orchestration. Designed for reliability, extensibility, and high-throughput evaluation workflows.",

    workflowStats: {
      totalNodes: "~25–35 evaluation stages",
      aiAnalysis: "LLM-as-Judge Scoring Pipelines",
      database: "Stateless APIs + In-Memory Processing",
    },

    architecture: [
      "Next.js Frontend (React 19 + Tailwind)",
      "└── API Route Handlers (Serverless)",
      "    ├── Request Validation Layer",
      "    ├── Prompt Orchestration Engine",
      "    ├── OpenAI Judge Invocation",
      "    ├── Structured Scoring Parser",
      "    ├── Feedback Normalization",
      "    └── Concurrent Execution Engine",
    ],

    workflowBreakdown: [
      {
        title: "Evaluation Request Orchestration",
        nodeCount: "~8–10 steps",
        description:
          "Handles validation, batching, and orchestration of evaluation requests.",
        features: [
          "Input schema validation",
          "Batch request normalization",
          "Rate-limit safe dispatch",
          "Async request scheduling",
          "Error handling and retries",
        ],
      },
      {
        title: "LLM-as-Judge Scoring Pipeline",
        nodeCount: "~10–12 steps",
        description:
          "Executes rubric-based scoring using OpenAI models and parses structured outputs.",
        features: [
          "Rubric-driven prompt construction",
          "Deterministic JSON schema outputs",
          "Score normalization",
          "Confidence calibration",
          "Explainable feedback extraction",
        ],
      },
      {
        title: "Concurrency & Reliability Layer",
        nodeCount: "~6–8 steps",
        description:
          "Ensures scalable execution with safe parallelism and graceful failure handling.",
        features: [
          "Parallel request execution",
          "Timeout safeguards",
          "Partial failure isolation",
          "Structured error reporting",
          "Request tracing",
        ],
      },
    ],

    technicalHighlights: [
      "LLM-as-Judge evaluation pipelines",
      "Rubric-based structured scoring",
      "Concurrent request execution",
      "Strict JSON schema validation",
      "Secure server-side API key handling",
      "Extensible evaluator architecture",
      "Production-grade error handling",
    ],

    keySkills: [
      "LLM systems engineering",
      "Prompt orchestration",
      "API architecture",
      "Asynchronous processing",
      "Reliability engineering",
      "AI evaluation pipelines",
    ],

    whyItMatters: [
      "Demonstrates real-world AI system design",
      "Shows ability to build reliable LLM pipelines",
      "Highlights scalable API architecture",
      "Proves production mindset for AI workloads",
      "Strong signal for AI / Backend roles",
    ],

    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "LangChain",
      "Tailwind CSS",
      "Serverless Functions",
      "Zod Validation",
    ],
  }
  ,

  {
    title: "Portfolio Website",
    subtitle: "Modern UI • Responsive • Performance Optimized • SEO Optimized",
    description:
      "A modern portfolio website showcasing projects, skills, and professional experience with smooth animations and optimized performance.",
    image: "/assets/projectsImages/portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    role: "Full Stack Developer",
    platform: "Next.js + React + TypeScript + Tailwind CSS",
    impact: "Personal branding and showcase platform",
    overview:
      "A modern portfolio built with Next.js featuring responsive layouts, smooth animations, SEO optimization, and clean UI architecture. The website is hosted on Vercel and is optimized for performance and SEO.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    demoLink: "https://ashutoshautomations.vercel.app/",
  },

  {
    title: "Workflow Automation (n8n)",
    subtitle: "Enterprise Automation • Multi-Tenant • High-Volume Pipelines • Webhook-driven • Scheduled Jobs • Retry & Error Handling",
    description:
      "Production-grade workflow automation system enabling teams to orchestrate complex business processes with retries, scheduling, and scalable execution.",
    image: "/assets/projectsImages/workflows.png",
    tags: ["n8n", "Supabase", "Webhooks", "GraphQL", "metaAPI", "OpenAI"],
    role: "Automation Engineer",
    platform: "n8n + Supabase + REST APIs + GraphQL + metaAPI + OpenAI",
    impact: "Automated high-volume workflows with strong reliability and scalability",
    overview:
      "A production-grade workflow automation platform designed to orchestrate complex business processes such as content generation, content posting on social media, onboarding, approvals, notifications, data synchronization, and AI-driven tasks. The system supports multi-tenant workflows, webhook-driven triggers, scheduled jobs, retries, error handling, and parallel execution. Designed for operational reliability and scalability in real-world environments.",

    workflowStats: {
      totalNodes: "200+ workflow nodes",
      aiAnalysis: "Webhook Orchestration & Async Execution",
      database: "Supabase (PostgreSQL)",
    },

    architecture: [
      "Client / Webhooks",
      "└── n8n Orchestration Layer",
      "    ├── Trigger Nodes (Webhooks, Cron)",
      "    ├── Data Validation & Transformation",
      "    ├── API Integrations (3rd Party Services)",
      "    ├── Retry & Error Workflows",
      "    └── Supabase Database Layer",
    ],

    workflowBreakdown: [
      {
        title: "Webhook & Event Processing",
        nodeCount: "125–200 nodes",
        description:
          "Handles incoming webhooks, validates payloads, routes events, and triggers downstream workflows.",
        features: [
          "Schema validation and payload normalization",
          "Secure webhook authentication",
          "Event routing and conditional branching",
          "Async job triggering",
        ],
      },
      {
        title: "API Orchestration & Integrations",
        nodeCount: "20–25 nodes",
        description:
          "Coordinates multiple third-party APIs with retries, rate-limit handling, and data transformations.",
        features: [
          "OAuth and API token handling",
          "Rate limit protection",
          "Response validation and mapping",
          "Batch execution and pagination",
        ],
      },
      {
        title: "Scheduling & Reliability Layer",
        nodeCount: "15–20 nodes",
        description:
          "Manages scheduled executions, retries, monitoring, and error recovery.",
        features: [
          "Cron-based scheduling",
          "Automatic retries with backoff",
          "Failure alerts and logging",
          "Dead-letter workflows",
        ],
      },
    ],

    technicalHighlights: [
      "High-volume webhook-driven automation pipelines",
      "Fault-tolerant retry and error workflows",
      "Parallel execution and batching",
      "Secure API integrations",
      "Multi-tenant workflow isolation",
      "Containerized deployment using Docker",
    ],

    keySkills: [
      "n8n workflow architecture",
      "Automation reliability engineering",
      "Webhook systems",
      "API orchestration",
      "System observability",
      "Production-grade error handling",
      "Scalable REST API design",
      "Performance engineering",
    ],

    whyItMatters: [
      "Demonstrates real-world automation at scale",
      "Shows fault-tolerant system design",
      "Highlights integration-heavy workflow engineering",
      "Proves operational reliability mindset",
    ],

    techStack: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "Cron Scheduling",
      "Supabase (PostgreSQL)",
    ],
  }

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
  // Prevent scroll on backdrop
  const handleBackdropWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  // Prevent scroll on backdrop touch
  const handleBackdropTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  if (!project || !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
