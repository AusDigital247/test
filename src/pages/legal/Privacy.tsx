import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye } from 'lucide-react';
import ContentSection from '../../components/shared/ContentSection';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AUS Digital</title>
        <meta name="description" content="Learn about AUS Digital's privacy policy and how we protect your personal information." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Privacy Policy"
          variant="light"
        >
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Shield className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Information Collection
              </h2>
              <p>We collect information that you provide directly to us when using our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Lock className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Data Security
              </h2>
              <p>We implement security measures to protect your information from unauthorized access.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Eye className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Information Usage
              </h2>
              <p>We use collected information to provide and improve our services.</p>
            </section>
          </div>
        </ContentSection>
      </div>
    </>
  );
}