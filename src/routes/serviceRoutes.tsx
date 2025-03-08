import { Route } from 'react-router-dom';
import AIIntegration from '../pages/services/AIIntegration';
import WebDevelopment from '../pages/services/WebDevelopment';
import DataEngineering from '../pages/services/DataEngineering';
import AIAgents from '../pages/services/AIAgents';
import SEOServices from '../pages/services/SEOServices';
import Analytics from '../pages/services/Analytics';

export const serviceRoutes = (
  <Route path="services">
    {/* AI Integration Routes */}
    <Route path="ai-integration">
      <Route index element={<AIIntegration />} />
      <Route path=":location" element={<AIIntegration />} />
    </Route>

    {/* Web Development Routes */}
    <Route path="web-development">
      <Route index element={<WebDevelopment />} />
      <Route path=":location" element={<WebDevelopment />} />
    </Route>

    {/* Data Engineering Routes */}
    <Route path="data-engineering">
      <Route index element={<DataEngineering />} />
      <Route path=":location" element={<DataEngineering />} />
    </Route>

    {/* AI Agents Routes */}
    <Route path="ai-agents">
      <Route index element={<AIAgents />} />
      <Route path=":location" element={<AIAgents />} />
    </Route>

    {/* Analytics Routes */}
    <Route path="analytics">
      <Route index element={<Analytics />} />
      <Route path=":location" element={<Analytics />} />
    </Route>

    {/* SEO Services Routes */}
    <Route path="seo-services">
      <Route index element={<SEOServices />} />
      <Route path=":location" element={<SEOServices />} />
    </Route>
  </Route>
);