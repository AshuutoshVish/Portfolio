# Ashutosh's Portfolio Website

A modern, interactive portfolio website showcasing projects, skills, and professional experience. Built with Next.js 14, featuring smooth animations, an AI-powered chatbot, and a responsive design optimized for performance and SEO.

**Live Demo:** [ashutoshautomations.vercel.app](https://ashutoshautomations.vercel.app)

## ✨ Features

- **Hero Section** - Eye-catching introduction with animated background
- **About Section** - Professional background, skills, and achievements
- **Projects Showcase** - Interactive project cards with detailed modals featuring:
  - IntuitySync (AI Automation SaaS)
  - HRMS Backend Platform
  - Stock Hub Data Analytics Platform
  - OpenEvals (LLM Evaluation Platform)
  - Portfolio Website
  - Workflow Automation (n8n)
- **Services** - Overview of services offered
- **Why Choose Us** - Highlighting key differentiators
- **FAQ Section** - Frequently asked questions
- **Contact Form** - Get in touch functionality
- **AI Chatbot (AshBOT)** - Interactive chatbot powered by OpenAI that answers questions about Ashutosh's work, projects, and experience
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Built-in Next.js SEO features

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library
- **React Icons** - Additional icons

### Features
- **OpenAI API** - Chatbot integration
- **React Toastify** - Toast notifications
- **Lottie React** - Animated graphics
- **Lenis** - Smooth scrolling

### Fonts
- **Geist Font** - Optimized font family from Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (for chatbot functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ashutosh_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o  # Optional, defaults to gpt-4o
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤖 Chatbot Setup (AshBOT)

The portfolio includes **AshBOT**, an AI-powered chatbot that answers questions about Ashutosh's work, projects, skills, and experience.

### Setup Instructions

1. Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

2. Add it to your `.env.local` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o  # Optional: specify model (default: gpt-4o)
```

3. The chatbot will appear as a floating widget in the bottom-right corner of the portfolio.

### How It Works

- AshBOT uses a comprehensive knowledge base about Ashutosh's professional background
- It can answer questions about projects, skills, services, and experience
- Powered by OpenAI's GPT-4o model
- Knowledge base is stored in `src/lib/knowledge-base.ts`

## 📁 Project Structure

```
Ashutosh_portfolio/
├── public/
│   ├── assets/          # Images and project assets
│   ├── icons/           # Favicons and app icons
│   └── lottie/          # Lottie animation files
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/    # Chatbot API route
│   │   ├── fonts/       # Geist font files
│   │   ├── styles/      # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main page
│   ├── components/
│   │   ├── About/       # About section
│   │   ├── Chatbot/     # AshBOT component
│   │   ├── Contact/     # Contact form
│   │   ├── FAQ/         # FAQ section
│   │   ├── Header/      # Navigation header
│   │   ├── HeroSection/ # Hero section
│   │   ├── Projects/    # Projects showcase
│   │   ├── Services/    # Services section
│   │   ├── WhyChooseUs/ # Why choose us section
│   │   ├── footer/      # Footer component
│   │   └── ui/          # Reusable UI components
│   └── lib/
│       ├── knowledge-base.ts  # Chatbot knowledge base
│       └── utils.ts           # Utility functions
├── .env.local          # Environment variables (create this)
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run favicons` - Generate favicons

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `OPENAI_MODEL` - (Optional) Model to use
4. Deploy!

The site will be live at `https://your-project.vercel.app`

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 Customization

### Updating Content

- **About Section**: Edit `src/components/About/About.tsx`
- **Projects**: Edit the `projects` array in `src/components/Projects/Project.tsx`
- **Services**: Edit `src/components/Services/Services.tsx`
- **FAQ**: Edit `src/components/FAQ/Faq.tsx`
- **Chatbot Knowledge Base**: Edit `src/lib/knowledge-base.ts`

### Styling

- Global styles: `src/app/globals.css`
- Color scheme: `src/app/styles/color.css`
- Tailwind config: `tailwind.config.ts`

## 🔗 Links

- **Portfolio**: [ashutoshautomations.vercel.app](https://ashutoshautomations.vercel.app)
- **LinkedIn**: [linkedin.com/in/ashuutosh](https://www.linkedin.com/in/ashuutosh/)
- **GitHub**: [github.com/AshuutoshVish](https://github.com/AshuutoshVish)

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
