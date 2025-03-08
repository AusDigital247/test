import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

export default function DataEngineeringCaseStudy({
  title,
  client,
  challenge,
  solution,
  results,
  techStack
}: CaseStudyProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-[#3DD2F0]/20">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-sm text-[#3DD2F0] mb-4">{client}</div>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold mb-2">Challenge</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-2">Results</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <ArrowRight className="w-4 h-4 text-[#3DD2F0] mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{result}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#3DD2F0]/10 text-[#3DD2F0] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}