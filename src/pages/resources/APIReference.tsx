import { Helmet } from 'react-helmet-async';
import ContentSection from '../../components/shared/ContentSection';
import { Code, Terminal, Database, Shield } from 'lucide-react';

export default function APIReference() {
  return (
    <>
      <Helmet>
        <title>API Reference | TechnovaAI Developer Resources</title>
        <meta name="description" content="Complete API documentation for TechnovaAI's services. Access endpoints, authentication guides, and code examples." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="API Reference"
          variant="light"
        >
          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-[#3DD2F0]/20">
              <h2 className="text-xl font-semibold mb-4">Authentication</h2>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                <pre>
                  <code>{`curl -X POST https://api.technovaai.com/v1/auth \
  -H "Content-Type: application/json" \
  -d '{"api_key": "your_api_key"}'`}</code>
                </pre>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Code className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">REST API</h3>
                <p className="text-gray-600 mb-4">Complete REST API documentation with examples</p>
                <a href="#" className="text-[#3DD2F0] font-medium hover:underline">View Documentation</a>
              </div>

              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Terminal className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">CLI Tools</h3>
                <p className="text-gray-600 mb-4">Command-line interface documentation</p>
                <a href="#" className="text-[#3DD2F0] font-medium hover:underline">View Documentation</a>
              </div>

              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Database className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Models</h3>
                <p className="text-gray-600 mb-4">Database schema and model documentation</p>
                <a href="#" className="text-[#3DD2F0] font-medium hover:underline">View Documentation</a>
              </div>

              <div className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                <Shield className="w-8 h-8 text-[#3DD2F0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-600 mb-4">Security best practices and guidelines</p>
                <a href="#" className="text-[#3DD2F0] font-medium hover:underline">View Documentation</a>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}