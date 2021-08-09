import PropTypes from "prop-types";
import React from "react";

const FeatureIconSingle = ({ singleFeature }) => {
  return (
    <div className="col-lg-2 col-sm-6 mt-5">
      <div className="support-wrap mb-30">
        <div className="support-icon">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + singleFeature.image}
            alt=""
            style={{width:"75px"}}
          />
        </div>
        <div className="support-content">
          <h3 className=" font-weight-bold" style={{color:"#DCE2E3", fontSize:"40px"}}>{singleFeature.title}</h3>
          <p className="font-weight-bold" style={{fontSize:"16px"}}>{singleFeature.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  singleFeature: PropTypes.object
};

export default FeatureIconSingle;
