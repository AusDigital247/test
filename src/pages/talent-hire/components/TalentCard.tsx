import { useState } from 'react';
import { Talent } from '../types';
import TalentModal from './TalentModal';

interface TalentCardProps {
  talent: Talent;
}

export default function TalentCard({ talent }: TalentCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
        <div className="flex items-start space-x-4">
          <img
            src={talent.image}
            alt={talent.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">{talent.name}</h3>
            <p className="text-[#3DD2F0]">{talent.role}</p>
            <p className="text-sm text-gray-400">ID: {talent.id}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-gray-300">
            <span className="font-medium">Experience:</span> {talent.experience} years
          </p>
          <p className="text-gray-300">
            <span className="font-medium">Availability:</span> {talent.availability}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {talent.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#3DD2F0]/10 text-[#3DD2F0] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 w-full bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] text-white py-2 px-4 rounded-lg
              hover:from-[#2CC1E0] hover:to-[#4C8DE0] transition-all"
          >
            Request This Talent
          </button>
        </div>
      </div>

      <TalentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        talent={talent}
      />
    </>
  );
}