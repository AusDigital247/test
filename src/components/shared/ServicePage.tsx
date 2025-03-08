import { Helmet } from 'react-helmet-async';
import SectionContainer from '../sections/SectionContainer';
import CTA from '../sections/CTA';

interface ServicePageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ServicePage({ title, description, children }: ServicePageProps) {
  return (
    <>
      <Helmet>
        <title>{title} | TechnovaAI</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="pt-20">
        <SectionContainer
          title={title}
          highlightedText="Service"
          description={description}
          variant="light"
        >
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </SectionContainer>
        <CTA variant="dark" />
      </div>
    </>
  );
}