import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer  style={{ backgroundPosition:"right", backgroundImage: "url(/assets/img/footer.png)",minHeight:"150px", backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",zIndex:"999"}}
      className='footer-area container-fluid d-flex align-bottom'>
            <p style={{color:"white",marginTop:"auto"}} className="ml-5">Telif Hakları Saklıdır. © 2021 Designed By{" "}<img src="/assets/img/osi.png" style={{height:"40px"}}/></p>
            <p style={{color:"white"}}>
        
        <a style={{color:"white"}} href="https://osireklamajansi.com" rel="noopener noreferrer" target="blank">
        © 2021{" "}OsiCrew
        </a>
        .<br /> All Rights Reserved
      </p>
         <img  style={{marginLeft:"auto", marginTop:"auto", marginBottom:"25px", width:"236px", height:"50px"}}  alt="" src={"assets/img/logo/logo.png"} />  
   
      <button
        className={`mb-5 scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
