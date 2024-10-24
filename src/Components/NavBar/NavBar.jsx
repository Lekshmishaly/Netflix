import React from "react";
import "./NavBar.css";
import search from "../../assets/search.png";
import active from "../../assets/active.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav1">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <ul>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="nav2">
        <ul>
          <li>
            <img src={search} alt="" />
          </li>
          <li>Children</li>
          <li>
            <img src={active} alt="" />
          </li>
        </ul>
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
