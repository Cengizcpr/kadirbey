import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon.json";
import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle";

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid">
        <h2 className="font-weight-bold text-center" style={{color:"#58595b"}}>TAMİRCİYE <span style={{backgroundColor:"#58595b",borderRadius:"75px",color:"white",lineHeight:"100px"}} className="px-3 py-1">DEĞİL</span>  DİREK <span style={{backgroundColor:"#58595b",borderRadius:"75px",color:"white"}} className="px-3 py-1">&nbsp; EVE &nbsp;</span></h2><br/>
        <h4 style={{color:"#58595b"}} className="font-weight-bold text-center mb-5">"Bizde Her Yolculuk Memnuniyetinizle Son Bulur"</h4>
        <div className="row d-flex justify-content-center">
          {featureIconData.map(singleFeature => {
            return (
              <FeatureIconSingle
                singleFeature={singleFeature}
                key={singleFeature.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIcon;
