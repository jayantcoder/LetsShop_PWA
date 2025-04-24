import React, { useState, useCallback } from 'react';

const ContactUsPage = ({ setPage }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = useCallback(() => console.log('Message:', message), [message]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all hover:shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-full p-3 mb-6 border rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
          Send
        </button>
        <a href="#" onClick={() => setPage('home')} className="block text-center mt-4 text-blue-600 hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ContactUsPage;