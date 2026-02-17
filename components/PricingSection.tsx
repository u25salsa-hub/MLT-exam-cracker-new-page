import React from 'react';
import { ShieldCheck, Download, Star } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Start Your Journey Today</h2>
          <p className="text-lg text-slate-600">Invest in your career for less than the price of a pizza.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative">
          {/* Header */}
          <div className="bg-slate-900 p-6 text-center text-white">
            <h3 className="text-2xl font-bold">Mission MLT Cracker 2026</h3>
            <div className="mt-2 flex justify-center items-center gap-2 text-yellow-400">
                 <Star className="h-5 w-5 fill-current" />
                 <Star className="h-5 w-5 fill-current" />
                 <Star className="h-5 w-5 fill-current" />
                 <Star className="h-5 w-5 fill-current" />
                 <Star className="h-5 w-5 fill-current" />
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-slate-100 pb-8">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <span className="block text-slate-500 text-lg line-through decoration-red-500">Original Price: ₹499</span>
                    <div className="flex items-baseline gap-2 justify-center md:justify-start">
                        <span className="text-5xl font-extrabold text-teal-600">₹249</span>
                        <span className="text-slate-600 font-medium">only</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center text-slate-700">
                        <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                        Secure Payment
                    </div>
                    <div className="flex items-center text-slate-700">
                        <Download className="h-5 w-5 text-blue-500 mr-2" />
                        Instant PDF Delivery
                    </div>
                </div>
            </div>

            {/* Payment Placeholder Area */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                    {/* 
                        INSTRUCTIONS FOR USER:
                        Replace the button below with your actual Razorpay Payment Button Code.
                        Ensure the container size fits your button's layout.
                    */}
                    <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded shadow hover:bg-blue-700 transition duration-200">
                        Razorpay Button Placeholder
                    </button>
                </div>
                <p className="text-sm text-slate-500 max-w-xs">
                    (Paste your Razorpay Embed Code here in the source code to activate payments)
                </p>
            </div>
            
            <p className="mt-6 text-center text-xs text-slate-400">
                100% Satisfaction Guarantee. Support available 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};