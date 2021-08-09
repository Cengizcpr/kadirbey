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
import ShopSearch from "../../components/product/ShopSearch";
import ShopColor from "../../components/product/kadirbey/ShopColor";
import ShopCase from "../../components/product/kadirbey/ShopCase";
import ShopGear from "../../components/product/kadirbey/ShopGear";
import ShopBrand from "../../components/product/kadirbey/ShopBrand";
import ShopPrice from "../../components/product/kadirbey/ShopPrice";
import ShopTraction from "../../components/product/kadirbey/ShopTraction";
import ShopPower from "../../components/product/kadirbey/ShopPower";
import ShopModel from "../../components/product/kadirbey/ShopModel";

//import ShopSize from "../../components/product/ShopSize";
import ShopTag from "../../components/product/ShopTag";
import ShopCategories from "../../components/product/ShopCategories";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("Seçiniz..");
  const [gear, setGear] = useState("");
  const [caseType, setCase] = useState("");
  const [traction, setTraction] = useState("");
  const [power, setPower] = useState("");
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

  }
  const uniqueCategories = getIndividualCategories(products);
  const uniqueColors = getIndividualColors(products);
  const uniqueBrand = getIndividualBrands(products);
  const uniqueCase = getIndividualCase(products);
  const uniqueGear = getIndividualGear(products);
  const uniqueTraction = getIndividualTraction(products);
  const uniquePower = getIndividualPower(products);

  //const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
        {/* filter by categories 
      <ShopCategories
        brands={uniqueBrand}
        getSortParams={getSortParams}
      />
    */}   

      {/*  <ShopBrand brands={uniqueBrand} getSortParamsBrand={getSortParamsBrand} />
            <ShopGear gears={uniqueGear} getSortParams={getSortParams} />

      <ShopModel colors={uniqueColors} getSortParamsModel={getSortParamsModel} />

     <ShopColor colors={uniqueColors} getSortParams={getSortParams} />
      <ShopCase cases={uniqueCase} getSortParams={getSortParams} />
      <ShopTraction tractions={uniqueTraction} getSortParams={getSortParams} />
      <ShopPower powers={uniquePower} getSortParams={getSortParams} /> 

      <ShopPrice colors={uniqueColors} getSortParams={getSortParams} />*/}
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
            <select id="cen" className="form-control float-left" onChange={handleChangeBrand} value={brand}>
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
            <select className="form-control float-left" onChange={handleChangeColor} >
              <option>{name}</option>
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
            <select className="form-control float-left" onChange={handleChangeGear}>
              <option>{name}</option>
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
            <select className="form-control float-left" onChange={handleChangeCase}>
              <option>{name}</option>
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
            <select className="form-control float-left" onChange={handleChangeTraction}>
              <option>{name}</option>
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
            <select className="form-control float-left" onChange={handleChangePower}>
              <option>{name}</option>
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
