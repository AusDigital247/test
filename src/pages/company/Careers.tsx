import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Brain, Code, Database } from 'lucide-react';
import ContactForm from '../../components/contact/ContactForm';

const positions = [
  {
    title: "Senior AI Engineer",
    location: "Toronto, ON",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Machine Learning Researcher",
    location: "Remote",
    type: "Full-time",
    department: "Research"
  },
  {
    title: "Full Stack Developer",
    location: "Toronto, ON",
    type: "Full-time",
    department: "Engineering"
  }
];

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Join AUS Digital</title>
        <meta name="description" content="Join AUS Digital's innovative team. Explore exciting career opportunities in AI, machine learning, and software development." />
      </Helmet>

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At AUS Digital, we're building the future of software development and artificial intelligence. Join our team of innovators, researchers, and engineers working on cutting-edge AI solutions.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#3DD2F0] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{position.location}</span>
                      <span>{position.type}</span>
                      <span>{position.department}</span>
                    </div>
                  </div>
                  <button className="text-[#3DD2F0] font-medium hover:underline">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}