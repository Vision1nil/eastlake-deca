import React from 'react';

const ResourceCard = ({ title, description, comingSoon = false }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-600">
          <p>{description}</p>
        </div>
        <div className="mt-3 text-sm">
          {comingSoon ? (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Coming Soon
            </span>
          ) : (
            <a href="#" className="font-medium text-blue-600 hover:text-blue-900">
              Download <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Resources = () => {
  const membershipResources = [
    {
      title: "Membership Application",
      description: "Complete this form to join Eastlake DECA for the current school year."
    },
    {
      title: "Membership Dues Information",
      description: "Details about membership dues and payment deadlines."
    },
    {
      title: "Parent Permission Form",
      description: "Required form for all DECA activities and competitions."
    }
  ];

  const competitionResources = [
    {
      title: "Competition Preparation Guide",
      description: "Essential tips and strategies for preparing for DECA competitions."
    },
    {
      title: "Role Play Examples",
      description: "Sample role plays with exemplary responses for practice."
    },
    {
      title: "Written Event Templates",
      description: "Templates for written events including business plans and marketing campaigns."
    },
    {
      title: "Exam Study Guides",
      description: "Study materials for the cluster exams in all competitive areas.",
      comingSoon: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources</h1>
        <p className="text-xl text-gray-600 mb-12">
          Access the resources you need to succeed in DECA, from membership forms to competition preparation materials.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Membership Forms</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {membershipResources.map((resource) => (
              <div key={resource.title}>
                <ResourceCard 
                  title={resource.title} 
                  description={resource.description}
                  comingSoon={resource.comingSoon}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Competition Resources</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competitionResources.map((resource) => (
              <div key={resource.title}>
                <ResourceCard 
                  title={resource.title} 
                  description={resource.description}
                  comingSoon={resource.comingSoon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;