import { Slider } from '@mui/base'
import { Category } from '@mui/icons-material'
import React, { useState } from 'react'

function Slider_Google_AI() {
    
    const [categories, setCategories] = useState([
        "https://stat.overdrive.in/wp-content/odgallery/2021/06/59648_2021_Land-Rover-Range-Rover_Velar_2.jpg",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
    ])



  return (

    <div className='container-fluid'>
        <div className="container">

            <Slider min={0} max={categories.length - 1} value={0} onChange={ (value) => setCategories(categories.slice(0, value)) } >
                {categories.map((Category, index) => (
                    <div key={Category} className='category-item' style={{width: "800px", height: '500px'}}>
                        {Category}
                    </div>
                ))}
            </Slider>

        </div>
    </div>

  )
}

export default Slider_Google_AI