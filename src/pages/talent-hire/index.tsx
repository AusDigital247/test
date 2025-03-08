import { Helmet } from 'react-helmet-async';
import TalentHero from './components/TalentHero';
import TalentGrid from './components/TalentGrid';
import TalentCTA from './components/TalentCTA';

export default function TalentHire() {
  return (
    <>
      <Helmet>
        <title>Hire Expert Talent | TechnovaAI</title>
        <meta 
          name="description" 
          content="Access our pool of expert developers, engineers, and consultants for your next project. Find the right talent for AI, web development, and data engineering." 
        />
      </Helmet>

      <div className="min-h-screen bg-[#0B0F17]">
        <TalentHero />
        <TalentGrid />
        <TalentCTA />
      </div>
    </>
  );
}