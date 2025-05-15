import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/competition" className="hover:text-blue-300">Competition</Link></li>
              <li><Link to="/resources" className="hover:text-blue-300">Resources</Link></li>
              <li><Link to="/get-involved" className="hover:text-blue-300">Get Involved</Link></li>
              <li><Link to="/calendar" className="hover:text-blue-300">Calendar</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Eastlake High School</p>
            <p>400 228th Ave NE, Sammamish, WA 98074</p>
            <p className="mt-2">Email: <a href="mailto:eastlakedeca@lwsd.org" className="hover:text-blue-300">eastlakedeca@lwsd.org</a></p>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
              <a href="#" className="hover:text-blue-300">Instagram</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Eastlake DECA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;