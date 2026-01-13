"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Phone, Linkedin } from "lucide-react";
import Layout from "../HeroSection/Layout";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in backend engineering, workflow automation, and building scalable systems using Python. My focus areas include API development, n8n automation, SaaS platforms, integrations, and production reliability.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Python, Django, FastAPI, n8n, Zapier, REST APIs, SQL/MySQL, Docker, GitHub, CI/CD, webhooks, OAuth2/JWT, third-party integrations, and cloud deployments.",
  },
  {
    question: "Do you have professional experience?",
    answer:
      "Yes. I currently work as a Python Developer at Excellence Technologies and previously worked as an AI Intern at Jobma. I’ve contributed to production SaaS platforms, automation pipelines, and backend systems used by real customers.",
  },
  {
    question: "What kind of projects have you built?",
    answer:
      "Production SaaS platforms (IntuitySync), backend APIs, automation workflows with n8n, AI pipelines, data analytics systems, HRMS backends, API integrations, and large-scale automation tools.",
  },
  {
    question: "Do you build systems end-to-end?",
    answer:
      "Yes. I handle architecture design, backend APIs, automation workflows, integrations, database design, deployment, monitoring, and performance optimization.",
  },
  {
    question: "Do you offer automation and API integration services?",
    answer:
      "Yes. I build automation workflows using n8n, webhooks, cron jobs, async processing, OAuth-based integrations, and third-party APIs.",
  },
  {
    question: "Can you handle production deployments and scaling?",
    answer:
      "Yes. I deploy systems using Docker, CI/CD pipelines, and cloud environments with proper logging, monitoring, retries, and performance tuning for scale.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. I provide ongoing improvements, monitoring, bug fixes, optimization, and feature enhancements as your system grows.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No. Pricing and scope are discussed clearly upfront. Any additional features or changes are communicated before implementation.",
  },
  {
    question: "What if requirements change during development?",
    answer:
      "That’s completely fine. I work in an iterative manner and adapt based on feedback while keeping timelines and scope transparent.",
  },
  {
    question: "How can I get started?",
    answer:
      "Reach out through the contact section. We’ll discuss your goals, technical requirements, timelines, and next steps.",
  },
  {
    question: "How can someone contact or hire you?",
    answer:
      "📩 ashusharma3535@gmail.com\n📞 +91 8881619966\n🔗 https://www.linkedin.com/in/ashuutosh/",
  },
];

export default function Faq() {
  const leftFaqs = faqData.slice(0, 6);
  const rightFaqs = faqData.slice(6);

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="w-full rounded-2xl shadow-xl overflow-hidden">
          <section className="mb-5 text-center">
            <p className="text-[#8b8bff] font-medium text-sm mb-4">FAQs</p>

            <h1 className="sm:text-4xl text-2xl md:text-5xl leading-tight mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Questions? We have answers.
              </span>
            </h1>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {leftFaqs.map((item, index) => (
                <FAQItem key={index} item={item} index={index} />
              ))}
            </div>
            <div>
              {rightFaqs.map((item, index) => (
                <FAQItem key={index + 3} item={item} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-4 rounded-t-lg backdrop-blur-md bg-white bg-opacity-10 transition-colors duration-300 text-xl"
      >
        <span className="sm:text-lg text-sm font-semibold text-white">
          {item.question}
        </span>
        <motion.span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {item.question.includes("How can someone contact or hire you?") ? (
              <div className="p-4 bg-white bg-opacity-10 rounded-b-lg text-white space-y-3">
                <a
                  href="mailto:ashusharma3535@gmail.com"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>ashusharma3535@gmail.com</span>
                </a>
                <a
                  href="tel:+918881619966"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 8881619966</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashuutosh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            ) : (
              <p className="p-4 text-white bg-white bg-opacity-10 rounded-b-lg md:text-lg whitespace-pre-line">
                {item.answer}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
