import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import User from "../user/user";
import './nevbar.css'
import Bag from "../Bag/bage";
import Search from "../../Pages/Search/search";
import ProductTop from "../Product/product";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserModel, setShowUserModel] = useState(false);
  const [showBagModal, setShowBagModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleUserIconClick = () => {
    setShowUserModel(true);
  };

  const onSearchClick = () => {
    setShowSearchModal(true);
  };

  const onCartClick = () => {
    setShowBagModal(true);
  };

  const closeModals = () => {
    setShowUserModel(false);
    setShowBagModal(false);
    setShowSearchModal(false);
    setShowProductModal(false);
  };

  const onProductClick = () => {
    setShowProductModal(true);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <FaBars />
      </button>

      <div className={`nav-container ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li onClick={onProductClick} style={{ cursor: 'pointer',fontSize:"20px"}}>
            Products
          </li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">Faq</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <ul className="nav-linkss">
        <li onClick={onSearchClick} style={{ cursor: 'pointer' }}> <img src="/search-normal.svg" alt="search" /></li>
        <li onClick={onCartClick}><img src="/bag.svg" alt="bag" /></li>
        <li onClick={handleUserIconClick}><img src="/user.svg" alt="user" /></li>
      </ul>

      {showUserModel && (
        <div onClick={closeModals}>
          <User />
        </div>
      )}

      {showBagModal && (
        <div onClick={closeModals}>
          <Bag />
        </div>
      )}
      {showSearchModal && (
        <div onClick={closeModals}>
          <Search />
        </div>
      )}
      {showProductModal && (
        <div onClick={closeModals}>
          <ProductTop />
        </div>
      )}
    </nav>
  );
};

export default Navbar;