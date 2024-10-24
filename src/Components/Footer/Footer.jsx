import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook-app-symbol.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>

      <div className="sec-holder">
        <div className="sec">
          <span>Audio Description</span>
          <span>Investor Relations</span>
          <span>Legal Notices</span>
          <span className="boxborder">Service Code</span>
          <p>&copy; 1997 -2024 Netflix,inc </p>
        </div>

        <div className="sec">
          <span>Help Center</span>
          <span>Jobs</span>
          <span>Cookies Prefernce</span>
        </div>

        <div className="sec">
          <span>Gift Cards</span>
          <span>Terms of User</span>
          <span>Corporate Information</span>
        </div>

        <div className="sec">
          <span>Media Center</span>
          <span>Privacy</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
