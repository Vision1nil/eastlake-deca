import React from 'react';

const WhatIsDeca = () => {
  return (
    <section id="what-is-deca" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What is <span className="text-blue-700">DECA</span>?
          </h2>
          <div className="mt-8 mx-auto max-w-3xl text-lg text-gray-600">
            <p>
              DECA (Distributive Education Clubs of America) is an international career and technical student organization that prepares emerging leaders and entrepreneurs in marketing, finance, hospitality, and management.
            </p>
            <p className="mt-4">
              With over 225,000 members across 3,700 high school chapters, DECA provides authentic, experiential learning opportunities aligned with industries around the globe. Students develop skills for college and careers through competitive events, leadership development, and community service.
            </p>
            <p className="mt-4">
              DECA's comprehensive learning program integrates into classroom instruction, applies learning through project-based activities, connects to business, and promotes competition.
            </p>
          </div>
          <div className="mt-10 inline-block bg-blue-50 px-8 py-6 rounded-lg border-l-4 border-blue-700">
            <p className="text-lg text-blue-900 font-medium italic">
              "DECA prepares emerging leaders and entrepreneurs for careers in marketing, finance, hospitality, and management."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDeca;