import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">
                    Apexx Hospital Sohna<br />
                    Gurjar Pratihar Marg, Gahlot Vihar<br />
                    Baluda, Sohna, Haryana 122103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">
                    Appointment: <a href="tel:9797688925" className="text-blue-600 hover:underline">9797688925</a><br />
                    Video Consultation: <a href="tel:8307467385" className="text-blue-600 hover:underline">8307467385</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">
                    <a href="https://wa.me/918307467385" className="text-blue-600 hover:underline">8307467385</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:drmustaqkhan9991@gmail.com" className="text-blue-600 hover:underline">
                      drmustaqkhan9991@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80"
              alt="Hospital Building"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;