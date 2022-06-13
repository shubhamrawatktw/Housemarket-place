import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex h-16 px-5 bg-blue-400 shadow-lg items-center text-xl justify-between">
      <Link to="/">
        <h2>Young Houses</h2>
      </Link>
      <ul className="flex space-x-5 ">
        <Link to="/" className="hover:text-white duration-300 ease-linear">Explore</Link>
        <Link to="/explore" className="hover:text-white duration-300 ease-linear">Offers</Link>
        <Link to="/profile" className="hover:text-white duration-300 ease-linear">Profile</Link>
      </ul>
    </nav>
  );
};

export default Header;
