import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Server } from 'lucide-react';
import ContentSection from '../../components/shared/ContentSection';

export default function Security() {
  return (
    <>
      <Helmet>
        <title>Security | AUS Digital</title>
        <meta name="description" content="Learn about AUS Digital's security measures and data protection." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Security Measures"
          variant="light"
        >
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Shield className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Data Protection
              </h2>
              <p>We implement comprehensive security measures to protect your data.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Lock className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Access Control
              </h2>
              <p>We maintain strict access controls and authentication procedures.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Server className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Infrastructure Security
              </h2>
              <p>Our infrastructure is protected by industry-standard security protocols.</p>
            </section>
          </div>
        </ContentSection>
      </div>
    </>
  );
}