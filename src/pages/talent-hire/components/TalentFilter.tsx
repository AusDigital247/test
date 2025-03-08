interface TalentFilterProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export default function TalentFilter({ selectedService, onServiceChange }: TalentFilterProps) {
  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Integration' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Engineering' }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceChange(service.id)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all
            ${selectedService === service.id
              ? 'bg-[#3DD2F0] text-[#0B0F17]'
              : 'bg-[#3DD2F0]/10 text-[#3DD2F0] hover:bg-[#3DD2F0]/20'
            }`}
        >
          {service.name}
        </button>
      ))}
    </div>
  );
}