import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  getIndividualBrands,
  getIndividualCase,
  getIndividualGear,
  getIndividualTraction,
  getIndividualPower
} from "../../helpers/product";


const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const [color, setColor] = useState("Seçiniz..");
  const [brand, setBrand] = useState("Seçiniz..");
  const [gear, setGear] = useState("Seçiniz..");
  const [caseType, setCase] = useState("Seçiniz..");
  const [traction, setTraction] = useState("Seçiniz..");
  const [power, setPower] = useState("Seçiniz..");
  const [name,setName]=useState("Seçiniz..");
  const handleChangeGear = (e) => { 
    setGear(e.target.value)
  }
  const handleChangeColor = (e) => { 
    setColor(e.target.value)
  }
  const handleChangeBrand = (e) => {
    setBrand(e.target.value)
  };
  const handleChangeCase = (e) => {
    setCase(e.target.value)
  };
  const handleChangeTraction = (e) => {
    setTraction(e.target.value)
  };
  const handleChangePower = (e) => {
    setPower(e.target.value)
  };
  const handleSubmit = (e) => {
    getSortParams(brand,color,gear,caseType,traction,power,"all")
  }
  const handleSubmitClear = (e) => {
    getSortParams("clear");
    setBrand("Seçiniz..")
    setPower("Seçiniz..")
    setTraction("Seçiniz..")
    setCase("Seçiniz..")
    setColor("Seçiniz..")
    setGear("Seçiniz..")

  }
  const uniqueColors = getIndividualColors(products);
  const uniqueBrand = getIndividualBrands(products);
  const uniqueCase = getIndividualCase(products);
  const uniqueGear = getIndividualGear(products);
  const uniqueTraction = getIndividualTraction(products);
  const uniquePower = getIndividualPower(products);

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
     
      <div className="sidebar-widget">
      <div className="sidebar-widget-list">
        <div className="row">
 <button className="form-control mt-0"onClick={handleSubmitClear}>Filtreleri Temizle</button>

 </div></div></div>

 
 {/* Marka */}
 <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Marka:</div>
          <div className="col-lg-9 float-left">
            <select id="cen" className="form-control float-left" onChange={handleChangeBrand} value={brand} >
              <option>{brand}</option>
              {uniqueBrand.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
     {/*Renk */}
  <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Renk:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" onChange={handleChangeColor} value={color}>
              <option>{color}</option>
              {uniqueColors.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
      {/* Vites Tipi */ }
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom">Vites Tipi:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" onChange={handleChangeGear} value={gear}>
              <option>{gear}</option>
              {uniqueGear.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
    {/**Kasa Tipi */}
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom">Kasa Tipi:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" onChange={handleChangeCase} value={caseType}> 
              <option>{caseType}</option>
              {uniqueCase.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
    {/**Çekiş  */}
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Çekiş:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" value={traction} onChange={handleChangeTraction}>
              <option>{traction}</option>
              {uniqueTraction.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
    {/**Beygir */}
    <div className="sidebar-widget">
      <div className="sidebar-widget-list mt-20">
        <div className="row">
          <div className="col-lg-3 align-text-bottom mt-2">Beygir:</div>
          <div className="col-lg-9 float-left">
            <select className="form-control float-left" value={power} onChange={handleChangePower}>
              <option>{power}</option>
              {uniquePower.map((color, key) => {
                return <option key={key}>{color} </option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
    <button className="form-control mt-4"onClick={handleSubmit}>Filtrele</button>

     
      {/* filter by size 
      <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />*/}

      {/* filter by tag 
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />*/}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
