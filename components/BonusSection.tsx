import React from 'react';
import { Gift, Laptop } from 'lucide-react';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Gift className="h-6 w-6 mr-2 text-yellow-300" />
            <span className="font-bold tracking-wide uppercase text-sm">Exclusive Bonus Inside</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-sm">
          3 FREE ONLINE MOCK TESTS
        </h2>
        
        <p className="text-xl sm:text-2xl text-teal-50 mb-12 max-w-3xl mx-auto font-light">
          Don't just read—practice! Get exclusive web access to interactive mock tests designed to mimic the <span className="font-bold text-white">AIIMS CRE computer-based exam environment</span>.
        </p>

        <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center">
                        <Laptop className="h-6 w-6 text-teal-600 mr-2" />
                        Real Exam Interface
                    </h3>
                    <p className="text-slate-600 mb-4">
                        Experience the pressure and timing of the real exam before the big day. Instant score analysis included.
                    </p>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">Worth ₹499</span>
                        <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full uppercase">Yours Free</span>
                    </div>
                </div>
                <div className="flex-shrink-0">
                     {/* Abstract Visual for Mock Test */}
                    <div className="w-full md:w-64 h-32 bg-slate-100 rounded-lg border-2 border-slate-200 relative overflow-hidden flex flex-col p-2">
                        <div className="w-full h-4 bg-slate-300 rounded mb-2"></div>
                        <div className="flex gap-2">
                             <div className="w-1/4 h-20 bg-slate-200 rounded"></div>
                             <div className="w-3/4 space-y-2">
                                <div className="w-full h-3 bg-slate-200 rounded"></div>
                                <div className="w-full h-3 bg-slate-200 rounded"></div>
                                <div className="w-2/3 h-3 bg-slate-200 rounded"></div>
                             </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                            <span className="bg-teal-600 text-white px-3 py-1 rounded shadow text-sm font-bold">Start Test</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};