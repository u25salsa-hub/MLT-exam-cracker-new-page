import React from 'react';
import { BookOpen, Check, Layers, Zap, Target } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-teal-600" />,
      title: "1000+ High-Yield MCQs",
      description: "Carefully selected questions for AIIMS CRE, DSSSB, Railway, and ESIC exams. Don't waste time on irrelevant questions."
    },
    {
      icon: <Zap className="h-6 w-6 text-teal-600" />,
      title: "Updated AIIMS Pattern",
      description: "Content strictly based on the latest 2024-2025 exam trends to keep you ahead of the competition."
    },
    {
      icon: <Layers className="h-6 w-6 text-teal-600" />,
      title: "Subject-Wise Focus",
      description: "Dedicated sections for Hematology, Microbiology, Biochemistry, and more for structured revision."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-teal-600" />,
      title: "Simplified Explanations",
      description: "Understand the 'why' behind every answer. We break down complex concepts into easy-to-remember points."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-teal-400 font-bold text-lg uppercase tracking-wider mb-2">The Solution</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Get Everything You Need <br /> To Succeed for Just ₹249
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Stop juggling multiple heavy textbooks. We've condensed the most critical information into one powerful resource designed for speed and retention.
            </p>
            
            <ul className="space-y-4">
                {[
                    "Proven Strategy for Government Exams",
                    "Mobile-Friendly PDF Format",
                    "Instant Download After Payment"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-200">
                        <span className="flex-shrink-0 bg-teal-600 rounded-full p-1 mr-3">
                            <Check className="h-3 w-3 text-white" />
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-teal-500 transition-colors duration-300">
                <div className="bg-slate-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};