import React, { useState } from 'react';
import { Calendar, Search, Users, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/LandingPage.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/explore", label: "EXPLORE SPOT" },
    { href: "/list", label: "LIST YOUR SPOT" },
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 py-4 bg-indigo-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-cyan-400 text-2xl font-bold">AppiSpot</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-gray-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="px-4 py-2 text-white hover:text-cyan-400 transition-colors"
              onClick={() => window.location.href = '/signin'}
            >
              SIGN IN
            </button>
            <button 
              className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-all transform hover:scale-105"
              onClick={() => window.location.href = '/signup'}
            >
              SIGN UP
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-indigo-900/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col h-full pt-20 px-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="py-4 text-white text-lg border-b border-white/10 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="mt-auto mb-8 flex flex-col space-y-4">
              <button 
                className="w-full py-3 text-white hover:text-cyan-400 transition-colors"
                onClick={() => window.location.href = '/signin'}
              >
                SIGN IN
              </button>
              <button 
                className="w-full py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-all"
                onClick={() => window.location.href = '/signup'}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Tired of searching? Find
          </h1>
          <div className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient">
            THE IDEAL SPOT
          </div>
          <h2 className="text-2xl md:text-4xl text-white font-light">
            for your occasion
          </h2>
        </div>
        
        {/* Search Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <select className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all appearance-none cursor-pointer hover:bg-white/20">
                  <option value="" className="bg-indigo-900">Select City</option>
                </select>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <select className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all appearance-none cursor-pointer hover:bg-white/20">
                  <option value="" className="bg-indigo-900">Select Category</option>
                </select>
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input 
                  type="date" 
                  className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all hover:bg-white/20"
                  placeholder="mm/dd/yyyy"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input 
                  type="number" 
                  className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 transition-all hover:bg-white/20"
                  placeholder="Guests"
                  min="1"
                />
              </div>
            </div>
            
            <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 font-medium self-end">
              Explore Spot
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;