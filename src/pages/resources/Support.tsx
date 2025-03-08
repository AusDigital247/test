import { Helmet } from 'react-helmet-async';
import ContentSection from '../../components/shared/ContentSection';
import { MessageCircle, Mail } from 'lucide-react';

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support | AUS Digital Customer Service</title>
        <meta name="description" content="Get help with AUS Digital's products and services. Access customer support, documentation, and troubleshooting guides." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Customer Support"
          variant="light"
          image={{
            src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
            alt: "Customer Support",
            position: "right",
            hover: "glow"
          }}
        >
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">
              Our dedicated support team is here to help you succeed with AUS Digital's solutions.
            </p>

            <div className="grid gap-6">
              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <MessageCircle className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat Support</h3>
                <p className="text-gray-600 mb-4">Get instant help from our technical experts</p>
                <button className="text-[#3DD2F0] font-medium hover:underline">Start Chat</button>
              </div>

              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Mail className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Response within 24 hours</p>
                <a href="mailto:contact@ausdigital247.com" className="text-[#3DD2F0] font-medium hover:underline">
                  contact@ausdigital247.com
                </a>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}