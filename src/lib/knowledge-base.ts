/**
 * Knowledge Base for Ashutosh's Portfolio Chatbot
 * Contains comprehensive information about Ashutosh compiled from portfolio content
 */

export const knowledgeBase = `
# About Ashutosh

## Personal Information
- Name: Ashutosh Vishwakarma
- Role: Python Developer , Backend Developer and Automation Engineer
- Current Position: Jr Python Developer at Excellence Technologies
- Previous Experience: Interned at Jobma
- Email: ashusharma3535@gmail.com
- Phone: +91 8881619966
- WhatsApp: +91 8881619966
- LinkedIn: https://www.linkedin.com/in/ashuutosh/
- GitHub: https://github.com/AshuutoshVish
- Portfolio Website: https://ashutoshautomations.vercel.app/

## Personal Background
I'm a backend and automation engineer who loves building systems that actually work in production — reliable, scalable, and easy to maintain. Outside of coding, I enjoy experimenting with new technologies, optimizing workflows, and contributing to automation ideas that save time and reduce manual effort. I believe great software is not just about features, but about performance, reliability, and real business impact.

## Professional Background
I specialize in building production-grade backend systems, automation pipelines, and AI-powered workflows. With strong experience in Python, FastAPI, Django, and n8n, I help teams automate operations, scale systems, and ship reliable products faster. I've designed and maintained 200+ automation workflows, built secure REST APIs, integrated third-party platforms (Meta, Stripe, Supabase, Slack), and delivered AI systems including RAG pipelines, content automation, and analytics dashboards. My work focuses on performance optimization, fault-tolerant architectures, async processing, and clean API design — ensuring systems remain stable at scale.

## Skills & Technologies
- Python
- JavaScript
- Django
- FastAPI
- REST APIs
- SQL (MySQL, PostgreSQL)
- n8n
- PyTorch
- Scikit-learn
- GenAI
- LLM/RAG
- Chatbot Development
- Git
- Docker
- Automation
- API Development
- System Integration
- Workflow Management
- Workflow Automation
- Workflow Orchestration

## Key Achievements
1. Production Systems: Built scalable backend systems handling thousands of requests daily
2. Automation Expert: Designed complex workflows reducing manual work by 80%+
3. AI Solutions: Implemented RAG pipelines and LLM applications for real-world use
4. Reliable Delivery: Consistently delivered projects on time with high quality standards

## Projects

### 1. IntuitySync
- **Type: AI Automation SaaS** • Multi-Tenant • Production Scale
- **Description**: Production-grade AI-powered automation platform enabling agencies and businesses to automate content workflows, approvals, publishing, and analytics.
- **Role**: Automation Engineer / Backend Engineer
- **Platform**: n8n + Python + Supabase + OpenAI + Stripe + Docker
- **Impact**: 200+ workflows • 70% automation efficiency • SaaS production system
- **Overview**: IntuitySync is a multi-tenant AI automation SaaS used by agencies and teams to automate content creation, approvals, publishing, analytics, and client workflows. I designed and maintained 200+ production n8n workflows handling webhook orchestration, batching, retries, async execution, OAuth token refresh, and credit tracking logic. The platform integrates OpenAI for content generation, Supabase for authentication and storage, Stripe for billing, and multiple social APIs.
- **Technical Highlights**: Webhook-driven workflow orchestration, async execution with retries and error workflows, OAuth token refresh handling, multi-tenant RBAC automation logic, credit-based usage tracking, high-volume batch processing
- **Tech Stack**: n8n, Python, Supabase, PostgreSQL, OpenAI, Stripe, Docker, REST APIs

### 2. HRMS System
- **Type**: Multi-Tenant APIs • Employee Management • Slack Automation • Payroll System
- **Description**: Enterprise-grade HR management backend with secure multi-tenant architecture, RBAC, payroll automation, and Slack-driven workflows.
- **Role**: Backend Engineer / API Architect
- **Platform**: Python + Django + DRF + MySQL + Docker
- **Impact**: Enterprise-ready HR automation platform
- **Overview**: A production-ready HRMS backend supporting multiple organizations with strict data isolation, JWT authentication, RBAC roles, attendance tracking, leave workflows, payroll generation, and document management. Integrated Slack bots for approvals and notifications, automated payslip emails, secure file uploads, and role-based access control for Admin, HR, Manager, and Employee roles.
- **Technical Highlights**: Multi-tenant data isolation architecture, JWT authentication with role-based access control, Slack interactive workflows and bots, automated payroll processing and notifications, secure document upload pipelines, API-first architecture with Swagger and Redoc, timezone-aware scheduling and workflows
- **Tech Stack**: Django, DRF, MySQL, Docker, REST APIs

### 3. Stock Hub Data Analytics Platform
- **Type**: BigQuery • Stock Market Data Analytics • Financial Dashboards
- **Description**: Full-stack platform for querying, insighting, analyzing, and exporting historical stock market data with optimized batch processing.
- **Role**: Full Stack / Backend Engineer
- **Platform**: Python + FastAPI + BigQuery + Pandas + React + TypeScript
- **Impact**: 60–70% query optimization • Scalable analytics
- **Overview**: Built a scalable analytics platform for processing historical stock market data with multi-ticker batch queries, optimized BigQuery pipelines, vectorized Pandas processing, and automated Excel exports to Google Drive. The system supports index/sector filtering, dynamic time ranges, batch execution for hundreds of tickers, and delivers low-latency analytics for investment research and reporting.
- **Technical Highlights**: Optimized BigQuery batch queries (~60–70% faster), vectorized Pandas analytics for high throughput, multi-ticker
- **Tech Stack**: Python, Flask, BigQuery, Pandas, Google Drive API, React, Gunicorn, Service Accounts

### 4. OpenEvals
- **Type**: LLM Evaluation • LLM-as-Judge • AI Quality Platform
- **Description**: Web platform for automated evaluation of LLM outputs using structured scoring and feedback pipelines.
- **Role**: Full Stack Engineer
- **Platform**: Next.js + OpenAI + LangChain
- **Impact**: Automated AI quality evaluation at scale
- **Overview**: OpenEvals is a production-ready LLM evaluation platform that automates correctness and conciseness scoring using the LLM-as-Judge methodology. The system supports concurrent batch evaluations, structured rubric-based scoring, explainable feedback generation, and secure server-side API orchestration. Designed for reliability, extensibility, and high-throughput evaluation workflows.
- **Technical Highlights**: LLM-as-Judge evaluation pipelines, rubric-based structured scoring, concurrent request execution, strict JSON schema validation, secure server-side API key handling, extensible evaluator architecture, production-grade error handling
- **Tech Stack**: Next.js, TypeScript, OpenAI API, LangChain, Tailwind CSS, Serverless Functions, Zod Validation

### 5. Portfolio Website
- **Type**: Modern UI • Responsive • Performance Optimized • SEO Optimized
- **Description**: A modern portfolio website showcasing projects, skills, and professional experience with smooth animations and optimized performance.
- **Role**: Full Stack Developer
- **Platform**: Next.js + React + TypeScript + Tailwind CSS + OpenAI
- **Impact**: Personal branding and showcase platform
- **Overview**: A modern portfolio built with Next.js featuring responsive layouts, smooth animations, SEO optimization, and clean UI architecture. The website is hosted on Vercel and is optimized for performance and SEO.
- **Tech Stack**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- Link: https://ashutoshautomations.vercel.app/

### 6. Workflow Automation (n8n)
- **Type**: Enterprise Automation • Multi-Tenant • High-Volume Pipelines • Webhook-driven • Scheduled Jobs • Retry & Error Handling
- **Description**: Production-grade workflow automation system enabling teams to orchestrate complex business processes with retries, scheduling, and scalable execution.
- **Role**: Automation Engineer
- **Platform**: n8n + Supabase + REST APIs + GraphQL + metaAPI + OpenAI
- **Impact**: Automated high-volume workflows with strong reliability and scalability
- **Overview**: A production-grade workflow automation platform designed to orchestrate complex business processes such as content generation, content posting on social media, onboarding, approvals, notifications, data synchronization, and AI-driven tasks. The system supports multi-tenant workflows, webhook-driven triggers, scheduled jobs, retries, error handling, and parallel execution. Designed for operational reliability and scalability in real-world environments.
- **Technical Highlights**: High-volume webhook-driven automation pipelines, fault-tolerant retry and error workflows, parallel execution and batching, secure API integrations, multi-tenant workflow isolation, containerized deployment using Docker
- **Tech Stack**: n8n, REST APIs, Webhooks, Cron Scheduling, Supabase (PostgreSQL)

## Services Offered

1. **AI Integration & Implementation**: Seamlessly integrate GPT-4, OpenAI, and other AI models into your existing systems.
2. **Custom Workflow Automation**: Build powerful n8n and Zapier workflows that automate repetitive tasks.
3. **API Development & Integration**: Connect multiple services with robust API integrations and custom endpoints.
4. **Chatbot Development**: Create intelligent chatbots using Dialogflow, OpenAI, and custom solutions.
5. **CRM Automation**: Automate your HubSpot, ActiveCampaign, and other CRM workflows.
6. **Business Process Optimization**: Analyze and optimize your workflows for maximum efficiency and cost savings.

## Frequently Asked Questions

**Q: What do you specialize in?**
A: I specialize in backend engineering, workflow automation, and scalable system design using Python. My focus areas include API development, n8n automation, SaaS platforms, AI pipelines, and production reliability.

**Q: What technologies do you work with?**
A: Python, Django, FastAPI, n8n, REST APIs, SQL/MySQL/PostgreSQL, Docker, Git, CI/CD, OAuth2/JWT, webhooks, cloud deployments, and third-party integrations.

**Q: Do you have real production experience?**
A: Yes. I currently work as a Jr Python Developer at AI Automation Excellence Technologies and previously interned at Jobma. I've built production SaaS platforms, automation pipelines, and scalable backend systems used by real users.

**Q: What kind of projects have you built?**
A: AI-powered SaaS platforms (IntuitySync), HRMS backend systems, LLM evaluation tools, automation workflows with n8n, analytics dashboards, API integrations, and large-scale backend services.

**Q: Do you build systems end-to-end?**
A: Yes. I handle architecture, backend APIs, automation workflows, integrations, database design, deployment, monitoring, and performance optimization.

**Q: Can you automate workflows and integrate APIs?**
A: Absolutely. I build reliable automation using n8n, async workflows, webhooks, OAuth integrations, batching, retries, and multi-platform API orchestration.

**Q: Can you deploy and scale production systems?**
A: Yes. I deploy using Docker and CI/CD pipelines with logging, monitoring, retries, security best practices, and performance tuning for scalable production systems.

**Q: Do you provide ongoing support and maintenance?**
A: Yes. I offer continuous monitoring, bug fixes, performance optimization, and feature enhancements as systems evolve.

**Q: How do you handle changing requirements?**
A: I follow an iterative development approach with transparent communication, allowing scope adjustments while maintaining quality and timelines.

## Professional Philosophy
Always learning, always building, always shipping. I focus on building systems that are not just functional, but reliable, scalable, and maintainable in production environments.
`;




