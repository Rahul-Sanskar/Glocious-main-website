"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "AI Agents", "Business Growth", "Automation", "SEO & Marketing"];

const blogPosts = [
  {
    id: 1,
    title: "Planning for AGI and beyond",
    summary: "OpenAI's official roadmap and approach to safe artificial general intelligence that benefits all of humanity.",
    source: "OpenAI",
    category: "AI Agents",
    url: "https://openai.com/blog",
    gradient: "from-green-500/20 to-emerald-900/40"
  },
  {
    id: 2,
    title: "Introducing Gemini 1.5 Pro",
    summary: "Google's next-generation multimodal AI model with a breakthrough 1 million token context window.",
    source: "Google AI",
    category: "AI Agents",
    url: "https://blog.google/technology/ai",
    gradient: "from-blue-500/20 to-indigo-900/40"
  },
  {
    id: 3,
    title: "How to Build a Sales Machine in 2026",
    summary: "The definitive guide to combining inbound marketing, CRM automation, and AI for unstoppable growth.",
    source: "HubSpot",
    category: "Business Growth",
    url: "https://blog.hubspot.com/",
    gradient: "from-orange-500/20 to-red-900/40"
  },
  {
    id: 4,
    title: "The State of AI Automation in Workflows",
    summary: "How 10,000+ businesses are using Zaps to replace manual data entry and scale operations.",
    source: "Zapier",
    category: "Automation",
    url: "https://zapier.com/blog",
    gradient: "from-orange-400/20 to-amber-900/40"
  },
  {
    id: 5,
    title: "Notion AI: Writing Better, Faster",
    summary: "Discover how embedded AI assistants within your workspace can 10x your team's document creation speed.",
    source: "Notion",
    category: "Automation",
    url: "https://www.notion.so/blog",
    gradient: "from-zinc-500/20 to-slate-900/40"
  },
  {
    id: 6,
    title: "E-commerce Trends: AI Personalization",
    summary: "How top Shopify Plus brands are using predictive AI to increase AOV by up to 35%.",
    source: "Shopify",
    category: "Business Growth",
    url: "https://www.shopify.com/blog",
    gradient: "from-green-400/20 to-teal-900/40"
  },
  {
    id: 7,
    title: "SEO in the Era of AI Overviews",
    summary: "Adapting your search strategy for generative engine results and zero-click searches.",
    source: "Ahrefs",
    category: "SEO & Marketing",
    url: "https://ahrefs.com/blog",
    gradient: "from-blue-600/20 to-purple-900/40"
  },
  {
    id: 8,
    title: "AI Startups Raise Record Breaking $50B",
    summary: "Venture capital trends show a massive shift towards autonomous agent frameworks and infra.",
    source: "TechCrunch",
    category: "AI Agents",
    url: "https://techcrunch.com/category/artificial-intelligence/",
    gradient: "from-green-500/20 to-emerald-900/40"
  },
  {
    id: 9,
    title: "Content Marketing Playbook for 2026",
    summary: "Why human-led, AI-assisted content outranks purely generated spam 100% of the time.",
    source: "Neil Patel",
    category: "SEO & Marketing",
    url: "https://neilpatel.com/blog/",
    gradient: "from-orange-500/20 to-red-900/40"
  },
  {
    id: 10,
    title: "10 New AI Tools Released This Week",
    summary: "Our weekly roundup of the most innovative AI wrappers and foundational models hitting the market.",
    source: "FutureTools",
    category: "AI Agents",
    url: "https://www.futuretools.io/news",
    gradient: "from-purple-500/20 to-indigo-900/40"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-content-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-soft blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-tint border border-border text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Industry Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight">
              The Frontier of <span className="text-accent">AI & Growth</span>
            </h1>
            <p className="text-xl text-content-secondary max-w-2xl mx-auto">
              Curated insights, strategies, and news from the world's most trusted technology and business publications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-border sticky top-[80px] z-40 bg-surface backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <Filter size={20} className="text-content-muted shrink-0 hidden md:block" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-accent text-accent-contrast shadow-accent" 
                    : "bg-surface-tint text-content-secondary hover:bg-accent-soft hover:text-content-primary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.a
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col card rounded-3xl overflow-hidden hover:border-accent transition-colors h-full"
                >
                  {/* Thumbnail Placeholder via Gradient */}
                  <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-black font-bold">{post.source.charAt(0)}</span>
                      </div>
                      {post.source}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-medium text-accent mb-4">
                      <span>{post.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-content-primary mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-content-secondary text-sm mb-8 line-clamp-2 leading-relaxed flex-grow">
                      {post.summary}
                    </p>
                    
                    <div className="flex items-center justify-end text-content-muted text-xs font-medium mt-auto pt-6 border-t border-border">
                      <ExternalLink size={16} className="group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_50px_var(--color-accent-soft)]"></div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-content-muted text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
