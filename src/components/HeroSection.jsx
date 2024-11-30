import React from 'react';
import { Button } from '../components/ui';
import { Input } from '../components/ui';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">BRINGING YOU THE PERFECT JOB</h1>
      <p className="text-xl mb-8">11,000+ JOBS to Apply</p>
      <div className="flex items-center">
        <Input placeholder="Search Jobs Now" className="flex-1 mr-4" />
        <Button className="bg-yellow-500 text-blue-500 px-6 py-3 rounded-md">
          Search
        </Button>
        <Button className="bg-white text-blue-500 px-6 py-3 rounded-md ml-4">
          Register For FREE
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;