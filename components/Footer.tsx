import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Mission MLT</h3>
            <p className="text-sm leading-relaxed mb-4">
              Dedicated to helping Laboratory Technicians achieve their government job dreams through high-quality, affordable study resources.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => document.getElementById('problem')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-teal-400 transition-colors">About the Book</button></li>
              <li><button onClick={() => document.getElementById('bonus')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-teal-400 transition-colors">Free Mock Tests</button></li>
              <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-teal-400 transition-colors">Buy Now</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-teal-500" />
                <a href="mailto:missionmltedu@gmail.com" className="hover:text-white transition-colors">missionmltedu@gmail.com</a>
              </li>
              {/* Added placeholders for completeness if user wants to add them later */}
              <li className="flex items-center">
                 <span className="text-slate-500 text-xs italic">Email support available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mission MLT Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};