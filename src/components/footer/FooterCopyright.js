import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? 0 : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div  className="mb-0 footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img  alt="" src={"assets/img/logo/logo.png"} />
        </Link>
      </div>
    
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
