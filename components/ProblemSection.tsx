import React from 'react';
import { AlertTriangle, BookX, BrainCircuit, TrendingDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <BookX className="h-8 w-8 text-red-500" />,
      title: "Vast & Confusing Syllabus",
      text: "Feeling overwhelmed by the sheer volume of topics? Most students fail because they don't know what to focus on."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-orange-500" />,
      title: "Outdated Study Material",
      text: "Traditional textbooks are often years behind the current exam patterns, causing you to study irrelevant topics."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-purple-500" />,
      title: "Lack of Proper Revision",
      text: "Without targeted MCQs and mock tests, retaining information for the exam day becomes nearly impossible."
    }
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block p-3 rounded-full bg-red-100 text-red-600 mb-4">
            <AlertTriangle className="h-8 w-8 mx-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Is This Stopping You From Your Dream Job?
          </h2>
          <p className="text-lg text-slate-600">
            Many talented students study hard but fail to clear the exam. The reason isn't lack of effort—it's <span className="font-semibold text-slate-900">ineffective preparation</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-6 p-4 bg-slate-50 rounded-xl inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};