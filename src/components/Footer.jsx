import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-16 px-10">
      <div className="container mx-auto">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About JobRinger</h3>
            <p className="text-sm">
              JobRinger is your go-to platform for finding the best job opportunities in India and across the world. Join us and connect with top employers today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/refund-cancellation" className="hover:underline">Refund / Cancellation Policy</a></li>
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Mobile App Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Download Our App</h3>
            <p className="text-sm mb-4">
              Get the JobRinger app for easy job searches and instant updates on the go.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="App Store"
                  className="w-32"
                />
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300"><i className="fab fa-facebook text-2xl"></i></a></li>
              <li><a href="#" className="hover:text-gray-300"><i className="fab fa-twitter text-2xl"></i></a></li>
              <li><a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin text-2xl"></i></a></li>
              <li><a href="#" className="hover:text-gray-300"><i className="fab fa-instagram text-2xl"></i></a></li>
              <li><a href="#" className="hover:text-gray-300"><i className="fab fa-youtube text-2xl"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white opacity-20"></div>

        {/* Bottom Section: Stats & Copyright */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-center">
          <div>
            <h4 className="text-xl font-bold">31,091</h4>
            <p>Jobs Posted</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">15,153</h4>
            <p>Jobs Filled</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">19,879</h4>
            <p>Employers</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">1,294,180</h4>
            <p>Active Users</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; 2024 JobRinger. All Rights Reserved. Recognized by <span className="font-bold">#StartupIndia</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
