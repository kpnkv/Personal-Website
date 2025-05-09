import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Loader
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

// Animated text
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

// Animation config
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <PacmanLoader />
        <AnimatedText text="Portfolio" />
      </div>
    );
  }

  // Dummy projects
  const projects = new Array(8).fill({
    title: 'Unnamed Project',
    tech: 'Tech stack TBD',
    img: '/images/placeholder.png', // You can replace this with any placeholder image
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#00c6ff] text-white px-6 py-16 ml-16 md:ml-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-10">Portfolio</h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <div className="p-4 bg-black/50 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}