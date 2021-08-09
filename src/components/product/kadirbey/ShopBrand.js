import PropTypes from "prop-types";
import React, { useState } from "react";
import { setActiveSort } from "../../../helpers/product";

const ShopColor = ({ brands, getSortParamsBrand }) => {
  console.log(brands)
  const [color, setColor] = useState("Seçiniz..");
  const handleChange = (e) => {
    setColor(e.target.value);
    if ("Seçiniz.." == e.target.value) {
      getSortParamsBrand("brands", "");
    } else {
      getSortParamsBrand("brands", e.target.value);
    }
  };
  return (
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Marka:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" onChange={handleChange}>
              <option>Seçiniz..</option>
              {brands.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  brands: PropTypes.array,
  getSortParamsBrand: PropTypes.func,
};

export default ShopColor;
