import { Helmet } from 'react-helmet-async';
import ContentSection from '../../components/shared/ContentSection';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pressReleases = [
  {
    title: "AUS Digital Launches Revolutionary AI Platform",
    date: "March 20, 2024",
    excerpt: "Introducing a groundbreaking AI platform that transforms enterprise operations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    title: "New Software Releases planned",
    date: "March 1, 2024",
    excerpt: "New Software Releases planned",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
  }
];

export default function Press() {
  return (
    <>
      <Helmet>
        <title>Press & News | AUS Digital </title>
        <meta name="description" content="Stay updated with AUS Digital's latest news, press releases, and company announcements." />
      </Helmet>

      <div className="pt-20">
        <ContentSection
          title="Press & News"
          variant="light"
        >
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <Link 
                key={index}
                to={`/press/${release.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6 rounded-xl border border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 transition-all">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {release.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#3DD2F0] transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    <div className="flex items-center text-[#3DD2F0] font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>
      </div>
    </>
  );
}