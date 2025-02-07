import React from 'react';
import { Activity, Heart, Thermometer, Brain, Leaf } from 'lucide-react';

const Services = () => {
  const treatments = [
    {
      title: "KSHARSUTRA Surgery",
      description: "Advanced surgery with alkaline thread for piles, fistula, and pilo-nidal sinus",
      icon: Activity,
      image: "https://imgur.com/Obkenxz.jpg" // Updated Image with .jpg
    },
    {
      title: "Ksharpatan",
      description: "Alkaline drug application for fissure and piles treatment",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
    },
    {
      title: "Leech Therapy",
      description: "Traditional treatment for piles, inflamed wounds, and facial problems",
      icon: Thermometer,
      image: "https://imgur.com/eIGy7gR.jpg" // Updated Image with .jpg
    },
    {
      title: "Pain Management",
      description: "Specialized therapy for various types of pain and discomfort",
      icon: Brain,
      image: "https://imgur.com/YGQvIJH.jpg" // Updated Image with .jpg
    }
  ];

  const therapeuticProcedures = [
    {
      title: "Cupping Therapy",
      description: "Joints pain, cervical pain",
      icon: Leaf,
      image: "https://i.imgur.com/5jPKdOM.jpg"  // Cupping Therapy Image from Imgur
    },
    {
      title: "Pain Management",
      description: "Comprehensive pain relief therapy",
      icon: Leaf,
      image: "https://i.imgur.com/QoL3J8f.jpg"  // Pain Management Image from Imgur
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <treatment.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Therapeutic Procedures Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-center text-gray-900">Therapeutic Procedures</h3>
            <div className="grid sm:grid-cols-2 gap-6 justify-center items-center">
              {therapeuticProcedures.map((procedure, index) => (
                <div key={index} className="group p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={procedure.image} 
                      alt={procedure.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <procedure.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{procedure.title}</h4>
                    <p className="text-gray-600">{procedure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

