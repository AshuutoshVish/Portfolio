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
      "I specialize in backend engineering, workflow automation, and scalable system design using Python. My focus areas include API development, n8n automation, SaaS platforms, AI pipelines, and production reliability.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Python, Django, FastAPI, n8n, REST APIs, SQL/MySQL/PostgreSQL, Docker, Git, CI/CD, OAuth2/JWT, webhooks, cloud deployments, and third-party integrations.",
  },
  {
    question: "Do you have real production experience?",
    answer:
      "Yes. I currently work as a Jr Python Developer at AI Automation Excellence Technologies and previously interned at Jobma. I’ve built production SaaS platforms, automation pipelines, and scalable backend systems used by real users.",
  },
  {
    question: "What kind of projects have you built?",
    answer:
      "AI-powered SaaS platforms (IntuitySync), HRMS backend systems, LLM evaluation tools, automation workflows with n8n, analytics dashboards, API integrations, and large-scale backend services.",
  },
  {
    question: "Do you build systems end-to-end?",
    answer:
      "Yes. I handle architecture, backend APIs, automation workflows, integrations, database design, deployment, monitoring, and performance optimization.",
  },
  {
    question: "Can you automate workflows and integrate APIs?",
    answer:
      "Absolutely. I build reliable automation using n8n, async workflows, webhooks, OAuth integrations, batching, retries, and multi-platform API orchestration.",
  },
  {
    question: "Can you deploy and scale production systems?",
    answer:
      "Yes. I deploy using Docker and CI/CD pipelines with logging, monitoring, retries, security best practices, and performance tuning for scalable production systems.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. I offer continuous monitoring, bug fixes, performance optimization, and feature enhancements as systems evolve.",
  },
  {
    question: "How do you handle changing requirements?",
    answer:
      "I follow an iterative development approach with transparent communication, allowing scope adjustments while maintaining quality and timelines.",
  },
  {
    question: "How can someone contact or hire you?",
    answer:
      "📩 ashusharma3535@gmail.com\n📞 +91 8881619966\n💬 WhatsApp: +91 8881619966\n🔗 https://www.linkedin.com/in/ashuutosh/",
  },
];


export default function Faq() {
  const leftFaqs = faqData.slice(0, 5);
  const rightFaqs = faqData.slice(5);

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
        <span className="sm:text-lg text-m font-normal text-white">
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
                  <Mail className="w-5 h-3" />
                  <span>ashusharma3535@gmail.com</span>
                </a>
                <a
                  href="tel:+918881619966"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-5 h-3" />
                  <span>+91 8881619966</span>
                </a>
                <a
                  href="https://wa.me/918881619966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashuutosh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-3" />
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
