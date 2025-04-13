
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About AUS Digital - Our Story and Mission</title>
        <meta name="description" content="Learn about AUS Digital, our mission, values, and the team behind our AI-driven software solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About AUS Digital</h1>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl">
                AUS Digital is a leading provider of AI-driven software solutions, helping businesses harness the power of
                artificial intelligence to drive growth and innovation.
              </p>
              <p>
                Founded in 2020, our team of experts combines deep technical expertise with business acumen to deliver
                solutions that make a real difference to our clients.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to democratize access to AI technologies, making them accessible and useful for businesses of all sizes.
                We believe that AI should be a tool that enhances human capabilities, not replaces them.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gradient-to-r from-[#3DD2F0]/10 to-[#5D9EF0]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#3DD2F0]/20">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#3DD2F0] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0B0F17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3DD2F0]">Innovation</h3>
                    <p className="text-gray-300">We're constantly pushing the boundaries of what's possible with AI.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3DD2F0] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0B0F17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3DD2F0]">Integrity</h3>
                    <p className="text-gray-300">We believe in ethical AI development and transparent business practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3DD2F0] rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0B0F17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3DD2F0]">Client Success</h3>
                    <p className="text-gray-300">Your success is our success. We're committed to delivering results.</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
