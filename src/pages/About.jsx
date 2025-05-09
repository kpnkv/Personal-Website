import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Cube3d from '../components/Cube3d';

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

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <PacmanLoader />
        <AnimatedText text="About Me" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#00c6ff] text-white px-6 py-16 ml-16 md:ml-20">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text Content */}
        <div className="w-full md:w-2/3 max-w-2xl space-y-6">
          <p className="text-base md:text-lg leading-relaxed">
            I am a very ambitious software developer with a unique background that has prepared me
            to be a team player who communicates effectively, faces problems analytically, and has
            the technical skills to tackle any challenge.
          </p>

          <h2 className="text-xl font-bold text-yellow-400 mt-8">Languages</h2>

          <div className="space-y-4">
            <div>
              <p>Java: 4 years</p>
              <div className="h-3 bg-orange-500 rounded w-full" />
            </div>
            <div>
              <p>Python: 3 years</p>
              <div className="h-3 bg-yellow-300 rounded w-3/4" />
            </div>
            <div>
              <p>HTML/CSS/JS: 3 years</p>
              <div className="h-3 bg-green-400 rounded w-3/4" />
            </div>
            <div>
              <p>SQL: 1.5 years</p>
              <div className="h-3 bg-pink-500 rounded w-1/2" />
            </div>
          </div>
        </div>

        {/* Cube */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-20">
          <Cube3d />
        </div>
      </motion.div>
    </section>
  );
}