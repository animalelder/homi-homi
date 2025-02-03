const Footer = () => {
  return (
    <div className="bg-deepBlue px-6 py-2 text-white sm:px-10 lg:px-20">
      {/* Top Section */}
      <div className="mb-8 mt-10 flex flex-col items-center justify-between lg:flex-row">
        <p className="mb-6 text-center text-xl font-light sm:text-2xl lg:mb-0 lg:max-w-[40%] lg:text-left">
          Choose HOMI for great apartments and roommate matching
        </p>
        <button className="bg-primaryGreen rounded-full px-6 py-2 text-white">
          Contact Us
        </button>
      </div>

      <hr className="mb-8 border-gray-500" />

      {/* Social Icons and Links */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Social Icons */}
        <div className="mb-8 flex justify-center gap-4 lg:mb-0 lg:justify-start">
          <img src="/instagram.png" alt="Instagram" className="h-8 w-8" />
          <img src="/linkedin-box.png" alt="LinkedIn" className="h-8 w-8" />
          <img src="/pinterest.png" alt="Pinterest" className="h-8 w-8" />
          <img src="/twitter.png" alt="Twitter" className="h-8 w-8" />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 text-center text-sm sm:grid-cols-4 lg:text-left">
          <div>
            <p className="mb-2 font-semibold text-deepGreen">Services</p>
            <ul className="space-y-2">
              <li>Roommate matching</li>
              <li>Property Search</li>
              <li>Lease Signing</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-deepGreen">Resources</p>
            <ul className="space-y-2">
              <li>Tenant Qualification</li>
              <li>Roommates </li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-deepGreen">Support</p>
            <ul className="space-y-2">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-deepGreen">Company</p>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo at the extreme bottom */}
      <div className="mb-0 mt-12 flex justify-center">
        <img src="/homi.png" alt="Homi Logo" className="h-auto w-auto" />
      </div>
    </div>
  );
};

export default Footer;
