import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useRestaurantCard from "../utils/useRestaurantCard";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

function TopRestau() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const restaurants = useRestaurantCard();
  return (
    <div className="slider-container px-4">
      <Slider {...settings}>
     { restaurants && restaurants.map((res) => {
              return (
                <Link key={res.id} to={"/FlavourFleet/restaurants/" + res.info.id}>
                  <RestaurantCard resData={res} />
                </Link>
              )
            })}      
      </Slider>
    </div>
  );
}

export default TopRestau;
