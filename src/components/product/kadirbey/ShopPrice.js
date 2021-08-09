import PropTypes from "prop-types";
import React, { useState } from "react";
import { setActiveSort } from "../../../helpers/product";

const ShopColor = ({ colors, getSortParams }) => {
  const [color, setColor] = useState("Seçiniz..");
  const handleChange = (e) => {
    setColor(e.target.value);
    if ("Seçiniz.." == e.target.value) {
      getSortParams("color", "");
    } else {
      getSortParams("color", e.target.value);
    }
  };
  return (
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Fiyat:</div>
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
  getSortParams: PropTypes.func,
};

export default ShopColor;
