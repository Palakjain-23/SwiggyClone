import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MenuItems extends Component {
  render() {
    const { data } = this.props;
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {data &&
            data.map((ele) => (
              <div key={ele.id} className="pt-4 px-2 outline-none">
                <img className="h-25 my-15 p-5"
                  src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" +
                    ele.imageId
                  }
                  alt={`Menu item ${ele.id}`}
                />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default MenuItems;
