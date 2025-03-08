import { ReactNode } from 'react';

interface Step {
  title: string;
  description: string;
}

interface ImplementationStepsProps {
  title: string;
  steps: Step[];
}

export function ImplementationSteps({ title, steps }: ImplementationStepsProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              {index + 1}
            </div>
            <div>
              <div className="font-medium mb-1">{step.title}</div>
              <div className="text-gray-600">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}