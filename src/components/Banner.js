import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner({data}) {
    // console.log(data);
    var settings = {
      className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
    };
  return (
    <div>
    <Slider {...settings}>
    { 
        data && data.map((ele) => {
       return(
        <div key={ele.id} className="pt-4 px-8 outline-none">
            <img  alt="images"src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + ele.imageId} />
        </div>
       ) 
    })}
    </Slider>
    </div>
);
}
// type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget

