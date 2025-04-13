
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About AUS Digital - Our Story and Mission</title>
        <meta name="description" content="Learn about AUS Digital, our mission, values, and the team behind our AI-driven software solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About AUS Digital</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            AUS Digital is a leading provider of AI-driven software solutions, helping businesses harness the power of
            artificial intelligence to drive growth and innovation.
          </p>
          <p>
            Founded in 2020, our team of experts combines deep technical expertise with business acumen to deliver
            solutions that make a real difference to our clients.
          </p>
        </div>
      </div>
    </>
  );
}
