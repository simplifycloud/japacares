"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Check } from "lucide-react";

// 🔧 CHANGE THIS TO YOUR WHATSAPP NUMBER (with country code, no + or spaces)
const WHATSAPP_NUMBER = "918239548307"; // e.g. 91 for India + 10-digit number
const DEFAULT_MESSAGE =
  "Hi! I'm interested in JapaCares postpartum services. Can you help me?";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    const finalMessage = message.trim() || DEFAULT_MESSAGE;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      finalMessage
    )}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const quickMessages = [
    "💬 I need a caregiver",
    "💰 What are your prices?",
    "📍 Do you serve my city?",
    "🍼 Tell me about newborn care",
  ];

  return (
    <>
      {/* ═══ Chat Popup ═══ */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-96 animate-slideUp">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-5 relative">
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
              >
                <X size={16} className="text-white" />
              </button>

              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💕</span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                </div>

                <div>
                  <h3 className="font-serif text-white text-lg font-semibold">
                    JapaCares Support
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/90 text-xs">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    Online · Replies instantly
                  </div>
                </div>
              </div>
            </div>

            {/* Chat body */}
            <div className="bg-[#ECE5DD] p-5 min-h-[240px] max-h-[300px] overflow-y-auto">
              {/* Message bubble */}
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow">
                  <span className="text-white text-xs">💕</span>
                </div>
                <div className="max-w-[85%]">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <p className="text-sm text-gray-800">
                      Hi there! 👋 Welcome to <strong>JapaCares</strong>.
                    </p>
                    <p className="text-sm text-gray-800 mt-1">
                      How can we help you today?
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 ml-2">
                    <span className="text-[10px] text-gray-500">Just now</span>
                    <Check size={10} className="text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Quick messages */}
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-500 ml-10 mb-2">
                  Quick options:
                </p>
                {quickMessages.map((qm) => (
                  <button
                    key={qm}
                    type="button"
                    aria-label={`Send quick message: ${qm}`}
                    onClick={() => {
                      setMessage(qm);
                      setTimeout(handleSend, 100);
                    }}
                    className="w-full text-left ml-10 max-w-[calc(100%-2.5rem)] bg-white hover:bg-rose-50 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-gray-700 hover:text-rose-600 shadow-sm transition-all border border-transparent hover:border-rose-200"
                  >
                    {qm}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-full pl-5 pr-2 py-2 border border-gray-200 focus-within:border-[#25D366] focus-within:bg-white transition">
                <label htmlFor="whatsapp-message" className="sr-only">
                  Type your WhatsApp message
                </label>
                <input
                  id="whatsapp-message"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                />
                <button
                  type="button"
                  aria-label="Send message on WhatsApp"
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                Powered by WhatsApp · 100% Free
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Tooltip ═══ */}
      {showTooltip && !isOpen && (
        <div className="fixed bottom-24 right-6 z-[55] bg-white rounded-2xl shadow-2xl px-4 py-3 border border-gray-100 animate-slideUp max-w-[240px]">
          <button
            type="button"
            aria-label="Close tooltip"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs hover:bg-gray-700"
          >
            <X size={10} />
          </button>
          <p className="text-sm font-semibold text-gray-900">💬 Need help?</p>
          <p className="text-xs text-gray-600 mt-0.5">
            Chat with us on WhatsApp!
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />
        </div>
      )}

      {/* ═══ Floating Button ═══ */}
      <button
        type="button"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        title="Chat with us on WhatsApp"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="fixed bottom-6 right-6 z-[60] group"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-40" />

        {/* Button visual */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:shadow-green-500/60 transition-all duration-300">
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 text-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.796 1.23 1.82 2.606 3.41 4.554 4.34.616.287 2.035.888 2.708.888.788 0 2.32-.472 2.32-1.734 0-.144 0-.287-.03-.43-.1-.116-.288-.187-.53-.316-.244-.116-1.518-.746-1.732-.746Z" />
              <path d="M15.999 3.783c-6.741 0-12.216 5.475-12.216 12.216 0 2.157.573 4.286 1.664 6.171L3.616 28.216l6.201-1.816c1.816 1.017 3.874 1.548 5.976 1.548h.006c6.741 0 12.216-5.475 12.216-12.216 0-3.267-1.275-6.34-3.581-8.647-2.306-2.306-5.379-3.581-8.635-3.581Zm0 22.362a10.16 10.16 0 0 1-5.174-1.418l-.372-.215-3.853 1.132 1.146-3.767-.243-.387a10.14 10.14 0 0 1-1.547-5.376c0-5.605 4.554-10.16 10.16-10.16 2.72 0 5.26 1.06 7.184 2.978 1.92 1.92 2.977 4.464 2.977 7.183.014 5.62-4.54 10.03-10.146 10.03Z" />
            </svg>
          )}
        </div>

        {/* Notification dot */}
        {!isOpen && (
          <span
            className="absolute -top-1 -right-1 w-6 h-6 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce"
            aria-hidden="true"
          >
            1
          </span>
        )}
      </button>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}