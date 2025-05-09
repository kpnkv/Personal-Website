import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className="w-16 bg-black text-white flex flex-col justify-between items-center py-6 fixed left-0 top-0 h-screen z-50">
      {/* Top Nav Links */}
      <div className="space-y-10">
        <NavLink to="/" className="hover:text-blue-400" title="Home">
          <Home size={30} />
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-400" title="About">
          <User size={30} />
        </NavLink>
        <NavLink to="/portfolio" className="hover:text-blue-400" title="Portfolio">
          <Briefcase size={30} />
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-400" title="Contact">
          <Mail size={30} />
        </NavLink>
      </div>

      {/* Social Icons at Bottom */}
      <div className="space-y-6 mt-16 mb-2">
        <a
          href="https://www.linkedin.com/in/kirill-pankov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/kpnkv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;