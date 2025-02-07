import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, ChevronRight, Stethoscope, Award, BookOpen, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <footer className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © All rights reserved by Aftab 2025.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;