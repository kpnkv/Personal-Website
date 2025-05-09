import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PacmanLoader = () => (
    <div className="relative w-20 h-20 mb-6">
      {/* Black base circle (background mouth) */}
      <div className="absolute inset-0 bg-black rounded-full z-0" />
  
      {/* Top yellow jaw */}
      <div className="absolute top-0 w-full h-1/2 bg-yellow-400 origin-bottom rounded-t-full z-10 animate-mouth-top" />
  
      {/* Bottom yellow jaw */}
      <div className="absolute bottom-0 w-full h-1/2 bg-yellow-400 origin-top rounded-b-full z-10 animate-mouth-bottom" />
  
      {/* Dots */}
      <div className="absolute left-[5rem] top-[2.2rem] flex space-x-3 z-0">
        <div className="w-3 h-3 rounded-full bg-white animate-dot" />
        <div className="w-3 h-3 rounded-full bg-white animate-dot delay-200" />
        <div className="w-3 h-3 rounded-full bg-white animate-dot delay-400" />
      </div>
    </div>
  );

// 🔤 Animated text component
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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // Preloader delay

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <PacmanLoader />
        <AnimatedText text="Kirill Pankov" />
      </div>
    );
  }

  // 🎉 Main Home Section
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-white px-6">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Hi, I’m Kirill Pankov
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 mb-6 font-medium">
          Software Engineer · Creative Developer · CS Graduate
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
          I craft thoughtful and intuitive digital experiences. I love solving real-world problems
          using modern tools like React, Node.js, and APIs — all with a focus on usability and performance.
        </p>
        <a
         href="/contact"
         className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg"
        >
         Contact Me
        </a>
      </motion.div>
    </section>
  );
}