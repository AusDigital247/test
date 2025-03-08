import { useState } from 'react';
import { Send } from 'lucide-react';
import { validateForm } from '../../utils/validation';
import toast from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  name: string;
  email: string;
  website: string;
  subject: string;
  message: string;
  isDemo?: boolean;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  initialData?: Partial<FormData>;
}

export default function ContactForm({ onSubmit, isSubmitting, initialData = {} }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: initialData.name || '',
    email: initialData.email || '',
    website: initialData.website || '',
    subject: initialData.subject || '',
    message: initialData.message || '',
    isDemo: initialData.isDemo || false
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    if (!captchaValue) {
      setErrors(['Please complete the reCAPTCHA verification']);
      return;
    }

    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    try {
      await onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        website: '',
        subject: '',
        message: '',
        isDemo: false
      });
      setCaptchaValue(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.length > 0 && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          <ul className="list-disc pl-4">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#3DD2F0] focus:border-[#3DD2F0] text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#3DD2F0] focus:border-[#3DD2F0] text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
          Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://"
          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#3DD2F0] focus:border-[#3DD2F0] text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#3DD2F0] focus:border-[#3DD2F0] text-gray-900"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#3DD2F0] focus:border-[#3DD2F0] text-gray-900"
        />
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey="6LeJ6aYqAAAAAHvxd95bFxNJunc9UsTQotU5fq96"
          onChange={(value) => setCaptchaValue(value)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !captchaValue}
        className="w-full bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] text-white py-3 px-6 rounded-lg
          flex items-center justify-center space-x-2 hover:from-[#2CC1E0] hover:to-[#4C8DE0]
          disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}