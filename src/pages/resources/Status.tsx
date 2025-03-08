import { Helmet } from 'react-helmet-async';
import ContentSection from '../../components/shared/ContentSection';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const services = [
  {
    name: "AI API",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "None"
  },
  {
    name: "ML Pipeline",
    status: "operational",
    uptime: "99.95%",
    lastIncident: "3 days ago"
  },
  {
    name: "Data Processing",
    status: "operational",
    uptime: "99.98%",
    lastIncident: "7 days ago"
  }
];

export default function Status() {
  return (
    <>
      <Helmet>
        <title>System Status | TechnovaAI</title>
        <meta name="description" content="Check the current status of TechnovaAI's services and systems. View uptime, incidents, and maintenance schedules." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="System Status"
          variant="light"
        >
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <span className="text-lg font-medium text-emerald-700">All Systems Operational</span>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">Operational</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Uptime</div>
                      <div className="font-semibold text-emerald-600">{service.uptime}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Last incident: {service.lastIncident}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}