import { Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import SectionContainer from './SectionContainer';

const testimonials = [
  {
    quote: "AUS Digital transformed our customer service with their AI solution. We've seen a 45% reduction in response times.",
    author: "Sarah",
    position: "CTO, Weblona",
    rating: 5
  },
  {
    quote: "Their expertise in AI and data engineering helped us streamline our operations and reduce costs significantly.",
    author: "A Sameen",
    position: "Operations Manager",
    rating: 5
  },
  {
    quote: "The team's approach to AI integration was methodical and effective. They delivered exactly what we needed.",
    author: "Amanda",
    position: "CEO",
    rating: 5
  }
];

interface TestimonialsProps {
  variant?: 'dark' | 'light';
}

export default function Testimonials({ variant = 'dark' }: TestimonialsProps) {
  const isDark = variant === 'dark';

  return (
    <SectionContainer
      title="Client"
      highlightedText="Success Stories"
      description="See how we've helped businesses achieve their goals"
      variant={variant}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection
            key={index}
            className={`p-8 rounded-xl border transition-all ${
              isDark
                ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30'
                : 'bg-white/50 border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40 shadow-lg'
            }`}
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#3DD2F0] fill-[#3DD2F0]" />
              ))}
            </div>
            <blockquote className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              "{testimonial.quote}"
            </blockquote>
            <div className={isDark ? 'text-white' : 'text-gray-900'}>
              {testimonial.author}
            </div>
            <div className="text-[#3DD2F0]">{testimonial.position}</div>
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  );
}