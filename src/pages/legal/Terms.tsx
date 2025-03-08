import { Helmet } from 'react-helmet-async';
import { Scale, FileText, AlertCircle } from 'lucide-react';
import ContentSection from '../../components/shared/ContentSection';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | AUS Digital</title>
        <meta name="description" content="Read AUS Digital's terms of service and user agreements." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Terms of Service"
          variant="light"
        >
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Scale className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Service Agreement
              </h2>
              <p>By accessing our services, you agree to these terms and conditions.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <FileText className="w-6 h-6 text-[#3DD2F0] mr-2" />
                User Responsibilities
              </h2>
              <p>Users are responsible for maintaining their account security and all activities under their account.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <AlertCircle className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Service Limitations
              </h2>
              <p>We reserve the right to modify or discontinue services at any time.</p>
            </section>
          </div>
        </ContentSection>
      </div>
    </>
  );
}