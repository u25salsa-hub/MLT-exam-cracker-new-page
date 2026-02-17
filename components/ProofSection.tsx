import React from 'react';
import { Award, UserCheck } from 'lucide-react';

export const ProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <div className="absolute inset-0 bg-teal-100 rounded-3xl transform rotate-3"></div>
                <img 
                    src="https://i.ibb.co/JWV7TcKH/Picsart-26-01-26-11-51-23-273-jpg.jpg"
                    alt="Book Cover Large" 
                    className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto border-4 border-white"
                />
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <UserCheck className="h-8 w-8 text-teal-700" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-teal-600 uppercase tracking-wide">Why Trust Me?</h4>
                    <h2 className="text-3xl font-bold text-slate-900">Written by a Professional</h2>
                </div>
            </div>

            <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                    This isn't just another book by a publisher who has never stepped into a lab. 
                </p>
                <p>
                    I am a <strong>currently working Lab Technician in an ESIC Hospital</strong>. I've walked the path you are on right now. I understand the syllabus, the pressure, and exactly what it takes to clear government medical exams.
                </p>
                <p>
                    This book contains <strong>no fluff</strong>. Only the questions that actually matter for your selection.
                </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Award className="h-10 w-10 text-yellow-500" />
                <div>
                    <p className="font-bold text-slate-900">Exam-Focused Content</p>
                    <p className="text-sm text-slate-500">Curated based on real exam experience</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};