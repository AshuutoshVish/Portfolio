"use client";

import React, { useState, useRef } from "react";
import {
  Twitter,
  Instagram,
  Mail,
  ArrowUpRight,
  Linkedin,
  Github,
} from "lucide-react";
import Layout from "../HeroSection/Layout";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { toast } from "react-toastify";
import { Confetti, ConfettiRef } from "../magicui/confetti";
import { Section } from "../Section";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  niche: string;
  budget: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm({ contact }: any) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    niche: "",
    budget: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    if (fieldName === "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({
        ...prev,
        [fieldName]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: "",
    }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const requiredFields: (keyof FormData)[] = [
      "name",
      "mobile",
      "niche",
      "budget",
      "description",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${
          field[0].toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    if (
      formData.mobile &&
      (formData.mobile.length < 10 || formData.mobile.length > 10)
    ) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const triggerConfetti = () => {
    setShowConfetti(true);

    const confettiOptions = [
      {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
      },
      {
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f59e0b", "#ef4444", "#ec4899"],
      },
      {
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8b5cf6", "#3b82f6", "#06b6d4"],
      },
    ];

    confettiOptions.forEach((options, index) => {
      setTimeout(() => {
        confettiRef.current?.fire(options);
      }, index * 250);
    });

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const url =
        "https://script.google.com/macros/s/AKfycbyfbFNYQsdAA5cg4KvFEFP7i9F7lkhH6c2CPXyhsbXK8b2nXhNp0LWuotrZ_w6ec6Jw/exec";

      const body = new URLSearchParams({
        fullName: formData.name,
        email: formData.email,
        niche: formData.niche,
        phone: formData.mobile,
        budget: formData.budget,
        message: formData.description,
      }).toString();

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      triggerConfetti();
      toast.success("Submitted! I'll get back to you shortly 👍");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        niche: "",
        budget: "",
        description: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error(
        "❌ Something went wrong! Please try again or email me directly at ashusharma3535@gmail.com",
        {
          position: "top-right",
          autoClose: 7000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Section id="contact">
        <div className="text-white relative">
          {showConfetti && (
            <div className="fixed inset-0 z-[9999] pointer-events-none w-full h-full">
              <Confetti
                ref={confettiRef}
                className="w-full h-full"
                manualstart={true}
              />
            </div>
          )}

          <div className="relative z-10 py-14 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left Content */}
              <div className="space-y-8 lg:pr-8">
                <div className="text-[#8b8bff] font-medium text-sm mb-4">
                  Contact me
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Let’s build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    scalable automation & backend systems
                  </span>{" "}
                  for your product
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you need backend APIs, workflow automation, system
                  integrations, or production optimization — let’s discuss how
                  I can help you move faster and scale reliably.
                </p>
                <div className="space-y-6 pt-4">
                  <p className="text-gray-300 text-base">
                    You can also find me here:
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/AshuutoshVish"
                      className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-700/60 transition-all duration-300 cursor-pointer border border-gray-700/50"
                    >
                      <Github className="text-white w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ashuutosh/"
                      target="_blank"
                      className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-700/60 transition-all duration-300 cursor-pointer border border-gray-700/50"
                    >
                      <Linkedin className="text-white w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-gray-900/10 backdrop-blur-xl rounded-3xl p-4 lg:p-8 border border-gray-700/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">
                      Share your requirements
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Fill in a few details and I’ll reach out within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                          autoComplete="off"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email (Optional)"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl pr-12"
                          autoComplete="off"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        name="niche"
                        placeholder="What are you building? (API, automation, SaaS, etc.) *"
                        value={formData.niche}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                        autoComplete="off"
                      />
                      {errors.niche && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.niche}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="mobile"
                          placeholder="Mobile Number (10 digits) *"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          maxLength={10}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                          autoComplete="off"
                        />
                        {errors.mobile && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.mobile}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          name="budget"
                          placeholder="Estimated Budget *"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                          autoComplete="off"
                        />
                        {errors.budget && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.budget}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="description"
                        placeholder="Tell me about your requirements, timeline, and any integrations needed... *"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none resize-none px-4 py-2 rounded-xl h-32"
                        autoComplete="off"
                      />
                      {errors.description && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className={`bg-[#2d2d54] text-white px-5 py-2.5 flex items-center space-x-2 transition duration-300 ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-[#3d3d74]"
                      }`}
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      <span className="font-medium">
                        {loading ? "Submitting..." : "Submit"}
                      </span>
                      {!loading && <ArrowUpRight className="w-4 h-4" />}
                    </HoverBorderGradient>

                    <p className="text-gray-400 text-sm text-start">
                      Or email me directly at{" "}
                      <a
                        href="mailto:ashusharma3535@gmail.com"
                        className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                      >
                        ashusharma3535@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
