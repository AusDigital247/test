import Hero from '../components/hero';
import { Stats, Features, Services, Process, Testimonials, CTA } from '../components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats variant="light" />
      <Features variant="dark" />
      <Services variant="light" />
      <Process variant="dark" />
      <Testimonials variant="light" />
      <CTA variant="dark" />
    </>
  );
}