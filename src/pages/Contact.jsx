import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 🟡 Pacman Loader
const PacmanLoader = () => (
  <div className="relative w-20 h-20 mb-6">
    <div className="absolute inset-0 bg-black rounded-full z-0" />
    <div className="absolute top-0 w-full h-1/2 bg-yellow-400 origin-bottom rounded-t-full z-10 animate-mouth-top" />
    <div className="absolute bottom-0 w-full h-1/2 bg-yellow-400 origin-top rounded-b-full z-10 animate-mouth-bottom" />
    <div className="absolute left-[5rem] top-[2.2rem] flex space-x-3 z-0">
      <div className="w-3 h-3 rounded-full bg-white animate-dot" />
      <div className="w-3 h-3 rounded-full bg-white animate-dot delay-200" />
      <div className="w-3 h-3 rounded-full bg-white animate-dot delay-400" />
    </div>
  </div>
);

const AnimatedText = ({ text }) => (
  <div className="flex space-x-1 text-white text-2xl md:text-3xl font-bold tracking-wide">
    {text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
      >
        {char}
      </motion.span>
    ))}
  </div>
);

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <PacmanLoader />
        <AnimatedText text="Contact Me" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#00c6ff] text-white px-6 py-20">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4 border-b-2 border-blue-400 inline-block">
            Contact Me
          </h1>
          <h2 className="text-blue-300 text-lg mb-4 font-semibold">Let’s Connect</h2>
          <p className="mb-6 text-white/90">
            Have a project, opportunity, or just want to chat? I'm always open to connecting and new ideas.
          </p>
          <div className="space-y-2 text-white/90">
            <p><strong>Email:</strong> <a href="mailto:kirill@example.com" className="text-blue-300">kirill@example.com</a></p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> Maryland, USA</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" className="text-blue-300" target="_blank">linkedin.com/in/yourprofile</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}