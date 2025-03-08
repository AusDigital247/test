import { Helmet } from 'react-helmet-async';
import ContentSection from '../../components/shared/ContentSection';
import { FileText, Code, BookOpen, Terminal } from 'lucide-react';

export default function Documentation() {
  return (
    <>
      <Helmet>
        <title>Documentation | TechnovaAI Developer Resources</title>
        <meta name="description" content="Access comprehensive documentation for TechnovaAI's services and APIs. Get started with integration guides, tutorials, and best practices." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Developer Documentation"
          variant="light"
          image={{
            src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
            alt: "Developer Documentation",
            position: "right",
            hover: "zoom"
          }}
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <FileText className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                <p>Quick start guides and basic concepts</p>
              </div>
              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Code className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p>Complete API documentation and examples</p>
              </div>
              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <BookOpen className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tutorials</h3>
                <p>Step-by-step integration guides</p>
              </div>
              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Terminal className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">SDK Documentation</h3>
                <p>Language-specific SDK guides</p>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}