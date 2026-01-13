import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Layout from "../HeroSection/Layout";
import Image from "next/image";
import Zigzag from "../../../public/assets/zigzag.svg";
import { Section } from "../Section";

export default function Services({ id }: any) {
  const services = [
    "Backend API Development (Python, Django, FastAPI)",
    "E2E Workflow Automation with n8n (APIs, Webhooks, Cron)",
    "AI & LLM Applications (RAG, Chatbots, Agents)",
    "Automation Pipelines & System Integrations",
    "Data Processing, Analytics & Visualization",
    "Secure Authentication & Access Control (OAuth2, JWT, API Keys, RBAC)",
  ];

  return (
    <Layout>
      <Section id="services">
        <div className="bg-white/5 border border-white/10 sm:text-sm text-xs p-3 rounded-lg text-gray-300 backdrop-blur-md  flex flex-col md:flex-row gap-8 items-center w-full md:my-16 my-8">
          <div className="flex-1 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-2xl p-3 relative">
            {/* Header Box */}
            <div className="bg-black rounded-xl p-3 mb-6 relative">
              <h1 className="text-white text-2xl lg:text-3xl font-bold leading-tight">
                Backend, Automation & AI — Built for Real-World Scale
              </h1>
              {/* Yellow squiggly line */}
              <Image
                src={Zigzag}
                alt=""
                width={200}
                height={100}
                draggable={false}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:inline hidden"
              />
            </div>

            {/* Description */}
            <p className="text-white text-lg mb-6 leading-relaxed px-3">
            I design and build production-grade backend systems, automation workflows,
            and AI solutions that improve efficiency, reliability, and scalability for
            startups and growing teams.
            </p>

            {/* CTA Button */}
            <Button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 md:ml-3 rounded-xl font-semibold text-lg"
            >
              DISCUSS YOUR PROJECT
            </Button>
          </div>

          {/* Right Side - Services List */}
          <div className="flex-1 w-full space-y-5">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#3d3d74] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-white font-medium text-lg tracking-wide">
                  {service}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
