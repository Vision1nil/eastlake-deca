// import { motion } from 'framer-motion';

const Calendar = () => {
  const upcomingEvents = [
    {
      title: "Chapter Meeting",
      date: "June 1, 2025",
      time: "3:30 PM - 4:30 PM",
      location: "Room 204"
    },
    {
      title: "Regional Competition Workshop",
      date: "June 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Library"
    },
    {
      title: "Fundraising Committee",
      date: "June 22, 2025",
      time: "3:30 PM - 4:30 PM",
      location: "Room 204"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Calendar</h1>
        <p className="text-xl text-gray-600 mb-12">
          Stay up-to-date with Eastlake DECA events, meetings, and important deadlines.
        </p>

        <div className="bg-white shadow overflow-hidden rounded-lg mb-12">
          <div className="px-4 py-5 sm:px-6 bg-blue-600 text-white">
            <h2 className="text-xl font-bold">Upcoming Events</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-blue-600">{event.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-medium">{event.date}</span> • {event.time}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Location: {event.location}
                    </p>
                  </div>
                  <div>
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Google Calendar Integration</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              {/* Google Calendar Embed */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=agrawal.harshit260%40gmail.com&ctz=America%2FLos_Angeles" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0" 
                scrolling="no"
                title="Eastlake DECA Calendar"
                className="mx-auto"
              />
            </div>
            <p className="text-sm text-gray-500">
              Subscribe to our calendar to stay updated with all DECA events. You can add it to your personal Google Calendar by clicking the button below.
            </p>
            <div className="mt-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-800">
                Subscribe to Calendar
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Chapter Advisors</h3>
                <div className="text-gray-600">
                  <p className="font-medium">Ms. Petersen</p>
                  <p>Email: bpetersen@lwsd.org</p>
                  <p>Phone: (Need to put in)</p>
                  <p>Room: C110</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Chapter Officers</h3>
                <div className="text-gray-600">
                  <p><span className="font-medium">Co-President:</span> Sneha Sharma</p>
                  <p><span className="font-medium">Co-President:</span> Ananya Prakash</p>
                  <p><span className="font-medium">VP of Finance:</span> Harshit Agrawal</p>
                  <p><span className="font-medium">VP of Finance:</span> Anya Mahesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Calendar;