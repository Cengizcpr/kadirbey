import React from "react";
import Swiper from "react-id-swiper";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
import imageData from "../../data/image-slider/image-slider-two.json";
import Marquee from "react-fast-marquee";

const ImageSliderTwo = () => {
  const settings = {
    loop: false,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 8
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div className="image-slider-area">
      <div className="image-slider-active mb-5">
      <Marquee>
    <Swiper {...settings}>
          {imageData &&
            imageData.map((single, key) => {
              return (
                <ImageSliderOneSingle
                  data={single}
                  sliderClass="swiper-slide"
                  key={key}
                />
              );
            })}
        </Swiper></Marquee>

    
      </div>
    </div>
  );
};

export default ImageSliderTwo;
