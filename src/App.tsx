import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service Pages
import AIIntegration from './pages/services/AIIntegration';
import WebDevelopment from './pages/services/WebDevelopment';
import DataEngineering from './pages/services/DataEngineering';
import AIAgents from './pages/services/AIAgents';
import SEOServices from './pages/services/SEOServices';
import Analytics from './pages/services/Analytics';

// Company Pages
import About from './pages/company/About';
import Careers from './pages/company/Careers';
import Blog from './pages/company/Blog';
import BlogPost from './pages/company/BlogPost';
import Press from './pages/company/Press';

// Resource Pages
import Documentation from './pages/resources/Documentation';
import APIReference from './pages/resources/APIReference';
import Status from './pages/resources/Status';
import Support from './pages/resources/Support';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Security from './pages/legal/Security';
import Cookies from './pages/legal/Cookies';

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Service Routes */}
          <Route path="services">
            <Route path="ai-integration">
              <Route index element={<AIIntegration />} />
              <Route path=":location" element={<AIIntegration />} />
            </Route>
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="data-engineering" element={<DataEngineering />} />
            <Route path="ai-agents" element={<AIAgents />} />
            <Route path="seo-services" element={<SEOServices />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* Company Routes */}
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="press" element={<Press />} />

          {/* Resource Routes */}
          <Route path="docs" element={<Documentation />} />
          <Route path="api" element={<APIReference />} />
          <Route path="status" element={<Status />} />
          <Route path="support" element={<Support />} />

          {/* Legal Routes */}
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="security" element={<Security />} />
          <Route path="cookies" element={<Cookies />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}