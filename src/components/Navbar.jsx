import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar text-white p-4 flex justify-between items-center shadow-lg fixed top-0 w-full z-10">
      <div className="text-2xl font-bold cursor-pointer" onClick={() => setPage('home')}>
        LetsShop
      </div>
      <div className="flex space-x-6">
        <span className="cursor-pointer hover:underline" onClick={() => setPage('home')}>
          Home
        </span>
        <span className="cursor-pointer hover:underline" onClick={() => setPage('dashboard')}>
          Dashboard
        </span>
        <span className="cursor-pointer hover:underline" onClick={() => setPage('contact')}>
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;