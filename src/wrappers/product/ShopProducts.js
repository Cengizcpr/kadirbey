import PropTypes from "prop-types";
import React from "react";
import ProductgridList from "./ProductgridList";
import { Link } from "react-router-dom";
import axios from "axios"
const ShopProducts = ({ products, layout }) => {
  console.log(products)
  const  onClickDetails = (detailsPath)=>{
   
    }
  return (
    <div className="shop-bottom-area mt-35">
    <table className={`table  table-striped text-center`}>
      <thead>
        <tr>
          <th></th>
          <th>Marka</th>
          <th>Model</th>
          <th>Yıl</th>
          <th>Km</th>
          <th>Fiyat</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr>
              <td>
                <button onClick={() =>onClickDetails(product.detailsPath)}>
                  <img className="default-img" src={product.image[0]} alt="" style={{width:"150px"}}/>
                </button>
              </td>
              <td  className="align-middle">
                <img
                  className="default-img vertical-align-center"
                  src={product.brandImage}
                  alt=""
                  style={{width:"50px"}}
                />
              </td>
              <td className="align-middle">
              <Link to={"product/"+product.id}>{product.name}</Link>
              </td>
              <td  className="align-middle">{product.year}</td>
              <td  className="align-middle">{product.km}km</td>
              <td  className="align-middle">{product.price}TL</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProducts;
