
import React from 'react';
import { Link } from 'react-router-dom';

const CompetitionCluster = ({ title, description, events }) => {
  return (
    <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-blue-800 to-blue-700 px-6 py-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-700 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-blue-700">Events in this Cluster:</h4>
          </div>
          <ul className="space-y-3 pl-4">
            {events.map((event, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{event}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Competition = () => {
  const competitiveClusters = [
    {
      title: "Marketing",
      description: "Marketing events involve activities designed around the marketing functions of businesses. Students analyze marketing strategies, develop promotional plans, and demonstrate knowledge of marketing principles.",
      events: [
        "Advertising Campaign",
        "Integrated Marketing Campaign",
        "Professional Selling",
        "Retail Merchandising"
      ]
    },
    {
      title: "Finance",
      description: "Finance events focus on accounting, financial services, and financial management. Students analyze financial statements, develop investment strategies, and demonstrate knowledge of financial principles.",
      events: [
        "Accounting Applications",
        "Business Finance",
        "Financial Consulting",
        "Financial Services"
      ]
    },
    {
      title: "Hospitality & Tourism",
      description: "Hospitality & Tourism events concentrate on the hospitality industry including hotels, restaurants, and tourism. Students develop marketing plans, customer service strategies, and operational plans.",
      events: [
        "Hotel & Lodging Management",
        "Quick Serve Restaurant Management",
        "Restaurant & Food Service Management",
        "Travel & Tourism"
      ]
    },
    {
      title: "Business Management & Administration",
      description: "Business Management events involve planning, organizing, directing, and evaluating business functions essential to efficient and productive operations.",
      events: [
        "Business Law & Ethics",
        "Human Resources Management",
        "Business Solutions Project",
        "Start-Up Business Plan"
      ]
    },
    {
      title: "Entrepreneurship",
      description: "Entrepreneurship events focus on business development, business plans, and innovative business ideas. Students create and present business plans and demonstrate entrepreneurial knowledge.",
      events: [
        "Entrepreneurship",
        "Franchise Business Plan",
        "Independent Business Plan",
        "Innovation Plan"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Competitive Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            DECA's Competitive Events Program is an integral part of the organization, providing members opportunities to demonstrate their knowledge and skills in various business areas.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-lg mb-12 transform transition-all duration-300 hover:shadow-xl">
          <div className="md:flex items-center">
            <div className="md:flex-1 mb-4 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Competition Resources</h2>
              <p className="text-blue-100">
                Preparing for DECA competitions requires dedication and practice. Access our comprehensive resources to help you succeed in your competitive events!
              </p>
            </div>
            <div className="md:w-auto">
              <Link 
                to="/resources" 
                className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-md hover:bg-blue-50 transition-colors duration-300 shadow-md"
              >
                Access Resources →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Competition Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Competition Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 relative">
              {/* Item 1 */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-700 text-white rounded-full h-10 w-10 flex items-center justify-center z-10">1</div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl border-l-4 border-blue-700">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Chapter Competitions</h3>
                  <p className="text-gray-600">
                    Participate in local chapter competitions to practice your skills and prepare for higher level events.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-700 text-white rounded-full h-10 w-10 flex items-center justify-center z-10">2</div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl border-l-4 border-blue-700">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Regional Competitions</h3>
                  <p className="text-gray-600">
                    Compete against other DECA chapters in your region, with top performers advancing to state.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-700 text-white rounded-full h-10 w-10 flex items-center justify-center z-10">3</div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl border-l-4 border-blue-700">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">State Career Development Conference</h3>
                  <p className="text-gray-600">
                    Washington DECA's premier state-level competition, held annually with thousands of participants.
                  </p>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-700 text-white rounded-full h-10 w-10 flex items-center justify-center z-10">4</div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl border-l-4 border-blue-700">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">International Career Development Conference</h3>
                  <p className="text-gray-600">
                    The ultimate DECA competition, bringing together the best performers from across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Competition Clusters */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Competitive Clusters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitiveClusters.map((cluster) => (
            <div key={cluster.title}>
              <CompetitionCluster 
                title={cluster.title} 
                description={cluster.description}
                events={cluster.events}
              />
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Compete?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Eastlake DECA today to participate in these exciting competitive events and develop skills for your future career!
          </p>
          <Link 
            to="/get-involved" 
            className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-md"
          >
            Join Eastlake DECA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Competition;