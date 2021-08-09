// get products
export const getProducts = (products, category, type, limit) => {
  const finalProducts = category
    ? products.filter(
        product => product.category.filter(single => single === category)[0]
      )
    : products;

  if (type && type === "new") {
    const newProducts = finalProducts.filter(single => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }
  if (type && type === "saleItems") {
    const saleItems = finalProducts.filter(
      single => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(
    single =>
      single.id === product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor === color
        : true) &&
      (single.selectedProductSize ? single.selectedProductSize === size : true)
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        single =>
          single.id === product.id &&
          single.selectedProductColor === color &&
          single.selectedProductSize === size
      )[0].quantity;
    } else {
      return cartItems.filter(single => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};
//-----











export const getSortedFilterProducts = (products,sortType,sortValue) => {
  console.log(sortType)

  if (sortType === "filterSort") {
    let sortProducts = [...products];
    if (sortValue === "default") {
      return sortProducts;
    }
    if (sortValue === "priceHighToLow") {
      return sortProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sortValue === "priceLowToHigh") {
      return sortProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
  }
  return products

}


//-----

//get products based on category
export const getSortedProducts = (products,brand,color,gear,caseType,traction,power,all) => {
  //    getSortParams(brand,color,gear,caseType,traction,power)

  console.log(brand)
  if(brand==="clear"){
    return products
  }






  if(products){
    if(all==="all"){
    return products.filter(
      product => (product.brand === brand || brand =="")  &&  (product.gear === gear || gear =="") &&  (product.variation[0].color  === color || color =="")
      &&  (product.power === power || power =="")  &&  (product.case === caseType || caseType=="")  &&  (product.traction === traction || traction=="")
      );
    }

  }
  
 /* if (products && sortType && sortValue) {
    const a="brands"
    if (sortType === "category") {
      return products.filter(
        product => product.category.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "tag") {
      return products.filter(
        product => product.tag.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "color") {
      return products.filter(
        product =>
          product.variation &&
          product.variation.filter(single => single.color === sortValue)[0]
      );
    }if (a === "brands") {
      return products.filter(
        product => product.brand === sortType &&  product.gear === sortValue
        );
    }
    if (sortType === "gear") {
      return products.filter(
        product => product.gear === sortValue
        );
    }
    if (sortType === "traction") {
      return products.filter(
        product => product.traction === sortValue
        );
    }
    if (sortType === "case") {
      return products.filter(
        product => product.case === sortValue
        );
    }
    if (sortType === "powers") {
      return products.filter(
        product => product.power === sortValue
        );
    }
    if (sortType === "size") {
      return products.filter(
        product =>
          product.variation &&
          product.variation.filter(
            single => single.size.filter(single => single.name === sortValue)[0]
          )[0]
      );
    }
    if (sortType === "filterSort") {
      let sortProducts = [...products];
      if (sortValue === "default") {
        return sortProducts;
      }
      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }*/
  return products;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = products => {
  let productCategories = [];
  products &&
    products.map(product => {
      return (
        product.category &&
        product.category.map(single => {
          return productCategories.push(single);
        })
      );
    });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};

// get individual tags
export const getIndividualTags = products => {
  let productTags = [];
  products &&
    products.map(product => {
      return (
        product.tag &&
        product.tag.map(single => {
          return productTags.push(single);
        })
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

// get individual colors
export const getIndividualColors = products => {
  let productColors = [];
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return productColors.push(single.color);
        })
        
      );
    });
  const individualProductColors = getIndividualItemArray(productColors);
  return individualProductColors;
};
// get individual colors
export const getIndividualBrands = products => {
  let productBrands= [];
  products &&
    products.map(product => {
      return (
        productBrands.push(product.brand)
        
      );
    });
  const individualProductBrands= getIndividualItemArray(productBrands);

  return individualProductBrands;
};
export const getIndividualCase = products => {
  let productCase= [];
  products &&
    products.map(product => {
      return (
        productCase.push(product.case)
        
      );
    });
  const individualProductCase= getIndividualItemArray(productCase);

  return individualProductCase;
};
export const getIndividualTraction = products => {
  let productTraction= [];
  products &&
    products.map(product => {
      return (
        productTraction.push(product.traction)
        
      );
    });
  const individualProductTraction= getIndividualItemArray(productTraction);

  return individualProductTraction;
};
export const getIndividualPower = products => {
  let productPower= [];
  products &&
    products.map(product => {
      return (
        productPower.push(product.power)
        
      );
    });
  const individualProductPower= getIndividualItemArray(productPower);

  return individualProductPower;
};
export const getIndividualGear = products => {
  let productGear= [];
  products &&
    products.map(product => {
      return (
        productGear.push(product.gear)
        
      );
    });
  const individualProductGear= getIndividualItemArray(productGear);

  return individualProductGear;
};
// get individual sizes
export const getProductsIndividualSizes = products => {
  let productSizes = [];
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return single.size.map(single => {
            return productSizes.push(single.name);
          });
        })
      );
    });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
};

// get product individual sizes
export const getIndividualSizes = product => {
  let productSizes = [];
  product.variation &&
    product.variation.map(singleVariation => {
      return (
        singleVariation.size &&
        singleVariation.size.map(singleSize => {
          return productSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};

export const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  );
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
