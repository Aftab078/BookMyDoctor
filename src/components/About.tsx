import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Dr. Mustaq Khan</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
                alt="Ayurvedic Treatment"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
                alt="Modern Clinic"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Dr. Mustaq Khan is a highly experienced specialist in ano-rectal diseases in South Gurgaon, Sohna city.
              He has received comprehensive training in both conservative and operative management of ano-rectal diseases,
              combining modern medical practices with traditional Ayurvedic techniques.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>BAMS from SGTUMC (May 2022)</li>
                <li>PGDAK from NIHSR (March 2024)</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience & Expertise</h3>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>Successfully performed over 100+ rectal surgeries</li>
                <li>Specialized in Fistula treatment</li>
                <li>Expert in Piles management</li>
                <li>Pilo-nidal Sinus specialist</li>
                <li>Advanced Fissure treatment</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg shadow-md text-white">
              <BookOpen className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Founder & Director</h3>
              <p>
                Founder-director of Apexx Hospital Sohna 122103, providing advanced Ayurvedic surgical care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;