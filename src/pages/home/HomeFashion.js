import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import PropTypes from "prop-types";
import ProductSliderThree from "../../wrappers/product/ProductSliderThree";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import HeroSliderThirtyTwo from "../../wrappers/hero-slider/HeroSliderThirtyTwo";
import { connect } from "react-redux";

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Kadirbey Oto | Güvendiğiniz Hizmet</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        <HeroSliderThirtyTwo spaceBottomClass="pb-100" />
    

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-10" spaceBottomClass="pb-60" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
        
        <ImageSliderTwo />
      </LayoutOne>
    </Fragment>
  );
};

BlogFeatured.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(HomeFashion);
