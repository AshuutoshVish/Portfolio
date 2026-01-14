"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import Layout from "../HeroSection/Layout";
import { Section } from "../Section";
import Image from "next/image";
import { Code2, Zap, Brain, Award, Briefcase, Heart } from "lucide-react";

const AboutPage: FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const skills = [
    "Python",
    "JavaScript",
    "Django",
    "FastAPI",
    "SQL",
    "n8n",
    "Pytorch",
    "GenAI",
    "Chatbot",
    "LLM/RAG",
    "Git",
    "Docker",
    "Automation",
    "API Development",
    "System Integration",
  ];

  const achievements = [
    {
      icon: Briefcase,
      title: "Production Systems",
      description: "Built scalable backend systems handling thousands of requests daily",
    },
    {
      icon: Zap,
      title: "Automation Expert",
      description: "Designed complex workflows reducing manual work by 80%+",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Implemented RAG pipelines and LLM applications for real-world use",
    },
    {
      icon: Award,
      title: "Reliable Delivery",
      description: "Consistently delivered projects on time with high quality standards",
    },
  ];

  return (
    <Layout>
      <Section id="about">
        <div className="relative min-h-screen w-full overflow-hidden py-20">
          <div className="relative z-10 mx-auto px-4">
            {/* Header Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="text-center mb-10"
            >
              <p className="text-[#8b8bff] font-medium text-sm mb-2 mt-3">About Me</p>
              <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Building</span>{" "}
                <span className="text-gray-300 font-semibold">robust</span>
                <br />
                <span className="text-white">backend systems</span>{" "}
                <span className="text-gray-400 font-semibold">
                  and automation solutions
                </span>
              </h1>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-6">
              {/* Personal Section */}
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Personal</h2>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30">
                    <Image
                      src="/assets/ashutosh.png"
                      alt="Ashutosh"
                      fill
                      sizes="192px"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I’m a backend and automation engineer who loves building systems that actually work in production — reliable, scalable, and easy to maintain
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Outside of coding, I enjoy experimenting with new technologies, optimizing workflows, and contributing to automation ideas that save time and reduce manual effort.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I believe great software is not just about features, but about performance, reliability, and real business impact.
                </p>
              </motion.div>

              {/* Professional Section */}
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Professional</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I specialize in building production-grade backend systems, automation pipelines, and AI-powered workflows. With strong experience in Python, FastAPI, Django, and n8n, I help teams automate operations, scale systems, and ship reliable products faster.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I’ve designed and maintained 200+ automation workflows, built secure REST APIs, integrated third-party platforms (Meta, Stripe, Supabase, Slack), and delivered AI systems including RAG pipelines, content automation, and analytics dashboards.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My work focuses on performance optimization, fault-tolerant architectures, async processing, and clean API design — ensuring systems remain stable at scale.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <Code2 className="w-4 h-4" />
                  <span className="font-semibold">Always learning, always building, always shipping.</span>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-6 py-3 rounded-full text-white font-medium hover:border-purple-500/60 hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Key Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
