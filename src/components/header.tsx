import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white shadow-md z-50">
      <div className="text-2xl font-bold">
        <span>Houses</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition duration-300">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
