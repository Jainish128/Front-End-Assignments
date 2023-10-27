import React from 'react'
import './Banner_Slider.css'

function Banner_Slider() {
  return (
    <div>
        <div className="container-fluid">
            <div className="container mt-4">
                
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        {/* <button type="button" data-bs-target="#demo" data-bs-slide-to={2} /> */}
                    </div>
                    {/* The slideshow/carousel */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://cdn.pixabay.com/photo/2022/08/01/07/59/vegetables-7357585_1280.png" alt="Los Angeles" className="d-block slider-img" />
                            {/* <div className="carousel-caption slide-content"> */}
                            <div className="slide-content">
                                <h1> Don't miss amazing <br /> grocery deals </h1>
                                <p> Sign up for the daily newsletter </p>
                                <div className="subscribe-box">
                                    <input type="text" placeholder='Your Email Addres' />
                                    <button> Subscribe </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://www.ecohoy.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/e/c/ecobuddy_cotton_vegetablefruit_bag_pack_of_5_10_1000x1000_800x800.png" alt="Los Angeles" className="d-block slider-img" />
                            {/* <div className="carousel-caption slide-content"> */}
                            <div className="slide-content">
                                <h1> Buy anything with <br /> 35% OFF </h1>
                                <p> Sign up for the daily news </p>
                                <div className="subscribe-box">
                                    <input type="text" placeholder='Your Email Addres' />
                                    <button> Subscribe </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left and right controls/icons */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Banner_Slider