import React from 'react'
// import SimpleImageSlider from 'react-simple-image-slider/dist/ImageSlider'
import SimpleImageSlider from 'react-simple-image-slider'

function Slider_2() {
    

    const sliderImages = [

        {
            url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9368/1697532960290/front-left-side-47.jpg"
        },
        {
            url: "https://images.moneycontrol.com/static-mcnews/2021/01/The-new-Fortuner.jpg?impolicy=website&width=1600&height=900"
        },
        {
            url: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/145343/left-front-three-quarter0.jpeg?isig=0&wm=0"
        },
        {
            url: "https://stat.overdrive.in/wp-content/odgallery/2021/06/59648_2021_Land-Rover-Range-Rover_Velar_2.jpg"
        },
        {
            url: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-65424,resizemode-75,msid-87022241/magazines/panache/super-luxe-suv-urus-becomes-the-first-lamborghini-to-scale-worlds-highest-drivable-road-in-ladakh.jpg"
        }

    ]


  return (
    
    <div className='container-fluid mt-5'>
        <div className="container">

            <SimpleImageSlider
                width={800}
                height={500}
                images={sliderImages}
                showNavs={true}
            />

        </div>
    </div>


    // For use of Ready made Image Slider : 
    // (Step-1) npm i react-simple-image-slider
    // (Step-2) import SimpleImageSlider from 'react-simple-image-slider'
    // (Step-3) Use thig Tag : <SimpleImageSlider width={800} height={500} images={sliderImages} showNavs={true} />
    // (Step-4) Create Varibale of Image URL path in Object in Array 
    // Example :   
    // const sliderImages = [
    //     {
    //         url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9368/ 1697532960290front-left-side-47.jpg"
    //      }
    //  ]
 
  
    )
}

export default Slider_2