import React from 'react';

const Footer = ({ setPage }) => (
  <footer className="footer text-white p-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">LetsShop</h3>
        <p className="text-sm">Your one-stop shop for premium products.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" onClick={() => setPage('home')} className="hover:text-yellow-300">Home</a></li>
          <li><a href="#" onClick={() => setPage('contact')} className="hover:text-yellow-300">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Support</h3>
        <p className="text-sm">Email: support@LetsShop.com</p>
        <p className="text-sm">Phone: +1-800-LetsShop</p>
      </div>
    </div>
    <p className="text-center text-sm mt-6">© 2025 LetsShop. All rights reserved.</p>
  </footer>
);

export default React.memo(Footer);