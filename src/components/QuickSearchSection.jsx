import React from 'react';
import { Button } from '../components/ui';

const QuickSearchSection = () => {
  return (
    <section className="bg-cyan-200 py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Quick Job Search</h2>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
          <Button className="bg-white text-blue-500 px-4 py-2 rounded-md w-full">
            Fresher
          </Button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
          <Button className="bg-white text-blue-500 px-4 py-2 rounded-md w-full">
            Work From Home
          </Button>
        </div>
        {/* Add more quick search buttons */}
      </div>
    </section>
  );
};

export default QuickSearchSection;