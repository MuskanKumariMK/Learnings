import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CRUD-REDUX .All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
