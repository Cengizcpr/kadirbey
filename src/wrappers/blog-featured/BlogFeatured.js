import PropTypes from "prop-types";
import React from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../components/section-title/SectionTitle";
import { connect } from 'react-redux';

const BlogFeatured = ({ spaceTopClass, spaceBottomClass, products }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid pr-5 pl-5">
        <SectionTitle
          titleText="Showroom"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {products.map(singlePost => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};



BlogFeatured.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
}

const mapStateToProps = state => {
  return{
      products: state.productData.products
  }
}


export default connect(mapStateToProps)(BlogFeatured);