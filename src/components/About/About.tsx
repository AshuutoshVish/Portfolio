"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import Layout from "../HeroSection/Layout";

const AboutPage: FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Layout>
        <div className="relative z-10 mx-auto px-4 py-20 text-white">
          {/* Logo/SVG Container */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <div className="h-32 w-32">
              <div className="h-full w-full rounded-full bg-white/20 p-4">
                {/* SVG placeholder */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-full w-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold">AVA Tech Solutions</h1>
            <p className="mb-8 text-xl font-light leading-relaxed">
              Pioneering Digital Excellence
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="mt-16 grid gap-12 md:grid-cols-2"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Who We Are</h2>
              <p className="text-lg text-gray-300">
                AVA Tech Solutions is a forward-thinking technology company
                dedicated to transforming businesses through innovative digital
                solutions. With our expert team and cutting-edge technology, we
                help organizations navigate the digital landscape and achieve
                their full potential.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p className="text-lg text-gray-300">
                We strive to deliver exceptional technology solutions that
                empower businesses to thrive in the digital age. Through our
                commitment to excellence and innovation, we help our clients
                stay ahead of the curve and achieve sustainable growth.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "95%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="mb-2 text-4xl font-bold text-blue-400"
                >
                  {stat.number}
                </motion.div>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutPage;
