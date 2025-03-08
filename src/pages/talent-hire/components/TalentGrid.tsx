import { useState } from 'react';
import { talentData } from '../data/talentData';
import TalentCard from './TalentCard';
import TalentFilter from './TalentFilter';

export default function TalentGrid() {
  const [selectedService, setSelectedService] = useState('all');

  const filteredTalent = selectedService === 'all'
    ? talentData
    : talentData.filter(talent => talent.service === selectedService);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalentFilter
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredTalent.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </div>
    </div>
  );
}