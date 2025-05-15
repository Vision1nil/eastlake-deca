
import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-4">
        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="relative overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:scale-105 group">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-center p-4 group-hover:opacity-0 transition-opacity duration-300">
              Event Photo Placeholder<br />
              (Replace with actual photo)
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <h4 className="font-bold">Event Title</h4>
              <p className="text-sm">Brief description of this DECA event</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const GetInvolved = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            There are many ways to get involved with Eastlake DECA! Explore opportunities for students, parents, and business partners.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join DECA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Leadership Development" 
              description="Build essential leadership skills through conferences, workshops, and chapter officer positions."
              icon={<svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>}
            />
            <FeatureCard 
              title="Competitive Excellence" 
              description="Showcase your skills in a variety of competitive events at the local, state, and international levels."
              icon={<svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>}
            />
            <FeatureCard 
              title="Professional Network" 
              description="Connect with business professionals, mentors, and peers who share your passion for business."
              icon={<svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>}
            />
          </div>
        </div>
        
        {/* For Students Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6">
              <h2 className="text-2xl font-bold text-white">For Students</h2>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">
                  Joining DECA offers incredible opportunities to develop business skills, leadership abilities, and professional networks. Here's how to get started:
                </p>
                <div className="bg-blue-50 rounded-lg p-6 my-6 border-l-4 border-blue-700">
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li className="font-medium">Complete the membership application (available on the Resources page)</li>
                    <li className="font-medium">Pay your membership dues</li>
                    <li className="font-medium">Attend the new member orientation</li>
                    <li className="font-medium">Choose a competitive event area that interests you</li>
                    <li className="font-medium">Start attending chapter meetings and workshops</li>
                  </ol>
                </div>
                <p className="text-lg text-gray-700 mt-4">
                  Membership is open to all Eastlake High School students interested in business, marketing, entrepreneurship, and leadership!
                </p>
                <div className="flex justify-center mt-8">
                  <a 
                    href="/resources" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
                  >
                    Apply for Membership
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wolf Pack Boosters Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6">
              <h2 className="text-2xl font-bold text-white">Wolf Pack Boosters</h2>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">
                  Wolf Pack Boosters is our parent and community support organization that helps Eastlake DECA achieve its goals through volunteering, fundraising, and mentorship.
                </p>
                
                <div className="md:flex md:gap-8 mt-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">How Parents Can Help:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Volunteer as a judge for practice competitions</li>
                      <li>Provide transportation to DECA events</li>
                      <li>Assist with fundraising activities</li>
                      <li>Share professional expertise through guest speaking</li>
                      <li>Join the Wolf Pack Boosters board</li>
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Upcoming Booster Events</h3>
                      <div className="space-y-4">
                        <div className="border-b border-blue-100 pb-3">
                          <p className="font-medium">Parent Information Night</p>
                          <p className="text-sm text-gray-600">September 15, 2025 • 7:00 PM</p>
                        </div>
                        <div className="border-b border-blue-100 pb-3">
                          <p className="font-medium">Fall Fundraising Kickoff</p>
                          <p className="text-sm text-gray-600">October 1, 2025 • 6:30 PM</p>
                        </div>
                        <div>
                          <p className="font-medium">Competition Judge Training</p>
                          <p className="text-sm text-gray-600">November 5, 2025 • 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-700 rounded-md text-white text-center">
                  <p className="text-lg font-medium mb-4">
                    Interested in joining Wolf Pack Boosters?
                  </p>
                  <a 
                    href="mailto:wolfpackboosters@eastlakedeca.org" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Past Events & Highlights</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take a look at some of our chapter's memorable moments and achievements from past events.
          </p>
          <ImageGallery />
        </div>

        {/* Business Partners Section */}
        <div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6">
              <h2 className="text-2xl font-bold text-white">Volunteers</h2>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-8">
                  We are always looking for volunteers to help our chapter. Volunteers provide valuable real-world experiences for our members through:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <svg className="h-10 w-10 text-blue-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <p className="font-medium text-gray-800">Guest Speaking Opportunities</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <svg className="h-10 w-10 text-blue-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="font-medium text-gray-800">Competition Judging</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <svg className="h-10 w-10 text-blue-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    <p className="font-medium text-gray-800">Mentorship Programs</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <svg className="h-10 w-10 text-blue-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                    <p className="font-medium text-gray-800">Job Shadowing</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <svg className="h-10 w-10 text-blue-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="font-medium text-gray-800">Sponsorships</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <svg className="h-10 w-10 text-blue-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                    </svg>
                    <p className="font-medium text-gray-800">Internships</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-white text-center">
                  <h3 className="text-xl font-bold mb-4">Become a Volunteer</h3>
                  <p className="mb-6">
                    Join our network of volunteers and help shape the next generation of business professionals.
                  </p>
                  <a 
                    href="mailto:advisor@eastlakedeca.org" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
                  >
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Member Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Sneha Sharma</h3>
                  <p className="text-blue-700">Chapter President</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "DECA has transformed my high school experience completely. The leadership skills and business knowledge I've gained have been invaluable for my college applications and future career goals."
              </blockquote>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Ananya Prakash</h3>
                  <p className="text-blue-700">President</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "Competing at ICDC was one of the highlights of my high school years. I made connections with students from around the world and learned so much about real-world business problems."
              </blockquote>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Praveena Mahendran</h3>
                  <p className="text-blue-700">Western Region Vice President</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "I never imagined how much DECA would impact my life. From day one, I found a supportive community and endless opportunities to grow. Now, as Western Region Vice President, I’ve seen how DECA helps members across the country discover their passions, develop leadership skills, and form lasting connections."
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center shadow-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Join Eastlake DECA?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't miss out on the opportunity to develop essential business skills, make valuable connections, and prepare for your future career!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/resources" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
            >
              Apply for Membership
            </a>
            <a 
              href="/calendar" 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-700 text-base font-medium rounded-md shadow-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;