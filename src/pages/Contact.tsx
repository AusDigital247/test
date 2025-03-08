import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from '../components/contact/ContactForm';

// Initialize EmailJS
emailjs.init('6vDCu_2M5GBml04zd');

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoData, setDemoData] = useState({
    subject: '',
    message: '',
    isDemo: false
  });

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_iibnkdq',
        'template_n8raug8',
        {
          to_email: 'contact@ausdigital247.com',
          from_name: formData.name,
          from_email: formData.email,
          website: formData.website,
          subject: formData.isDemo ? 'Demo Request: ' + formData.subject : formData.subject,
          message: `${formData.isDemo ? 'Demo Request\n\n' : ''}${formData.message}`,
        },
        '6vDCu_2M5GBml04zd'
      );

      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoClick = () => {
    setDemoData({
      subject: 'Request for Demo',
      message: 'I would like to schedule a demo to learn more about AUS Digital solutions.',
      isDemo: true
    });
    // Scroll to form
    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AUS Digital</title>
        <meta name="description" content="Get in touch with AUS Digital. Contact us for inquiries about our AI solutions and services." />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#3DD2F0]/20">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h1>
              <ContactForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                initialData={demoData}
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#3DD2F0] mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@ausdigital247.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0F17] text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-6">
                  Schedule a free consultation to discuss how our AI solutions can help your business grow.
                </p>
                <button 
                  onClick={handleDemoClick}
                  className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] text-white py-3 px-6 rounded-lg
                    hover:from-[#2CC1E0] hover:to-[#4C8DE0] transition-all"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-right" />
      </div>
    </>
  );
}