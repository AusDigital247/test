import React, { useState } from 'react';
import { Menu, X, Brain, Code, Database, Search, MessageSquareCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-950 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="font-bold text-xl">TechnovaAI</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/services" className="hover:text-emerald-400 px-3 py-2">Services</Link>
              <Link to="/solutions" className="hover:text-emerald-400 px-3 py-2">Solutions</Link>
              <Link to="/about" className="hover:text-emerald-400 px-3 py-2">About</Link>
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block hover:text-emerald-400 px-3 py-2">Services</Link>
            <Link to="/solutions" className="block hover:text-emerald-400 px-3 py-2">Solutions</Link>
            <Link to="/about" className="block hover:text-emerald-400 px-3 py-2">About</Link>
            <Link to="/contact" className="block bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}