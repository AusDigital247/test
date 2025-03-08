import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Info } from 'lucide-react';
import ContentSection from '../../components/shared/ContentSection';

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | AUS Digital</title>
        <meta name="description" content="Learn about how AUS Digital uses cookies to improve your experience." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Cookie Policy"
          variant="light"
        >
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Cookie className="w-6 h-6 text-[#3DD2F0] mr-2" />
                What Are Cookies
              </h2>
              <p>Cookies are small text files stored on your device when you visit our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Settings className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Cookie Settings
              </h2>
              <p>You can control cookies through your browser settings.</p>
            </section>

            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-semibold mb-4">
                <Info className="w-6 h-6 text-[#3DD2F0] mr-2" />
                Types of Cookies
              </h2>
              <ul>
                <li>Essential cookies for basic functionality</li>
                <li>Analytics cookies to improve our services</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </section>
          </div>
        </ContentSection>
      </div>
    </>
  );
}