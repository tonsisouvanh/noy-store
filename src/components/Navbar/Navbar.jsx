import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Link as LinkScroll } from "react-scroll";
// SYLE
import "./Navbar.css";

// IMAGES
import zoom from "../../image/zoom.png";
import man from "../../image/man.png";
import cart from "../../image/shopping-cart.png";
import call from "../../image/outgoing-call.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const clickHandle = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };
  const handleSubmenu = () => {
    setToggleSubmenu(!toggleSubmenu);
  };
  return (
    <>
      <div className="nav-container">
        <div className={click ? "mobile-nav mobile-nav-active" : "mobile-nav"}>
          {/* MOBILR */}
          <i
            onClick={clickHandle}
            id="menu-icon-active"
            class="fas fa-times"
          ></i>
          <ul className="mb-menu-links">
            <NavLink
              onClick={closeMenu}
              exact
              to="/"
              className="mb-link"
              activeClassName="home-active"
            >
              <li>ໜ້າຫລັກ</li>
            </NavLink>
            <div className="mb-link">
              <li onClick={handleSubmenu}>
                ເສື້ອຜ້າ
                <span>
                  <i
                    id={toggleSubmenu ? "angle-up-rotate" : ""}
                    class="fas fa-angle-up"
                  ></i>
                </span>
                <ul
                  className={
                    toggleSubmenu
                      ? "sub-menu-link sub-menu-active"
                      : "sub-menu-link"
                  }
                >
                  <li>
                    <NavLink
                      onClick={closeMenu}
                      exact
                      to="/page/products/all"
                      className="sub-link"
                      activeClassName="home-active"
                    >
                      ທັງໝົດ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeMenu}
                      exact
                      to="/page/products/female"
                      className="sub-link"
                      activeClassName="home-active"
                    >
                      ຍິງ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={closeMenu}
                      exact
                      to="/page/products/male"
                      className="sub-link"
                      activeClassName="home-active"
                    >
                      ຊາຍ
                    </NavLink>
                  </li>
                </ul>
              </li>
            </div>
            <LinkScroll
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mb-link"
              onClick={closeMenu}
            >
              <li>ຕິດຕໍ່</li>
            </LinkScroll>
            {/* <NavLink
              onClick={closeMenu}
              exact
              to="#"
              className="mb-link"
              activeClassName="home-active"
            >
              <li>ກ່ຽວກັບ</li>
            </NavLink> */}
          </ul>
        </div>
        <div className="logo-container">
          <i
            onClick={clickHandle}
            id="menu-icon-active"
            class="fas fa-bars"
          ></i>
          <p>MeShop</p>
        </div>

        {/* <i id="active" class="fas fa-times"></i> */}
        <div className="menu-container">
          <ul className="menu-links">
            <NavLink
              exact
              to="/"
              className="link"
              activeClassName="home-active"
            >
              <li>ໜ້າຫລັກ</li>
            </NavLink>
            <NavLink
              exact
              to="/page/products/all"
              className="link"
              activeClassName="home-active"
            >
              <li>ທັງໝົດ</li>
            </NavLink>
            <NavLink
              exact
              to="/page/products/female"
              className="link"
              activeClassName="home-active"
            >
              <li>ຍິງ</li>
            </NavLink>
            <NavLink
              exact
              to="/page/products/male"
              className="link"
              activeClassName="home-active"
            >
              <li>ຊາຍ</li>
            </NavLink>
            <LinkScroll
              activeClass="nav-link-active"
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="link"
            >
              <li>ຕິດຕໍ່</li>
            </LinkScroll>
            {/* <NavLink exact to="#" className="link" activeClassName="home-active">
              <li>ກ່ຽວກັບ</li>
            </NavLink> */}
          </ul>
        </div>

        <div className="search-container">
          <input type="text" className="search-box" placeholder="ຄົ້ນຫາ" />
          <img src={zoom} alt="" />
        </div>
        <div className="profile-container">
          <img src={cart} alt="" />
          <img className="call-icn" src={call} alt="" />
          <p>037500274</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
