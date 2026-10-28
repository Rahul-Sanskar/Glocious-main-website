"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mic, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
  options?: { label: string; action: string; url?: string }[];
};

const INITIAL_MESSAGE: Message = {
  id: "msg_1",
  sender: "ai",
  text: "Hi 👋 I'm the Glocious assistant. I can help you find the right communication or digital growth solution for your business. What are you looking for?",
  options: [
    { label: "Business Communication", action: "communication" },
    { label: "Digital Growth", action: "digital" },
    { label: "Technology Solutions", action: "technology" },
  ],
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SR) {
        const recognition = new SR();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.onstart = () => setIsRecording(true);
        recognition.onresult = (e: any) => {
          let t = "";
          for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
          setInputText(t);
        };
        recognition.onerror = () => setIsRecording(false);
        recognition.onend = () => setIsRecording(false);
        recognitionRef.current = recognition;
      }
    }
  }, []);

  /* Pin to the newest message by setting the panel's own scrollTop.
     scrollIntoView() bubbles up to every scrollable ancestor, so it also
     nudged the page itself — which Lenis then fought the scroll gesture for. */
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let response: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I can connect you with the right Glocious specialist for that. Here are a few quick options:",
        options: [{ label: "Talk to us", action: "link", url: "/contact" }],
      };

      if (lower.includes("sms") || lower.includes("whatsapp") || lower.includes("rcs") || lower.includes("communication") || lower.includes("voice") || lower.includes("ivr") || lower.includes("email")) {
        response.text = "Glocious provides the full range of business communication channels — SMS, WhatsApp, RCS, Voice, IVR and Email — all through a reliable API-first infrastructure.";
        response.options = [
          { label: "See all channels", action: "link", url: "/#communication" },
          { label: "Talk to a specialist", action: "link", url: "/contact" },
        ];
      } else if (lower.includes("automation") || /\bai\b/.test(lower) || lower.includes("workflow")) {
        response.text = "We help businesses automate customer engagement — communication triggers, journey automation and lead nurturing across every channel.";
        response.options = [
          { label: "Talk to a specialist", action: "link", url: "/contact" },
        ];
      } else if (lower.includes("seo") || lower.includes("digital") || lower.includes("lead") || lower.includes("marketing") || lower.includes("ppc") || lower.includes("social")) {
        response.text = "Our digital growth services cover SEO, social media, PPC, content marketing, lead generation and marketing automation — designed to drive measurable business results.";
        response.options = [
          { label: "See digital services", action: "link", url: "/#digital" },
          { label: "Talk to us", action: "link", url: "/contact" },
        ];
      } else if (lower.includes("website") || lower.includes("web") || lower.includes("ecommerce") || lower.includes("app")) {
        response.text = "We build high-performance websites, e-commerce platforms and custom digital solutions. Let's discuss your project.";
        response.options = [
          { label: "Technology solutions", action: "link", url: "/#technology" },
          { label: "Talk to us", action: "link", url: "/contact" },
        ];
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing")) {
        response.text = "Our pricing is tailored to your business volume and requirements. Get in touch and we'll put together a proposal.";
        response.options = [{ label: "Get a quote", action: "link", url: "/contact" }];
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, response]);
    }, 1200);
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) return;
    if (isRecording) { recognitionRef.current.stop(); }
    else { setInputText(""); recognitionRef.current.start(); }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-accent transition-all bg-accent text-accent-contrast ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open chat"
      >
        <MessageSquare size={20} aria-hidden />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-32px)] h-[540px] max-h-[calc(100vh-40px)] rounded-2xl shadow-overlay border border-border bg-surface-elevated overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 shrink-0 border-b border-border surface-tint">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black relative bg-accent text-accent-contrast">
                  G
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success border-2 border-surface-elevated rounded-full" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-content-primary">Glocious Assistant</p>
                  <p className="text-[11px] text-content-secondary">Powered by Glocious AI</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full flex items-center justify-center text-content-secondary transition-colors hover:bg-accent-soft hover:text-content-primary"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      msg.sender === "user"
                        ? "rounded-tr-sm bg-accent text-accent-contrast"
                        : "rounded-tl-sm surface-tint border border-border text-content-primary"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.options && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {msg.options.map((opt, i) => {
                        const chipClass =
                          "text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors border border-accent-soft bg-accent-soft text-accent hover:bg-accent hover:text-accent-contrast";
                        // Link options route client-side so the chat doesn't
                        // force a full document reload.
                        return opt.action === "link" && opt.url ? (
                          <Link key={i} href={opt.url} onClick={() => setIsOpen(false)} className={chipClass}>
                            {opt.label}
                            <ArrowRight size={10} />
                          </Link>
                        ) : (
                          <button key={i} type="button" onClick={() => handleSend(opt.label)} className={chipClass}>
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-start">
                  <div className="rounded-xl rounded-tl-sm px-3.5 py-3 flex items-center gap-1.5 surface-tint border border-border">
                    {[0, 0.18, 0.36].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.55, repeat: Infinity, delay }}
                        className="w-1.5 h-1.5 rounded-full bg-content-secondary"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 shrink-0 border-t border-border">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleRecording}
                  aria-label={isRecording ? "Stop voice input" : "Start voice input"}
                  className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-colors border ${
                    isRecording
                      ? "bg-danger-soft text-danger border-danger-soft animate-pulse"
                      : "bg-transparent border-transparent text-content-secondary hover:bg-accent-soft hover:text-content-primary"
                  }`}
                >
                  <Mic size={15} />
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about our solutions..."
                  aria-label="Chat message"
                  className="field flex-1"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  aria-label="Send message"
                  className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-accent text-accent-contrast disabled:opacity-40 transition-all"
                >
                  <Send size={14} className="-ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
