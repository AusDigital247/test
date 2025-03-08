import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { Talent } from '../types';
import ContactForm from '../../../components/contact/ContactForm';

interface TalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  talent: Talent;
}

export default function TalentModal({ isOpen, onClose, talent }: TalentModalProps) {
  const handleSubmit = async (formData: any) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <Dialog.Title className="text-2xl font-bold">
              Request {talent.name}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <ContactForm
            onSubmit={handleSubmit}
            isSubmitting={false}
            initialData={{
              subject: `Talent Request: ${talent.id} - ${talent.name}`,
              message: `I'm interested in working with ${talent.name} (${talent.id}) for my project.`
            }}
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}