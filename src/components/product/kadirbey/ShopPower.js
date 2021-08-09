import PropTypes from "prop-types";
import React, { useState } from "react";
import { setActiveSort } from "../../../helpers/product";

const ShopPower = ({ powers, getSortParams }) => {
  const [color, setColor] = useState("Seçiniz..");
  const handleChange = (e) => {
    setColor(e.target.value);
    if ("Seçiniz.." == e.target.value) {
      getSortParams("powers", "");
    } else {
      getSortParams("powers", e.target.value);
    }
  };
  return (
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Beygir:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" onChange={handleChange}>
              <option>Seçiniz..</option>
              {powers.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopPower.propTypes = {
  powers: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default ShopPower;
