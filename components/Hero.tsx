import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-teal-50 to-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 shadow-sm border border-teal-200">
              <span className="flex h-2 w-2 bg-teal-600 rounded-full mr-2 animate-pulse"></span>
              #1 Choice for MLT Aspirants
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Crack the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">AIIMS CRE</span> Exam on Your First Attempt
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The ultimate guide for Lab Technicians. 1000+ MCQs, subject-wise breakdown, and simplified explanations designed to help you secure a government job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPricing}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Start Your Prep Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <div className="flex items-center justify-center space-x-4 text-slate-500 text-sm font-medium mt-2 sm:mt-0 px-4">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mr-1.5" />
                  <span>Verified Content</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mr-1.5" />
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 transform rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out">
              <img 
                src="https://i.ibb.co/JWV7TcKH/Picsart-26-01-26-11-51-23-273-jpg.jpg" 
                alt="Mission MLT Cracker Book Cover" 
                className="rounded-xl w-full h-auto object-cover shadow-inner"
              />
              {/* Badge */}
              <div className="absolute -top-6 -right-6 bg-red-500 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12 border-4 border-white">
                <span className="text-xs font-bold uppercase">Only</span>
                <span className="text-2xl font-extrabold">₹249</span>
              </div>
            </div>
            
            {/* Decorative background for image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};