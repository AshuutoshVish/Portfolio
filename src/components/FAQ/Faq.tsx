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
      "I specialize in Python development, AI/ML solutions, automation workflows, and full-stack web applications.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Python, JavaScript, FastAPI, Django, Flask, React, SQL, PostgreSQL, Supabase, LangChain, RAG, n8n, Zapier and Docker.",
  },
  {
    question: "Do you have professional experience?",
    answer:
      "Yes, I’ve worked as a Python Developer (AI) at Excellence Technologies and as a Software Developer AI Intern at Jobma.",
  },
  {
    question: "What kind of projects have you built?",
    answer:
      "AI-powered recommendation systems, Dashpbards, Resume analysis tools, ML pipelines, Automated Social Media systems, API integrations, and AI chatbot solutions.",
  },
  {
    question: "Do you build AI applications end-to-end?",
    answer:
      "Yes — from data preprocessing and model training to backend APIs, UI integration, and deployment.",
  },
  {
    question: "Do you offer automation and API integration services?",
    answer:
      "Yes — I build automated workflows using n8n, Meta Graph API, webhooks, OAuth2, and third-party integrations.",
  },
  {
    question: "Can you handle model deployment and production setups?",
    answer:
      "Yes — I deploy ML models using FastAPI, Docker, CI/CD, and cloud platforms with scalable architecture.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, I do! I'll keep your website updated, fix any issues, and make changes or improvements whenever needed.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No surprises! My pricing is transparent and includes all essential services to build your website. If you want additional features or services beyond what's in our agreement, I'll clearly explain any extra costs upfront.",
  },
  {
    question: "What if I'm not happy with the final result?",
    answer:
      "Your satisfaction is my priority. I'll work closely with you to address any concerns and make sure you're happy with the outcome.",
  },
  {
    question: "How can I get started?",
    answer:
      "Just reach out to me through my contact page. I'll discuss your project's needs and guide you through the process step by step.",
  },
  {
    question: "How can someone contact or hire you?",
    answer:
      "📩 ashusharma3535@gmail.com\n +91 8881619966\n https://www.linkedin.com/in/ashuutosh/",
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
