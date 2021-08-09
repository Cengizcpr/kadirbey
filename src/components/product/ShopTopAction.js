import PropTypes from "prop-types";
import React from "react";
import { setActiveLayout } from "../../helpers/product";

const ShopTopAction = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount
}) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select
            onChange={e => getFilterSortParams("filterSort", e.target.value)}
          >
            <option value="default"> Sırala</option>
            <option value="priceLowToHigh">Artan Fiyat</option>
            <option value="priceHighToLow">Azalan Fiyat</option>
         
          </select>
        </div>
        <p className="float-right">
          Gösterilen {sortedProductCount} - {productCount} 
        </p>
      </div>

     
    </div>
  );
};

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number
};

export default ShopTopAction;
