import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DR. MUSTAQ KHAN
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 mb-6">
              Physician & Surgeon
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Consultant and surgeon specializing in ano-rectal diseases.
              particularly in piles, fissure, fistula, pilo-nidal sinus,
              ano-rectal abscess, and related conditions.
              </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Book Appointment
              </a>
              <a
                href="tel:9797688925"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://i.imgur.com/tFMXNFI.jpg"
              alt="Dr. Mustaq Khan"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
