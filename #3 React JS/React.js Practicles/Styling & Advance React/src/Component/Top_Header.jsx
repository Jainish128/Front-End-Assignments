import React from 'react'
// import { Link } from '@mui/material'
import Link from '@mui/material/Link';

function Top_Header() {
  return (

    <div>
      <div className="conatiner-fluid bg-light">




        {/* ----- Top Header ----- */}
        <div className="d-flex justify-content-around pt-3 bg-light border border-bottom-0">
          <div>
            <ul>
              <Link className='pe-3' to="#" color="black" underline='none'> About Us </Link>
              <Link className='pe-3' to="#" color="black" underline='none'> My Account </Link>
              <Link className='pe-3' to="#" color="black" underline='none'> Wishlist </Link>
              <Link className='pe-3' to="#" color="black" underline='none'> Order Tracking </Link>
            </ul>
          </div>
          <div>
            <span> Get great devices on to 50% off 
              <Link to='' underline='none' color="#1abc9c"> View details </Link> 
            </span>
          </div>
          <div>
            <ul>
              <span> 
                Need help? Call Us 
                <Link to='' underline='none' color="#1abc9c"> +1800 900 </Link> 
              </span>
            </ul>
          </div>
        </div>





      </div>
    </div>

  )
}

export default Top_Header