import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 shadow-md">
      <div className="container mx-auto px-10">
        <ul className="flex justify-end gap-20 text-white font-medium py-4">
          <li className="cursor-pointer hover:text-gray-200 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
