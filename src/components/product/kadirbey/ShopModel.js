import PropTypes from "prop-types";
import React, { useState } from "react";
import { setActiveSort } from "../../../helpers/product";

const ShopColor = ({ colors, getSortParamsModel }) => {
  const [color, setColor] = useState("Seçiniz..");
  const handleChange = (e) => {
    setColor(e.target.value);
    if ("Seçiniz.." == e.target.value) {
      getSortParamsModel("color", "");
    } else {
      getSortParamsModel("color", e.target.value);
    }
  };
  return (
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Yıl:</div>
          <div className="col-lg-9 float-left">
              <div className="row">
              <div className="col-lg-6">
            <input className="form-control" type="text" placeholder="Min"/></div>
            <div className="col-lg-6">    <input  className="form-control" type="text" placeholder="Max"/>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParamsModel: PropTypes.func,
};

export default ShopColor;
