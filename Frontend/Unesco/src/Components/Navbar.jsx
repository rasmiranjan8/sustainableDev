import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-primary p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        Environment Friendly
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-green-light">Home</Link>
        <Link to="/signup" className="text-white hover:text-green-light">Signup</Link>
        <Link to="/login" className="text-white hover:text-green-light">Login</Link>
        <Link to="/products" className="text-white hover:text-green-light">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
