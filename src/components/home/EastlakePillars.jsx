import React from 'react';

const EastlakePillars = () => {
  return (
    <section className="py-14 bg-white">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Eastlake DECA Pillars
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Our chapter focuses on these core pillars to develop well-rounded business leaders.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* Pillar 1: Leadership */}
            <div className="pt-6 border border-gray-200 rounded-lg px-6 pb-8 bg-gray-50">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">Leadership</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Replace with chapter's first pillar description.
              </p>
            </div>

            {/* Pillar 2: Innovation */}
            <div className="pt-6 border border-gray-200 rounded-lg px-6 pb-8 bg-gray-50">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">Innovation</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Replace with chapter's second pillar description.
              </p>
            </div>

            {/* Pillar 3: Excellence */}
            <div className="pt-6 border border-gray-200 rounded-lg px-6 pb-8 bg-gray-50">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">Excellence</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Replace with chapter's third pillar description.
              </p>
            </div>

            {/* Pillar 4: Community */}
            <div className="pt-6 border border-gray-200 rounded-lg px-6 pb-8 bg-gray-50">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight text-center">Community</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Replace with chapter's fourth pillar description.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EastlakePillars;
